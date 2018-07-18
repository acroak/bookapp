const app = angular.module('BookApp', []);

app.controller('MainController', ['$http', function($http) {
   this.foo = 'bar'

   this.createBook = function(){
     console.log('making a book');
   }//end createBook function
}]); //app controller ends here.
