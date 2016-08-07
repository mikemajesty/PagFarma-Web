const sequelize = require('../data/database').sequelize;
const Sequelize = require('../data/database').Sequelize;
const Farma = require('./farma').Farma;

const Budget = sequelize.define('budget', {
  value: Sequelize.DECIMAL,
  status: {type: Sequelize.STRING, defaultValue: "NOT APROVED"}
});

Budget.belongsTo(Farma);

module.exports = {
  Budget
}
