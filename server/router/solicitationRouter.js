const solicitationService = require('../services/solicitationService');

const create = (req, res) => {
  const data = {userId: req.body.userId, codigos: req.body.codigos};
  solicitationService.create(data);
  res.json(201);
}

module.exports = {
  create
}
