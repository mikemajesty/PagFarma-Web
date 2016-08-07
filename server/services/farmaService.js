const sequelize = require('../data/database').sequelize;
const modelFarma = require('../model/farma');

const create = (data) => {
  sequelize.sync().then(() => {
     return modelFarma.Farma.create(data).then( (data) => {
       return data.get();
     });;
   })
}

const findByLogin = (user) => {
  return modelFarma.Farma.findOne({
    where: {login: user.login, password: user.password}
  }).then((data) => {
    return data.get();
  });
}

const findAll = (farmacia) => {
  return modelFarma.Farma.findAll({
    where: farmacia
  });
}

module.exports = {
  create,
  findByLogin,
  findAll
}
