const app = angular.module('BookApp', []);

app.controller('MainController', ['$http', function($http) {
   this.foo = 'bar'
   const controller = this;
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
       console.log(response.data);
     }, error => {
       console.log(error);
     })
   }//end createBook function
   this.getBooks = () => {
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
this.getBooks()
}]); //app controller ends here.
