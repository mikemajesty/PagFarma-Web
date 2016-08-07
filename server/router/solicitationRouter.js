const solicitationService = require('../services/solicitationService');

const create = (req, res) => {
  const data = {userId: req.body.userId, codigos: req.body.codigos};
  solicitationService.create(data);
  res.json(201);
}

const findAll = (req, res) => {
  const status = req.query.status;
  return solicitationService.findAll({status: status})
    .then((data) => {
      res.json(data);
    }).catch((err) => {
      res.json(500);
    });
}

const findAllBudget = (req, res) => {
  const status = req.query.status;
  return solicitationService.findAllBudget({status: status})
    .then((data) => {
      res.json(data);
    }).catch((err) => {
      console.log(err);
      res.json(500);
    });
}

module.exports = {
  create,
  findAll,
  findAllBudget
}
