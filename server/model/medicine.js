const sequelize = require('../data/database').sequelize;
const Sequelize = require('../data/database').Sequelize;

const Medicine = sequelize.define('medicine', {
  code: Sequelize.STRING,
  quantity: Sequelize.INTEGER,
  nome: Sequelize.STRING,
  marca: Sequelize.STRING
});

module.exports = {
  Medicine
}
