module.exports = (sequelize, DataTypes) => {
  const TodoItem = sequelize.define('TodoItem', {
    itemName: DataTypes.STRING
  }, {});

  TodoItem.associate = function(models) {
    TodoItem.belongsTo(models.Todo, {
      foreignKey: 'todoId',
      onDelete: 'CASCADE',
    });
  };

  TodoItem.associate = function(models) {
    TodoItem.hasMany(models.Comment, {
      foreignKey: 'todoitemId',
    });
  };
  return TodoItem;
};