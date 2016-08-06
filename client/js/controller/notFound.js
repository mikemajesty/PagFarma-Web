(angular => {
  angular.module('PagFarma')

  .controller('NotFoundCtrl', [NotFoundCtrl]);

  function NotFoundCtrl() {
    console.log('notfoundctrl');
  }

})(angular);
