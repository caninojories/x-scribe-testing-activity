(function() {
  'use strict';

  angular
    .module('app.services')
    .service('Settings', Settings);

    Settings.$inject = ['$q'];
    /*@ngInject*/
    function Settings($q) {
      this.Dom          = $;
    }
}());
