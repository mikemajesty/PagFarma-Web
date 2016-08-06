const express = require('express');
const app = express();
const parser = require('body-parser');

const serviceUser = require('./services/userService');

app.use(parser());

app.post('/user/create', (req, res) => {
  const user = {login:req.body.login, password: req.body.password, name: req.body.name};
      console.log(serviceUser.create(user));
      res.json(201);
});

// app.post('/user', (req, res) => {
//   res.json({nome: "fulano", idade:28});
// });
//

app.post('/login', (req, res) => {
  const userRequest = {login: req.body.login, password: req.body.password};
  serviceUser.findByLogin(userRequest).then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(500);
  })
});


const PORT = process.env.port || 3000;

app.listen(PORT, () => {
  console.log(`Running in port ${PORT}`);
});
