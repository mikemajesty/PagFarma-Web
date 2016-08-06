const sequelize = require('../data/database').sequelize;
const Sequelize = require('../data/database').Sequelize;

const Farma = sequelize.define('farma', {
  name: Sequelize.STRING,
  login: Sequelize.STRING,
  password: Sequelize.STRING
});

module.exports = {
  Farma
}
