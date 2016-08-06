(angular => {
  'use strict';

  angular.module('Wella')

  .factory("CourseTypeService", ['$http', 'API', CourseTypeService]);

  function CourseTypeService($http, API) {

    const list = () => {
      return $http.get(`${API}/course_type`)
        .then(res => res.data);
    };

    return {
      list
    };
  }
})(angular);
