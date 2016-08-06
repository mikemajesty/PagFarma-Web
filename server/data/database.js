const Sequelize = require('sequelize');

var sequelize = new Sequelize('postgres://pagfarma:pagfarma@localhost:5432/pagfarma');

sequelize
  .authenticate().then((data) => {
    console.log('The connections was successfully');
  }).catch((err) => {console.log('error: ',err);})

module.exports = {
    sequelize,
    Sequelize
}
