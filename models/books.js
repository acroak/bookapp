const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: String,
    author: String,
    genre: String
})

const Books = mongoose.model('Books', bookSchema);

module.exports = Books;
