const express = require('express');
const todoController = require('./controllers/todo.controller');
const { port } = require('./config')
const { mongo } = require('./config');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('./public'));

mongo()
    .catch(err => console.log(err));

todoController(app);

app.listen(`${port}`, () => console.log(`Listening to port ${port}`));