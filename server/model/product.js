const sequelize = require('../data/database').sequelize;
const Sequelize = require('../data/database').Sequelize;

const Product = sequelize.define('product', {
  descricao: Sequelize.STRING,
  razao_social: Sequelize.STRING,
  marca: Sequelize.STRING,
  code: Sequelize.STRING,
  largura: Sequelize.STRING,
  peso_liquido: Sequelize.STRING,
  altura: Sequelize.STRING,
  peso_bruto: Sequelize.STRING,
});

module.exports = {
  Product
}
