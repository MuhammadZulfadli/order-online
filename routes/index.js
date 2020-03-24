var express = require('express');
var router = express.Router();


express.application.prefix = express.Router.prefix = function (path, configure) {
  var router = express.Router();
  this.use(path, router);
  configure(router);
  return router;
};

const customersController = require('../controllers').customers;
const orderController = require('../controllers').order;


/* GET home page. */
router.get('/', function(req, res, next) {
  res.json();
});


  router.get('/api/v1/customers', customersController.list);
  router.get('/api/v1/customers/:id', customersController.getById);
  router.post('/api/v1/customers',  customersController.add);
  router.put('/api/v1/customers/:id', customersController.update);
  router.delete('/api/v1customers/:id', customersController.delete);

  router.get('/api/v1/order', orderController.list);
  router.get('/api/v1/order/:id', orderController.getById);
  router.post('/api/v1order',  orderController.add);
  router.put('/api/v1order/:id', orderController.update);
  router.delete('/api/v1/order/:id', orderController.delete);


module.exports = router;
