const gs1 = require('../services/gs1Service');
const productService = require('../services/productService');

const getProduct = (req, res) => {
  const code = req.query.code;
  productService.findOne({code: code}).then((data) => {
    res.sendStatus(data.get());
  });
  // gs1.getProduct(code).then((data) => {
  //   if (data) {
  //
  //     const dto = data.ResponseDTO.ResponseItems[0];
  //     const resp = {
  //                   "descricao": dto.Descricao,
  //                   "razao_social": dto.RazaoSocial,
  //                   "marca": dto.MarcaProduto,
  //                   "code": dto.Gtin,
  //                   "largura": dto.Largura,
  //                   "peso_liquido" : dto.PesoLiquido,
  //                   "altura": dto.Altura,
  //                   "peso_bruto": dto.PesoBruto
  //                 }
  //
  //
  //     productService.create(resp);
  //     res.sendStatus(resp);
  //   }
  //   res.sendStatus(200);
  // }).catch((err) => {
  //   console.log('wtf', err);
  //   productService.findOne({code: code}).then((data) => {
  //     res.sendStatus(data.get());
  //   });
  // });
}

module.exports = {
  getProduct
}
