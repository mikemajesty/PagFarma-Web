(angular => {
  'use strict';

  angular.module('Wella')

  .factory('CourseService', ['$http', 'API', CourseService]);

  function CourseService($http, API) {
    let promise;

    const list = () => {
      if (promise) {
        return promise;
      }

      promise = $http.get(`${API}/course/find`)
        .then(res => res.data);

      return promise;
    };

    const get = (id) => {
      return list().then(list => {
        return list.filter(x => x.id*1 === id*1)[0];
      });
    };

    return {
      list,
      get
    };
  }
})(angular);
