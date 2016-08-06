const sequelize = require('../data/database').sequelize;
const Sequelize = require('../data/database').Sequelize;

const User = sequelize.define('user', {
  name: Sequelize.STRING,
  login: Sequelize.STRING,
  password: Sequelize.STRING
});

module.exports = {
  User,
  sequelize
}
