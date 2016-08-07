const sequelize = require('../data/database').sequelize;
const Sequelize = require('../data/database').Sequelize;
const farmaModel = require('./farma').Farma;
const solicitation = require('./solicitation').Solicitation;

const Badget = sequelize.define('badget', {
  value: Sequelize.DECIMAL
});

Badget.hasOne(farmaModel, {as: 'farmacies'})
Badget.hasOne(solicitation, {as : 'solicitations'});

module.exports = {
  Badget
}
