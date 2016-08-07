const gs1 = require('../services/gs1Service');

const getProduct = (req, res) => {
  console.log(req.query.code);
  gs1.getProduct(req.query.code).then((data) => {
    res.json(data);
  });
}

module.exports = {
  getProduct
}
