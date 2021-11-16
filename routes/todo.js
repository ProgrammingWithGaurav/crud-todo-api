const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo')

// Show all todos
router.get('/', (req, res) => {
    Todo.find().sort({ createdAt: -1 })
    .then(result => {
        res.send(result);
    })
    .catch(err => {
        console.log(err);
    })
})

// Adding a todo to mongodb database
router.post('/add', (req, res) => {
    const todo = new Todo(req.body);
    todo.save()
        .then(() => {
            res.json({ "success": true });
            console.log(todo);
        })
        .catch((err) => {
            console.log(err)
            res.json({ "success": true });
        })
})

// Updating a Todo
router.put('/update/:id', async (req, res) => {
    const { title, tag } = req.body;
    const newTodo = {}
    if (title) { newTodo.title = title };
    if (tag) { newTodo.tag = tag };

    let todo = await Todo.findByIdAndUpdate(req.params.id, { $set: newTodo }, { new: true })
    res.send('updated');
})

// Deleting a Todo
router.delete('/delete/:id', async (req, res) => {
    let del = await Todo.findByIdAndDelete(req.params.id);
    res.send('deleted');
})

module.exports = router