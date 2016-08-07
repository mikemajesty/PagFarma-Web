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

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
})
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
