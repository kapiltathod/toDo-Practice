module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING
  }, {});


  User.associate = function(models) {
    User.hasMany(models.Todo, {
      foreignKey: 'userId',
    });

    User.hasMany(models.Comment, {
      foreignKey: 'userId',
    });
  };

  return User;
};