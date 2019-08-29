const mongoose = require('mongoose');
const Schema = mongoose.Schema

const User = new Schema(
    {

        name: {type: String, required: true},
        password: {type: String, required: true},
        email: {type: String, required: true, unique: true},
        //calle: {type: String, required: false},
        //numero_int: {type: String, required: false},
        //numero_ext: {type: String, required: false},
        //delegacion: {type: String, required: false},
        //colonia: {type: String, required: false},
        user_type: {
            type: String,
            enum: [
                'Gratuita', 'Administrador','Premium'
            ],required: true
        }
    },
    {timestamps: true},
)

module.exports = mongoose.model('users', User )