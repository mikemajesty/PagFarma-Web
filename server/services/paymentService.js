const sequelize = require('../data/database').sequelize;
const modelSolicitation = require('../model/solicitation');
const modelBudget = require('../model/budget');

const Solicitation = modelSolicitation.Solicitation;
const Budget = modelBudget.Budget;

const create = (data) => {
  Budget.findOne({solicitationId: data.solicitationId, id: data.budgetId})
    .then((budget) => {
      budget.status = "APROVED";
      budget.save();
    });

  Solicitation.findOne({id: data.solicitationId})
    .then((solicitation) => {
      solicitation.status = "ACCEPTED";
      solicitation.save();
    });
}

module.exports = {
  create
}
