const sequelize = require('../data/database').sequelize;
const modelBudget = require('../model/budget');

const create = (data) => {
  sequelize.sync().then(() => {
     return modelBudget.Budget.create(data).then( (data) => {
       return data.get();
     });;
   })
}

module.exports = {
  create
}
