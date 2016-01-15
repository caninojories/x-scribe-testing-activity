(function() {
  'use strict';

  angular
    .module('app.survey')
    .directive('onLoadTable', onLoadTable);

 onLoadTable.$inject = ['$compile', '$filter', '$rootScope', '$timeout', 'DataQuery', 'userAPI'];
 /*@ngInject*/
  function onLoadTable($compile, $filter, $rootScope, $timeout, DataQuery, userAPI) {
    var directive = {
      restrict: 'E',
      require : 'ngModel',
      replace : true,
      scope: {
        theader  : '=tHeader',
        ngModel  : '='
      },
      template : '<div class="resultPage">' +
                    '<table class="table">'+
                      '<thead>'+
                        '<th ng-repeat="thead in theader">{{thead}}</th>' +
                      '</thead>' +
                      '<tbody>' +
                        '<tr ng-repeat="result in ngModel.data" ng-click="showPopupResult(result)">' +
                          '<th>{{result.createdAt | date:"medium"}}</th>' +
                          '<th>{{result.name}}</th>' +
                          '<th>{{result.color}}</th>' +
                        '</tr>' +
                      '</tbody>' +
                   '</table>' +
                  '</div>',
      link     : link
    };

    return directive;

    function link(scope, element, attrs, ngModel) {
      scope.showPopupResult = showPopupResult;
      var self;

      ngModel.$render = function() {
        if (ngModel.$viewValue) {

          if ($('.pagination').length > 0) {
            return;
          }

          var data = ngModel.$viewValue;

          var pagination =    '<ul class="pagination">';
          for(var i = 1; i <= Math.ceil(data.count / 10); i++) {
            /*
             * Just for demo purposes
             * Paginate by 10
             */
            if (i === 1) {
              pagination += '<li class="paginate" style="background-color: #c0392b">' + i + '</li>';
            } else {
              pagination += '<li class="paginate">' + i + '</li>';
            }
          }
          pagination +=   '</ul>';

          /* set the default color */
          $('.paginate').css('background-color', 'blue');

          $('.resultPage').append(pagination);
          $('.paginate').on('click', function() {
            if (self) {
              $(self).css('background-color', '#d9534f');
            } else {
              $('.paginate:first').css('background-color', '#d9534f');
            }

            self = this;
            $(this).css('background-color', '#c0392b');
            var skip = $(this).text();
                skip = ((parseInt(skip) - 1) * 10);

            DataQuery
              .get(
                userAPI,
                'survey', {
                  skip  : skip,
                  limit : 10
                }
              ).then(function(response) {
                scope.$emit('paginate', response);
              })
              .catch(function(error) {
                console.log(error);
              });
          });
        }
      };

      function showPopupResult(result) {
        $rootScope.modalOpen = true;

        var backDrop = '<div class="modal-backdrop"></div>';
        var resultPage = '<div ng-show="modalOpen" class="modal xscribe-40-offset-40 modal-popup">' +
                            '<ul class="xscribe-40 modal-popup-content">' +
                              '<li><span class="xscribe-title">Submission Date: </span>' +
                              $filter('date')(result.createdAt, 'short') + '</li>' +
                              '<li><span class="xscribe-title">Name: </span>' + result.name + '</li>' +
                              '<li><span class="xscribe-title">Email: </span>' + result.email + '</li>' +
                              '<li><span class="xscribe-title">Gender: </span>' + result.gender + '</li>' +
                              '<li><span class="xscribe-title">Color: </span>' + result.color + '</li>' +
                            '</ul>' +
                            '<a href="#" style="display:block;width:47%;text-align: center;color: #34495e" ' +
                            'class="button xscribe-45 closePopup">OK</a>' +
                          '</div>';
        $('.resultPage').append(resultPage);
        $('body').append(backDrop);

        $('.closePopup').on('click', function() {
          $rootScope.modalOpen = false;
          $('.modal-popup').remove();
          $('.modal-backdrop').remove();
        });
      }
    }
  }
}());
