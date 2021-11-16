const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        default: "general"
    }
})

const todo = mongoose.model('todo-list', todoSchema)

module.exports = todo