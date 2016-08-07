const sequelize = require('../data/database').sequelize;
const Sequelize = require('../data/database').Sequelize;

const Medicine = sequelize.define('medicine', {
  code: Sequelize.STRING,
  quantity: Sequelize.INTEGER
});

module.exports = {
  Medicine
}
