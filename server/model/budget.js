const sequelize = require('../data/database').sequelize;
const Sequelize = require('../data/database').Sequelize;
const farmaModel = require('./farma').Farma;
const solicitation = require('./solicitation').Solicitation;

const Budget = sequelize.define('budget', {
  value: Sequelize.DECIMAL
});

Budget.hasOne(farmaModel, {as: 'farmacies'})
Budget.hasOne(solicitation, {as : 'solicitations'});

module.exports = {
  Budget
}
