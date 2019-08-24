const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        password: {type: String, required: false},
        email: {type: String, required: true, unique: true},
        calle: {type: String, required: false},
        numero_int: {type: String, required: false},
        numero_ext: {type: String, required: false},
        delegacion: {type: String, required: false},
        colonia: {type: String, required: false},
        is_premium: {type:Boolean, default: false},
    },
    {timestamps: true},
)

module.exports = mongoose.model('users', UserSchema )