const gs1 = require('../services/gs1Service');
const productService = require('../services/productService');

const getProduct = (req, res) => {
  const code = req.query.code;
  gs1.getProduct(code).then((data) => {
    if (data) {
      const dto = data.ResponseDTO.ResponseItems[0];
      const resp = {
                    "descricao": dto.Descricao,
                    "razao_social": dto.RazaoSocial,
                    "marca": dto.MarcaProduto,
                    "code": dto.Gtin,
                    "largura": dto.Largura,
                    "peso_liquido" : dto.PesoLiquido,
                    "altura": dto.Altura,
                    "peso_bruto": dto.PesoBruto
                  }
      productService.create(resp);
      res.json(resp);
    }
  }).catch((err) => {
    productService.findOne({code: code}).then((data) => {
      res.json(data.get());
    });
  });
}

module.exports = {
  getProduct
}
