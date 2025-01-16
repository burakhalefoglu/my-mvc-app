const todoModel = require('../models/todoModel');

module.exports = {
    getDashboard: (req, res) => {
        var messages = 'Hello World!';
        // veri tababıba bağlan.
        todoModel.getAllTodos((err, todos) => {
            res.render('dashboard', { todos });
        });

    },
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
                alert('Database error');
            } else {
                res.redirect('/');
                alert('Database error');
            }
        });
    },
};
