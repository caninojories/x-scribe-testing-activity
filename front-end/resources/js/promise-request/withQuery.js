(function() {
  'use strict';

  angular
    .module('app.promise.request')
    .factory('withQuery', withQuery);

    withQuery.$inject = ['$q', 'Restangular'];
    /*@ngInject*/
    function withQuery($q, Restangular) {
      var service = {
        HTTPGET : HTTPGET,
        HTTPOST : HTTPOST
      };

      return service;

      function HTTPGET(apiSERVICE, apiURL, queryParams) {
        return apiSERVICE.one(apiURL)
          .get(queryParams)
          .then(HTTPGETCALLBACK)
          .catch(function(response) {
            response.data._id = undefined;
            return response;
          });

        function HTTPGETCALLBACK(response, status, header, config) {
          return Restangular.stripRestangular(response);
        }
      }

      function HTTPOST(apiSERVICE, apiURL, queryParams) {
        return $q(function(resolve, reject) {
          apiSERVICE.all(apiURL)
            .post(queryParams)
            .then(HTTPOSTCALLBACK)
            .catch(function(response) {

              return reject(response);
            });

          function HTTPOSTCALLBACK(response, status, header, config) {
            return resolve(Restangular.stripRestangular(response));
          }
        });
      }
    }
}());
