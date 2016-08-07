(angular => {
  angular.module('Gs1')

  .controller('NotFoundCtrl', [NotFoundCtrl]);

  function NotFoundCtrl() {
    console.log('notFoundCtrl');
  }

})(angular);
