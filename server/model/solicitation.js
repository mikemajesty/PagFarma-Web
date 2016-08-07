const sequelize = require('../data/database').sequelize;
const Sequelize = require('../data/database').Sequelize;

const modelMedicine = require('../model/medicine');
const Medicine = modelMedicine.Medicine;

const Solicitation = sequelize.define('solicitation', {
  datePayment: Sequelize.DATE,
  status: Sequelize.STRING
});

Solicitation.hasMany(Medicine, {as: 'medicines'});
sequelize.sync();

module.exports = {
  Solicitation
}
