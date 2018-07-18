const express = require('express');
const app = express();
const mongoose = require('mongoose');







mongoose.connect('mongodb://localhost:27017/booksappdb');
mongoose.connection.once('open', ()=>{
  console.log('mongoose connected');
});

app.use(express.json());
app.use(express.static('public'));

const booksController = require('./controllers/books.js');
app.use('/books', booksController)


app.listen(3000, ()=>{
  console.log('listening...');
});
