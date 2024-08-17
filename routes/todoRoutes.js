const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

router.get('/', todoController.getTodos);
router.post('/add', todoController.addTodo);
router.post('/complete/:id', todoController.completeTodo);

module.exports = router;
