const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('User', {
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minLength: 7,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('Pedazo de mierda de password nene')
            }

        }
    },
    age: {
        type: Number,
        required: true,
        trim: true,
        validate(value){
            if(value<0){
                throw new Error('Hay que ser positivo pero sin dar positivo')
            }

        }
    },
    email: {
        type: String,
        required: true,
        trim: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Correos mazo incorrecto bb')
            }
            
        }
    },
})


module.exports = User