const sequelize = require('../data/database').sequelize;
const Sequelize = require('../data/database').Sequelize;
const Farma = require('./farma').Farma;
const Solicitation = require('./solicitation').Solicitation;

const Budget = sequelize.define('budget', {
  value: Sequelize.DECIMAL
});

Budget.hasOne(Farma);
Budget.hasOne(Solicitation);

module.exports = {
  Budget
}
