const farmaService = require('../services/farmaService');

const create = (req, res) => {
  const farma = {login:req.body.login, password: req.body.password, name: req.body.name};
  farmaService.create(farma);
  res.json(201);
}

const login = (req, res) => {
  const farmaRequest = {login: req.body.login, password: req.body.password};
  farmaService.findByLogin(farmaRequest).then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(500);
  })
}

module.exports = {
  create,
  login
}
