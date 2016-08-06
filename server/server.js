const express = require('express');
const app = express();
const parser = require('body-parser');

const userRouter = require('./router/userRouter');
const farmaRouter = require('./router/farmaRouter');

app.use(parser());

// LOGIN/USER
app.post('/user/login', userRouter.login);
app.post('/user/create', userRouter.create);
// FARMA
app.post('/farma/create', farmaRouter.create);
app.post('/farma/login', farmaRouter.login)

const PORT = process.env.port || 3000;

app.listen(PORT, () => {
  console.log(`Running in port ${PORT}`);
});
