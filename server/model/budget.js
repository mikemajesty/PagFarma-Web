const sequelize = require('../data/database').sequelize;
const Sequelize = require('../data/database').Sequelize;
const Farma = require('./farma').Farma;

const Budget = sequelize.define('budget', {
  value: Sequelize.DECIMAL,
  name: {type: Sequelize.STRING, defaultValue: "Drogasil"},
  status: {type: Sequelize.STRING, defaultValue: "NOT APROVED"}
});

Budget.belongsTo(Farma);

module.exports = {
  Budget
}
