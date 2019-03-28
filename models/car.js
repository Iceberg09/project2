module.exports = function(sequelize, DataTypes) {
  var car = sequelize.define("car", {
    make: DataTypes.STRING,
    model: DataTypes.STRING
  });
  return car;
};
