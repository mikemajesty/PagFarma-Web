const sequelize = require('../data/database').sequelize;
const modelUser = require('../model/user');

const create = (data) => {
  sequelize.sync();
   return modelUser.User.create(data);
}

const findByLogin = (user) => {
  return modelUser.User.findOne({
    where: {login: user.login, password: user.password}
  }).then((data) => {
    return data.get();
  });
}

module.exports = {
  create,
  findByLogin
}
