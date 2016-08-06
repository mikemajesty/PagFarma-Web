const sequelize = require('../data/database').sequelize;
const modelUser = require('../model/user');
const create = (data) => {
  sequelize.sync().then(() => {
     return modelUser.User.create(data);
   }).then( (data) => {
     console.log('entity was saved');
   });
}

module.exports = {
  create
}
