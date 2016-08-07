const sequelize = require('../data/database').sequelize;
const Sequelize = require('../data/database').Sequelize;
const Farma = require('./farma').Farma;

const Budget = sequelize.define('budget', {
  value: Sequelize.DECIMAL
});

Budget.belongsTo(Farma);

module.exports = {
  Budget
}
