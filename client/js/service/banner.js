(angular => {
  'use strict';

  angular.module('Wella')

  .factory('BannerService', ['$http', 'API', BannerService]);

  function BannerService($http, API) {
    let promise;

    const list = () => {
      if (promise) {
        return promise;
      }

      promise = $http.get(`${API}/banner`)
        .then(res => res.data);

      return promise;
    };

    return {
      list
    };
  }
})(angular);
