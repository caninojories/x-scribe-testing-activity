(function() {
  'use strict';

  angular
    .module('app.survey')
    .run(appRun);

    appRun.$inject = ['routeHelper'];
    /*@ngInject*/
    function appRun(routeHelper) {
      routeHelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
      return [{
        state: 'survey',
        config: {
          url: '/survey',
          templateUrl: '/client/survey/index.html',
          controller: 'Survey as vm'
        }
      }, {
        state: 'surveyResults',
        config: {
          url: '/survey/results',
          templateUrl: '/client/survey/results.html',
          controller: 'Results as vm'
        }
      }, {
        state: 'surveySummary',
        config: {
          url: '/survey/summary',
          templateUrl: '/client/survey/summary.html',
          controller: 'Summary as vm'
        }
      }];
    }
}());
