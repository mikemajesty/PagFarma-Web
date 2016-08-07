const express = require('express');
const app = express();
const parser = require('body-parser');

const userRouter = require('./router/userRouter');
const farmaRouter = require('./router/farmaRouter');
const solicitationRouter = require('./router/solicitationRouter');
const gs1 = require('./router/gs1Router');

app.use(parser());

// LOGIN/USER
app.post('/user/login', userRouter.login);
app.post('/user/create', userRouter.create);
// FARMA
app.post('/farma/create', farmaRouter.create);
app.post('/farma/login', farmaRouter.login);

// SOLICITATION
app.post('/solicitation/create', solicitationRouter.create);

// GS1 API
app.get('/getProduct',gs1.getProduct);

const PORT = process.env.port || 3000;

app.listen(PORT, () => {
  console.log(`Running in port ${PORT}`);
});
