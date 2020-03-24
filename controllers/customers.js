const Customers = require('../models').customers;


module.exports = {
    list(req, res) {
      return Customers
        .findAll({
          include: ['order'],
          order: [
            ['createdAt', 'DESC'],
          ],
        })
        .then((users) => res.status(200).send(users))
        .catch((error) => { res.status(400).send(error); });
    },
  
    getById(req, res) {
      return Customers
        .findByPk(req.params.id, {include: ['order']})
        .then((customers) => {
          if (!customers) {
            return res.status(404).send({
              message: 'order Not Found',
            });
          }
          return res.status(200).send(order);
        })
        .catch((error) => res.status(400).send(error));
    },
  
    add(req, res) {
  
      return Customers
        .create({
          full_name: req.body.full_name,
          username: req.body.username,
          email: req.body.email,
          phone_number: req.body.phone_number
        })
        .then((user) => res.status(201).send(user))
        .catch((error) => res.status(400).send(error));
    },
  
    update(req, res) {
  
      return Customers
        .findByPk(req.params.id)      
        .then(customers => {
          if (!customers) {
            return res.status(404).send({
              message: 'Order Not Found',
            });
          }
          return customers
            .update({
                full_name: req.body.full_name || customers.full_name,
                username: req.body.username || customers.username,
                email: req.body.email || customers.email,
                phone_number: req.body.phone_number || customers.phone_number
            })
            .then(() => res.status(200).send(user))
            .catch((error) => res.status(400).send(error));
        })
        .catch((error) => res.status(400).send(error));
    },
  
    delete(req, res) {
      return Customers
        .findByPk(req.params.id)
        .then(customers => {
          if (!customers) {
            return res.status(400).send({
              message: 'Order Not Found',
            });
          }
          return Customers
            .destroy()
            .then(() => res.status(204).send())
            .catch((error) => res.status(400).send(error));
        })
        .catch((error) => res.status(400).send(error));
    },
  };