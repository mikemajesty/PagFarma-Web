const express = require('express');
const app = express();
const parser = require('body-parser');

const serviceUser = require('./services/userService');

app.use(parser());

app.get('/user', (req, res) => {
  const user = {login: "wwww", password: "wwww", name: "wwww"};
  serviceUser.create(user);
});

// app.post('/user', (req, res) => {
//   res.json({nome: "fulano", idade:28});
// });
//


const PORT = process.env.port || 3000;

app.listen(PORT, () => {
  console.log(`Running in port ${PORT}`);
});
