const sequelize = require('../data/database').sequelize;
const Sequelize = require('../data/database').Sequelize;

const User = sequelize.define('user', {
  name: Sequelize.STRING,
  login: Sequelize.STRING,
  password: Sequelize.STRING
});




sequelize.sync().then(() => {
   return User.create({name:"teste",login: "admin", password: "admin"});
 }).then( (data) => {
   console.log('entity was saved');
 });

module.exports = {
  User,
  sequelize
}
