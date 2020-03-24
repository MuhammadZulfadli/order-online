const Order = require('../models').order;


module.exports = {
    list(req, res) {
      return Order
        .findAll({
          order: [
            ['createdAt', 'DESC'],
          ],
        })
        .then((order) => res.status(200).send(order))
        .catch((error) => { res.status(400).send(error); });
    },
  
    getById(req, res) {
      return Order
        .findByPk(req.params.id)
        .then((order) => {
          if (!Order) {
            return res.status(404).send({
              message: 'Order Not Found',
            });
          }
          return res.status(200).send(order);
        })
        .catch((error) => res.status(400).send(error));
    },
  
    add(req, res) {
      return Order
        .create({
          user_id: req.body.user_id,
          status: req.body.status,
          driver_id: req.body.driver_id
        })
        .then((order) => res.status(201).send(order))
        .catch((error) => res.status(400).send(error));
    },
  
    update(req, res) {
      return Order
        .findByPk(req.params.id)      
        .then(Order => {
          if (!Order) {
            return res.status(404).send({
              message: 'Order Not Found',
            });
          }
          return Order
            .update({
              user_id: req.body.user_id || Order.user_id,
              status: req.body.status || Order.status,
              driver_id: req.body.driver_id || order.driver_id
            })
            .then((order) => res.status(200).send(order))
            .catch((error) => res.status(400).send(error));
        })
        .catch((error) => res.status(400).send(error));
    },
  
    delete(req, res) {
      return Order
        .findByPk(req.params.id)
        .then(Order => {
          if (!Order) {
            return res.status(400).send({
              message: 'Order Not Found',
            });
          }
          return Order
            .destroy()
            .then(() => res.status(204).send())
            .catch((error) => res.status(400).send(error));
        })
        .catch((error) => res.status(400).send(error));
    },
  };