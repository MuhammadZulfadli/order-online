'use strict';
module.exports = (sequelize, DataTypes) => {
  const customers = sequelize.define('customers', {
    fullname: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    phone_number: DataTypes.STRING
  }, {});
  customers.associate = function(models) {
    customers.belongsTo(models.order,{
      foreignKey: 'user_id',
    })
  };
  return customers;
};