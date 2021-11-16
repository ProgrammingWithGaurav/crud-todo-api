const connectTOMongo = require('./db');
const express = require('express');

connectTOMongo()

const app = express()
const port = 3000

app.use(express.json())

// Available Routes
app.use('/todos', require('./routes/todo'))

app.listen(port)