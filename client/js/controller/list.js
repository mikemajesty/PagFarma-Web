(angular => {
  angular.module('Gs1')

  .controller('ListCtrl', [ListCtrl]);

  function ListCtrl() {
    console.log('listCtrl');

    this.budgets = [
      {
        user: 'Ana Paula',
        deadline: '08/08/2016',
        status: 'waiting',
        products: [
          {
            name: 'Galvus Met',
            brand: 'Novartis',
            quantity: '1'
          },
          {
            name: 'Panacea',
            brand: 'Generics',
            quantity: '14'
          },
        ]
      },
      {
        user: 'Carlos Ferrari',
        deadline: '07/08/2016',
        status: 'waiting',
        products: [
          {
            name: 'Neosaldina',
            brand: 'Novartis',
            quantity: '5'
          },
          {
            name: 'Panacea',
            brand: 'Generics',
            quantity: '23'
          },
          {
            name: 'Biotonico Fontoura',
            brand: 'Fontoura',
            quantity: 1
          }
        ]
      },
      {
        user: 'Thaís Ribeiro',
        deadline: '05/08/2016',
        status: 'refused',
        products: [
          {
            name: 'Neosaldina',
            brand: 'Novartis',
            quantity: '5'
          },
          {
            name: 'Panacea',
            brand: 'Generics',
            quantity: '23'
          },
          {
            name: 'Biotonico Fontoura',
            brand: 'Fontoura',
            quantity: 1
          }
        ]
      },
      {
        user: 'Thaís Ribeiro',
        deadline: '03/07/2016',
        status: 'accepted',
        products: [
          {
            name: 'Neosaldina',
            brand: 'Novartis',
            quantity: '5'
          },
          {
            name: 'Panacea',
            brand: 'Generics',
            quantity: '23'
          },
          {
            name: 'Biotonico Fontoura',
            brand: 'Fontoura',
            quantity: 1
          }
        ]
      },
    ];
  }

})(angular);
