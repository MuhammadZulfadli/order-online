'use strict';
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define('order', {
    user_id: DataTypes.STRING,
    status: DataTypes.STRING,
    driver_id: DataTypes.STRING
  }, {});
  order.associate = function(models) {
      order.hasMany(models.customers, {
        foreignKey: 'user_id',
      })
  };
  return order;
};