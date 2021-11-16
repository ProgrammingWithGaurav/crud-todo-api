const connectTOMongo = require('./db');
const express = require('express');
const cors = require('cors');

connectTOMongo()

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

// Available Routes
app.use('/todo', require('./routes/todo'))

app.listen(port)