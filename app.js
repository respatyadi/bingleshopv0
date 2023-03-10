const express = require('express');
const app = express();
const cors = require("cors");
const ControllerUser = require('./controllers/controllerUsers')
const ControllerProduct = require("./controllers/controllerProducts")
const ControllerOrder = require('./controllers/controllerOrders')
const ControllerItem = require('./controllers/controllerItems');
const ControllerRole = require('./controllers/controllerRoles');
const authentification = require('./middlewares/authen')
const port = 3000
// const authentification = require('./middlewares/authen')

// var corsOptions = {
//     origin: "http://localhost:8081"
//   };

// app.use(cors());

app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/roles', ControllerRole.getRoles)

app.post('/roles/add', ControllerRole.addRoles)

app.get('/user', ControllerUser.getUsers)

app.post('/register', ControllerUser.registerUsers)

app.post('/login', ControllerUser.login)

app.get('/products', ControllerProduct.getProducts)

app.post('/products/register', ControllerProduct.registerProducts)

app.get('/orders', ControllerOrder.getOrders)

app.post('/orders/add', ControllerOrder.addOrders)

app.get('/items', ControllerItem.getItems)

app.post('/items/add', ControllerItem.addItems)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
