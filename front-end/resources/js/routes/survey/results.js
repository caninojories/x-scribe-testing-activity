(function() {
  'use strict';

  angular
    .module('app.survey')
    .controller('Results', Results);

  Results.$inject = [
    /*angular services/factory*/
    '$scope', '$state', '$timeout',
    /*ionic services/factory*/
    /*cordova services/factory*/
    /*third party services/factory*/
    /*custom services/factory*/
    'DataQuery', 'Settings', 'userAPI'
    /*custom directives*/
  ];

  function Results (
    $scope, $state, $timeout,
    DataQuery, Settings, userAPI
  ) {
    var vm = this;

    $scope.$on('paginate', function(event, data) {
      vm.surveyData = data;
    });

    DataQuery
      .get(
        userAPI,
        'survey', {
          skip  : 0,
          limit : 10
        }
      ).then(function(response) {
        vm.surveyData = response;
      })
      .catch(function(error) {
        console.log(error);
      });
  }
}());
