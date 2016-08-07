const express = require('express');
const app = express();
const parser = require('body-parser');

const userRouter = require('./router/userRouter');
const farmaRouter = require('./router/farmaRouter');
const solicitationRouter = require('./router/solicitationRouter');
const gs1 = require('./router/gs1Router');
const product = require('./router/productRouter');
const budget = require('./router/budgetRouter')
app.use(parser());

// LOGIN/USER
app.post('/user/login', userRouter.login);
app.post('/user/create', userRouter.create);
// LOGIN/FARMA
app.post('/farma/create', farmaRouter.create);
app.post('/farma/login', farmaRouter.login);

// SOLICITATION
app.post('/solicitation/create', solicitationRouter.create);

// GS1 API
app.get('/getProduct', gs1.getProduct);

// PRODUCT
app.post('/product/create', product.create);

app.post('/budget/create', budget.create)

const PORT = process.env.port || 3000;

app.listen(PORT, () => {
  console.log(`Running in port ${PORT}`);
});
