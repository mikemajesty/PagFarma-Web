const Sequelize = require('sequelize');
const pg = require('pg');

var sequelize = new Sequelize('postgres://ppzvgaxsuchdme:f-QT4UzyvfDPz6P8OQVqTvbD5r@ec2-54-163-248-218.compute-1.amazonaws.com:5432/d8rt0l8qn0glta',{native: true,protocol: null});

sequelize
  .authenticate().then((data) => {
    console.log('The connections was successfully');
  }).catch((err) => {console.log('error: ',err);})

module.exports = {
    sequelize,
    Sequelize
}
