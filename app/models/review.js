module.exports = function(sequelize, DataTypes) {
  var review = sequelize.define("review", {
    name: DataTypes.STRING,
    make: DataTypes.STRING,
    model: DataTypes.STRING,
    color: DataTypes.STRING,
    license_plate: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    comment: DataTypes.STRING,
    date_time: DataTypes.DATE,
    location: DataTypes.STRING
  });
  return review;
};
