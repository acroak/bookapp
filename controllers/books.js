const express = require('express');
const router = express.Router();
const Book = require('../models/books.js')
//show all books... INDEX
router.get('/', (req, res)=> {
  //res.send('index')
  Book.find({}, (err, foundBook)=>{
    console.log('found a book!');
    res.json(foundBook)
  })
});

//add a book!
router.post('/',(req,res)=>{
  Book.create(req.body,(err, createdBook)=>{
    res.json(createdBook);
    console.log('we created a book!');
  })
});
//curl -X POST -H "Content-Type: application/json" -d '{"title":"", "author":"", "genre":""}' http://localhost:3000/books
//curl -X POST -H "Content-Type: application/json" -d '{"title":"Harry Potter and the Sorcerers Stone", "author":"J.K.Rowling", "genre":"Young Adult"}' http://localhost:3000/books

module.exports = router;
