const paymentService = require('../services/paymentService');

const create = (req, res) => {
  const data = {orderId: req.body.orderId, budgetId: req.body.budgetId};
  console.log(data);
  paymentService.create(data);
  res.sendStatus(201);
}

module.exports = {
  create
}
