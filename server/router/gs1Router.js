const gs1 = require('../services/gs1Service');


const getProduct = (req, res) => {
  gs1.getProduct(req.body).then((data) => {
    res.json(data);
  });
}

module.exports = {
  getProduct
}
