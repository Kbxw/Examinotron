const mongoose = require('mongoose')

const Test = mongoose.model('Test', {
    nombre: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
})


module.exports = Test