(angular => {
  'use strict';

  angular.module('Wella')

  .factory("CityService", ['$http', 'API', CityService]);

  function CityService($http, API) {

    const available = () => {
      return $http.get(`${API}/city/available`)
        .then(res => res.data);
    };

    return {
      available
    };
  }
})(angular);
