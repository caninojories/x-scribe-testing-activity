(function() {
  'use strict';

  angular
    .module('app.survey')
    .directive('onLoadTableSummary', onLoadTableSummary);

 onLoadTableSummary.$inject = ['$compile', '$filter', '$rootScope', '$timeout'];
 /*@ngInject*/
  function onLoadTableSummary($compile, $filter, $rootScope, $timeout) {
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
                        '<tr ng-repeat="result in ngModel">' +
                          '<th>{{result._id}}</th>' +
                          '<th>{{result.count}}</th>' +
                        '</tr>' +
                      '</tbody>' +
                   '</table>' +
                  '</div>',
      link     : link
    };

    return directive;

    function link(scope, element, attrs, ngModel) {
    }
  }
}());
