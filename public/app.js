const app = angular.module('BookApp', []);

app.controller('MainController', ['$http', function($http) {
  // this.foo = 'bar'
  //const controller = this;
   this.books = [];
   this.createForm = {};
   this.book = '';
   this.createBook = () => {
     //console.log('making a book');
     $http({
       method:'POST',
       url:'/books',
       data: {
         title:this.title,
         author:this.author,
         genre:this.genre
       }
     }).then(response => {
       this.getBooks();
       console.log(response.data);
     }, error => {
       console.log(error);
     })
   }//end createBook function

   this.getBooks = () => {
<<<<<<< HEAD
$http({
  method:'GET',
  url:'/books',
}).then(response => {
  this.books = response.data;
}, error => {
  console.log(error);
})
}
this.updateBookTitle = book => {
  $http({
    method:'PUT',
    url:'/books/' + book._id,
    data: {
      title: book.title
    }
  }).then(response => {
    console.log(response.data.title);
  }, error => {
    console.log(error);
  })
}
=======
    $http({
      method:'GET',
      url:'/books',
    }).then(response => {
      this.books = response.data;
    }, error => {
      console.log(error);
    })
    }


    this.deleteBook = (id) =>{
      console.log('Deleting...', id);
      $http({
        method: 'DELETE',
        url: '/books/' + id
      }).then( response => {
        this.getBooks();
        //console.log(response.data);
        console.log('removed book!');
      }, error =>{
        console.log(error);
      })
    }
>>>>>>> bc749909fd52e9ed5e8dbe02c0cf1331e35fe434
this.getBooks()
}]); //app controller ends here.
