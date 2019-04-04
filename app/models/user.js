module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define("user", {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    email: { type: DataTypes.STRING, validate: {isEmail:true} },
    password: DataTypes.STRING,
    user_access: DataTypes.STRING
  });
  return user;
};
