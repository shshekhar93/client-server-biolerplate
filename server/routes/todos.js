const { Router } = require('express');
const { getAllTodos, getTodo, createTodo, replaceTodo, deleteTodo } = require('../controllers/todos');
const router = Router();

router.post('/', createTodo);
router.get('/', getAllTodos);
router.get('/:id', getTodo);
router.put('/:id', replaceTodo);
router.delete('/:id', deleteTodo);

module.exports = router;
