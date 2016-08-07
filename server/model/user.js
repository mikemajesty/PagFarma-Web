const sequelize = require('../data/database').sequelize;
const Sequelize = require('../data/database').Sequelize;

const modelSolicitation = require('../model/solicitation');
const Solicitation = modelSolicitation.Solicitation;

const User = sequelize.define('user', {
  name: Sequelize.STRING,
  login: Sequelize.STRING,
  password: Sequelize.STRING
});

User.hasMany(Solicitation, {as: 'solicitations'});
sequelize.sync();

module.exports = {
  User
}
