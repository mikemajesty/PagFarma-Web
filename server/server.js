const express = require('express');
const app = express();
const parser = require('body-parser');

app.use(parser());

app.get('/user', (req, res) => {
  res.json({nome: "fulano", idade:28});
});

app.post('/user', (req, res) => {  
  res.json({nome: "fulano", idade:28});
});



const PORT = process.env.port || 3000;

app.listen(PORT, () => {
  console.log(`Running in port ${PORT}`);
});
