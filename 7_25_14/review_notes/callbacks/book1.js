var Book = {}

Book.all = function() {
  var books = [];

  // simulate a long db request
  setTimeout(function() {
    books.push({title: 'Gatsby'});
  }, 50);

  return books;

};

// this code is incorrect b/c we are returning books
// before the book has been pushed into the array
// (b/c of the timeout fcn)
b = Book.all();
console.log(b);