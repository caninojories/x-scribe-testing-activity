(function() {
    'use strict';

    var config = {
      appErrorPrefix: '[Xscribe Error] ',
      appTitle: 'Xscribe Test Activity',
      version: '0.0.0'
    };

    angular
      .module('app.core')
      .value('config', config)
      .config(configure)
      .config(toastrConfig)
      .config(registerNsignInConfig);

    toastrConfig.$inject = ['toastr'];
    /* @ngInject */
    function toastrConfig(toastr) {
        toastr.options.timeOut = 4000;
        toastr.options.positionClass = 'toast-bottom-right';
    }

    registerNsignInConfig.$inject = ['$authProvider'];
    /* @ngInject */
    function registerNsignInConfig($authProvider) {
      $authProvider.loginUrl    = window.location.origin + '/userApi/userLogIn';
      $authProvider.signupUrl   = window.location.origin + '/userApi/userRegister';
      $authProvider.tokenPrefix = 'magens';

      $authProvider.facebook({
        clientId: '789445017793242',
        url: window.location.origin + '/userApi/logInUserFacebook'
      });

      $authProvider.google({
        clientId: '514855305579-vmrkir3l76c0v2t6b5mtnphh38uf9irp.apps.googleusercontent.com',
        url: window.location.origin + '/userApi/logInUserGoogle'
      });
    }

    configure.$inject = ['$httpProvider', '$locationProvider', '$logProvider', '$urlRouterProvider',
      '$stateProvider', 'exceptionHandlerProvider', 'routeHelperProvider'];
    /* @ngInject */
    function configure ($httpProvider, $locationProvider, $logProvider, $urlRouterProvider,
      $stateProvider, exceptionHandlerProvider, routeHelperProvider) {
        $locationProvider.html5Mode(true);
        $logProvider.debugEnabled(true);
        /*Configure the common exception handler*/
        exceptionHandlerProvider.configure(config.appErrorPrefix);
    }
}());
