const mongoose = require('mongoose')
const mongoURI = 'mongodb://localhost/'

const connectTOMongo = async () => {
    mongoose.connect(mongoURI, () => {
        console.log('Connected to Mongo Successfully')
    })
}

module.exports = connectTOMongo