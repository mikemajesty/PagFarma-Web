const sequelize = require('../data/database').sequelize;
const Sequelize = require('../data/database').Sequelize;

const modelMedicine = require('../model/medicine');
const Medicine = modelMedicine.Medicine;

const modelBudget = require('../model/budget');
const Budget = modelBudget.Budget;

const Solicitation = sequelize.define('solicitation', {
  datePayment: Sequelize.DATE,
  status: {type: Sequelize.STRING, defaultValue: "WAITING"},
});

Solicitation.hasMany(Medicine, {as: 'medicines'});
Solicitation.hasMany(Budget, {as: 'budgets'});

module.exports = {
  Solicitation
}
