const express = require('express');
const app = express();
const todoRoutes = require('./routes/todoRoutes');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.use('/', todoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
