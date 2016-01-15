(function() {
  'use strict';

  angular
    .module('app.survey')
    .controller('Survey', Survey);

  Survey.$inject = [
    /*angular services/factory*/
    '$scope', '$state', '$timeout',
    /*ionic services/factory*/
    /*cordova services/factory*/
    /*third party services/factory*/
    /*custom services/factory*/
    'DataQuery', 'Settings', 'userAPI'
    /*custom directives*/
  ];

  function Survey (
    $scope, $state, $timeout,
    DataQuery, Settings, userAPI
  ) {
    var vm = this;

    vm.survey = survey;

    vm.colorData = [{
      value : 'none',
      name  : 'Please select your favorite color',
      status: 'Selected'
    }, {
      value : 'Red',
      name  : 'Red'
    }, {
      value : 'Green',
      name  : 'Green'
    }, {
      value : 'Blue',
      name  : 'Blue'
    }, {
      value : 'Yellow',
      name  : 'Yellow'
    }, {
      value : 'Orange',
      name  : 'Orange'
    }, {
      value : 'Purple',
      name  : 'Purple'
    }, {
      value : 'Violet',
      name  : 'Violet'
    }, {
      value : 'Other',
      name  : 'Other'
    }];

    $scope.$watch('vm.other', function(oldValue, newValue) {
      var elem = document.createElement('div');
	    elem.style.color = vm.other;
	    var color = elem.style.color.split(/\s+/).join('').toLowerCase();

      if (!color) {
        vm.isColor = true;
      } else {
        vm.isColor = false;
      }
    });

    function survey(form) {
      if (vm.color !== 'Other') {
        form.$invalid = false;
      }

      if (form.$invalid || vm.color === 'none' || vm.gender === 'none') {
        console.log(vm.other);
        return;
      }

      DataQuery
        .post(
          userAPI,
          'survey', {
            name    : vm.name,
            email   : vm.email,
            gender  : vm.gender,
            color   : vm.color === 'Other' ? vm.other: vm.color
          }
        ).then(function(response) {
          vm.status = 'Successfully saved';
          $timeout(function() {
            vm.status = false;
            $state.go('main');
          }, 5000);
        })
        .catch(function(error) {
          console.log(error);
          vm.status = 'Something went wrong!! = ' + 'Existing email address...';
          $timeout(function() {
            vm.status = null;
          }, 5000);
        });
    }
  }
}());
