const todoModel = require('../models/todoModel');

module.exports = {
    getTodos: (req, res) => {
        todoModel.getAllTodos((err, todos) => {
            if (err) {
                res.status(500).send('Database error');
            } else {
                res.render('index', { todos });
            }
        });
    },
    addTodo: (req, res) => {
        const title = req.body.title;
        todoModel.addTodo(title, (err) => {
            if (err) {
                res.status(500).send('Database error');
            } else {
                res.redirect('/');
            }
        });
    },
    completeTodo: (req, res) => {
        const id = req.params.id;
        todoModel.completeTodo(id, (err) => {
            if (err) {
                res.status(500).send('Database error');
            } else {
                res.redirect('/');
            }
        });
    }
};
