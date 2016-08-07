(angular => {
  angular.module('Gs1')

  .controller('LandingCtrl', ['API', '$http', '$location', LandingCtrl]);

  function LandingCtrl(API, $http, $location) {
    console.log('landingctrl');

    this.login = (credentials) => {
      console.log('ok');
      $location.path('/list');
      return;
      const promise = $http.post(`${API}/login`, credentials);
      promise.then((result) => {
        if (result.status === 200) {
          $location.path('/list');
        }
      }).catch((err) => {
        this.error = err.data.message || "Falha ao efetuar login";
      });
    };
  }

})(angular);
