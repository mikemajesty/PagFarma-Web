const express = require('express');
const app = express();
const parser = require('body-parser');
const sequelize = require('./data/database').sequelize;

const budget = require('./router/budgetRouter');
const farmaRouter = require('./router/farmaRouter');
const gs1 = require('./router/gs1Router');
const product = require('./router/productRouter');
const solicitationRouter = require('./router/solicitationRouter');
const userRouter = require('./router/userRouter');

sequelize.sync();

app.use(parser());

// LOGIN/USER
app.post('/user/login', userRouter.login);
app.post('/user/create', userRouter.create);
// LOGIN/FARMA
app.post('/farma/create', farmaRouter.create);
app.post('/farma/login', farmaRouter.login);

// SOLICITATION
app.post('/order/create', solicitationRouter.create);
app.get('/order/', solicitationRouter.findAll);

app.get('/order/budget', solicitationRouter.findAllBudget);

// GS1 API
app.get('/getProduct', gs1.getProduct);

// PRODUCT
app.post('/product/create', product.create);

app.post('/budget/create', budget.create);

const PORT = process.env.port || 3000;

app.listen(PORT, () => {
  console.log(`Running in port ${PORT}`);
});
