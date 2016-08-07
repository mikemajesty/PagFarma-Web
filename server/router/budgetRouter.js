const budgetService = require('../services/budgetService');

const create = (req, res) => {
  console.log("wtf",req.body);
  const budget = {value: req.body.value, farmaId: req.body.formaId, solicitationId: req.body.solicitationId};
  budgetService.create(budget);
  res.json(201);
}

module.exports = {
  create
}
