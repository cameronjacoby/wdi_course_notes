var Book = {}

Book.all = function(callback) {
  var books = [];
  console.log('Inside of Book.all');

  // simulate a long db request
  setTimeout(function() {
    console.log('Inside of a long db request');
    books.push({title: 'Gatsby'});
    callback(books);
  }, 5000);

};


var printBooks = function(books) {
  console.log('Inside of printBooks');
  console.log(books);
};

console.log('Starting our program')
Book.all(printBooks);