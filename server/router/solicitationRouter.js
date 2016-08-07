const solicitationService = require('../services/solicitationService');

const create = (req, res) => {
  const data = {userId: req.body.userId, medicines: req.body.medicines};
  console.log(data);
  solicitationService.create(data);
  res.sendStatus(201);
}

const findAll = (req, res) => {
  const userId = req.query.userId;
  return solicitationService.findAll({userId: userId})
    .then((data) => {
      res.json(data);
    }).catch((err) => {
      res.sendStatus(500);
    });
}

const findAllBudget = (req, res) => {
  const status = req.query.status;
  return solicitationService.findAllBudget({status: status})
    .then((data) => {
      res.json(data);
    }).catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
}

module.exports = {
  create,
  findAll,
  findAllBudget
}
