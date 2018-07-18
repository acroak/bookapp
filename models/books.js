const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = Schema({
    title: String,
    author: String,
    genre: String
})

const Books = mongoose.model('Books', userSchema);

module.exports = Books;
