const express = require('express');
const app = express();
const mongoose = require('mongoose');


const booksController = require('./controllers/books.js');
app.use('/books', booksController)


mongoose.connect('mongodb://localhost:27017/booksappdb');
mongoose.connection.once('open', ()=>{
  console.log('mongoose connected');
});

app.use(express.json());
app.use(express.static('public'));




app.listen(3000, ()=>{
  console.log('listening...');
});
