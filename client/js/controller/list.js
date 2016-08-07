(angular => {
  angular.module('Gs1')

  .controller('ListCtrl', ['$mdDialog', ListCtrl]);

  function ListCtrl($mdDialog) {
    this.accepted = [
      {
        user: 'Ana Paula',
        deadline: '08/08/2016',
        code: 'XYZ8D602',
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
        code: 'JDBC6387',
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
        code: '77S87D3NNV',
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
      }
    ];

    this.pending = [
      {
        user: 'Ana Paula',
        deadline: '08/08/2016',
        code: 'XYZ8D602',
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
        code: 'JDBC6387',
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
        code: '77S87D3NNV',
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
      }
    ];

    this.refused = [
      {
        user: 'Ana Paula',
        deadline: '08/08/2016',
        bought_for: 'R$ 89,70',
        your_offer: 'R$ 92,00',
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
        bought_for: 'R$ 89,70',
        your_offer: 'R$ 92,00',
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
        bought_for: 'R$ 89,70',
        your_offer: 'R$ 92,00',
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
      }
    ];

    this.pending = [
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
      }
    ];
  }
})(angular);
