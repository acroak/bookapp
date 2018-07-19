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


    this.deleteBook = (id) =>{
      console.log('Deleting...', id);
      $http({
        method: 'DELETE',
        url: '/books/' + id
      }).then( response => {
        
        this.getBooks();
      // const removeByIndex = this.books.findIndex(book => book._id === id)
      // this.books.splice(removeByIndex, 1)
        //console.log(response.data);
        console.log('removed book!');
      }, error =>{
        console.log(error);
      })
    }
this.getBooks()
}]); //app controller ends here.
