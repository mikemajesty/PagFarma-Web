const budgetService = require('../services/budgetService');

const create = (req, res) => {
  const budget = {value: 100};
  budgetService.create(budget);
  res.json(201);
}

module.exports = {
  create
}
