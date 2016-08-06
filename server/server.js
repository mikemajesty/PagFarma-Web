const express = require('express');
const app = express();
const parser = require('body-parser');

const userRouter = require('./router/userRouter');

app.use(parser());

app.post('/user/login', userRouter.login);
app.post('/user/create', userRouter.create);

const PORT = process.env.port || 3000;

app.listen(PORT, () => {
  console.log(`Running in port ${PORT}`);
});
