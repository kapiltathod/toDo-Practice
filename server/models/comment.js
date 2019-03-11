module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    comment: DataTypes.STRING
  }, {});

  Comment.associate = function(models) {
    Comment.belongsTo(models.Todoitem, {
      foreignKey: 'todoitemId',
      onDelete: 'CASCADE',
    });
  };

  Comment.associate = function(models) {
    Comment.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
  };
  return Comment;
};
