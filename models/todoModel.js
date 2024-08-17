const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS todos (id INTEGER PRIMARY KEY, title TEXT, completed INTEGER)");
});

module.exports = {
    getAllTodos: (callback) => {
        db.all("SELECT * FROM todos", (err, rows) => {
            callback(err, rows);
        });
    },
    addTodo: (title, callback) => {
        const stmt = db.prepare("INSERT INTO todos (title, completed) VALUES (?, ?)");
        stmt.run(title, 0, function(err) {
            callback(err, this.lastID);
        });
        stmt.finalize();
    },
    completeTodo: (id, callback) => {
        const stmt = db.prepare("UPDATE todos SET completed = 1 WHERE id = ?");
        stmt.run(id, function(err) {
            callback(err);
        });
        stmt.finalize();
    }
};
