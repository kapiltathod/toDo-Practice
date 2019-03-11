module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    title: DataTypes.STRING
  }, {});


  Todo.associate = function(models) {
    Todo.hasMany(models.TodoItem, {
      foreignKey: 'todoId',
    });
  };

  Todo.associate = function(models) {
    Todo.belongsTo(models.TodoItem, {
      foreignKey: 'todoId',
    });
  };
  return Todo;
};