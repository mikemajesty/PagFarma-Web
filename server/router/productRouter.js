const productService = require('../services/productService');

const create = (req, res) => {
  const product = {
      descricao:req.body.descricao,
      razao_social: req.body.razao_social,
      marca: req.body.marca,
      code:  req.body.code,
      largura: req.body.largura,
      peso_liquido: req.body.peso_liquido,
      altura: req.body.altura,
      peso_bruto: req.body.peso_bruto
  };
  productService.create(product);
  res.json(201);
}


module.exports = {
  create
}
