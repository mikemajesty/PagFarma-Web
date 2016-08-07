const gs1 = require('../services/gs1Service');

const getProduct = (req, res) => {
  gs1.getProduct(req.query.code).then((data) => {
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
    res.json(resp);
  });
}

module.exports = {
  getProduct
}
