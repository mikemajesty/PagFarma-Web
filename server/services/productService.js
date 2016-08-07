const sequelize = require('../data/database').sequelize;
const modelProduct = require('../model/product');

const create = (data) => {
  sequelize.sync().then(() => {
     return modelProduct.Product.create(data).then( (data) => {
       return data.get();
     });;
   })
}

const findOne = (data) => {
  return modelProduct.Product.findOne({
    where: {code: data.code}
  }).then((data) => {
    return data;
  });
}

module.exports = {
  create,
  findOne
}
