const express = require('express');
const router = express.Router();
const Book = require('../models/books.js')

router.get('/', (req, res)=> {
  Book.find({}, (err, foundBook)=>{
    console.log('found a book!');
  })
});

//add a book!
router.post('/',(req,res)=>{
  Book.create(req.body,(err, createdBook)=>{
    console.log('we created a book!');
  })
});
//curl -X POST -H "Content-Type: application/json" -d '{"title":"", "author":"", "genre":""}' http://localhost:3000/books
//curl -X POST -H "Content-Type: application/json" -d '{"title":"Harry Potter and the Sorcers Stone", "author":"J.K.Rowling", "genre":"Young Adult"}' http://localhost:3000/books

module.exports = router;
