(angular => {
  "use strict";

  angular.module("lodash", []).constant("_", _);

  angular.module("PagFarma", ["ngRoute", "ui.utils.masks", "ngMessages", "lodash"])

  .constant("API", "/api")
  .constant("VIEW_PATH", "/view")

  .config(['$routeProvider', '$locationProvider', 'VIEW_PATH', configRouter]);

  function configRouter($routeProvider, $locationProvider, VIEW_PATH) {
    $routeProvider
      .when('/', {
        controller: 'LandingCtrl',
        controllerAs: '$ctrl',
        templateUrl: `${VIEW_PATH}/landing.html`
      })

      .when('/list', {
        controller: 'ListCtrl',
        controllerAs: '$ctrl',
        templateUrl: `${VIEW_PATH}/list.html`
      })

      .when('/budget', {
        controller: 'BudgetCtrl',
        controllerAs: '$ctrl',
        templateUrl: `${VIEW_PATH}/budget.html`
      })

      .otherwise({
        controller: 'NotFound',
        controllerAs: '$ctrl',
        templateUrl: `${VIEW_PATH}/notfound.html`
      });
  }

})(angular);
