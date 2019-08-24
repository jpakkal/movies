const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://moises:moises_db@cluster0-soexh.mongodb.net/cinema?retryWrites=true&w=majority', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })
const db = mongoose.connection
module.exports = db
