const serviceUser = require('../services/userService');

const login = (req, res) => {
  const userRequest = {login: req.body.login, password: req.body.password};
  serviceUser.findByLogin(userRequest).then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(500);
  })
};

const create  = (req, res) => {
  const user = {login:req.body.login, password: req.body.password, name: req.body.name};
  console.log(serviceUser.create(user));
  res.json(201);
}


module.exports = {
  login,
  create
}
