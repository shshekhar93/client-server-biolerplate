const TodosModel = require('../models/todos');

function createTodo(req, res) {
  const { todo } = req.body;
  if(!todo) {
    return res.status(400).json({
      code: 'MISSING_TODO_TEXT',
      error: 'Missing required field (todo)'
    });
  }
  TodosModel.create({ todo })
    .then((todo) => {
      res.send(201).json(todo);
    })
    .catch(e => {
      console.error('Failed to save', e.stack);
      res.status(400).json({
        code: 'SERVER_ERROR',
        error: 'Save failed'
      });
    });
}

function getAllTodos(req, res) {
  TodosModel.find()
    .then(todos => res.json(todos))
    .catch(e => {
      console.error('Failed to load data', e.stack);
      return res.status(400).json({
        code: 'SERVER_ERROR',
        error: 'Fetch failed'
      });
    });
}

function getTodo(req, res) {
  TodosModel.findById(req.params.id)
    .then(todo => res.json(todo))
    .catch(e => {
      console.error('Failed to load data', e.stack);
      return res.status(400).json({
        code: 'SERVER_ERROR',
        error: 'Fetch failed'
      });
    });
}

function replaceTodo(req, res) {
  const { id } = req.params;
  const obj = req.body;

  TodosModel.replaceOne({ _id: id }, {
    todo: obj.todo,
    updatedAt: Date.now()
  })
    .then(todo => res.json(todo))
    .catch(e => {
      console.error('Failed to update', e.stack);
      return res.status(400).json({
        code: 'SERVER_ERROR',
        error: 'Update failed'
      });
    });
}

function deleteTodo(req, res) {
  TodosModel.findByIdAndDelete(id)
    .then(() => res.end())
    .catch(e => {
      console.error('Failed to delete', e.stack);
      return res.status(400).json({
        code: 'SERVER_ERROR',
        error: 'Delete failed'
      });
    });
}

module.exports = {
  createTodo,
  getTodo,
  getAllTodos,
  replaceTodo,
  deleteTodo
};
