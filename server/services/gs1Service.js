var request = require('request');
var querystring = require('querystring');
var rp = require('request-promise');

const getProduct = (code) => {
  var form = {
    "code": code,
    "codeType": "GTIN"
  };

  var formData = querystring.stringify(form);

  const opntions =  {url: 'http://inbar-producao-WS.azurewebsites.net/search',
    method: 'POST',
    headers: {
      'secret': 'c851cb04-58ca-4e69-b225-b4cee77d4784',
      'Content-Type': 'application/x-www-form-urlencoded',
      'deviceid': 'ad59f3cb-64f4-412f-a4d3-767faff602c6',
      'cache-control': 'no-cache'
    },
    body: formData,
    json: true
  }

  return rp(opntions)
    .then(function (htmlString) {
        return htmlString;
    })
    .catch(function (err) {
        console.log(err);
    });


}

module.exports = {
  getProduct
}
