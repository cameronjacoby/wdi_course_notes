console.log('Running code!!');

function Book() {}

Book.all = function(callback) {
  console.log('FINDING YOU BOOKS');
  setTimeout(function() {
    var results = [{title: 'The Giver', author: 'L.L.'},
                   {title: 'The Great Gatsby', author: 'Fitzgerald'}];
  callback(results);
  }, 5000);
};


var tacosFunction = function(tacos) {
  console.log('I got some new books!');
  console.log(tacos);
  // instead of logging, we can render the books to a page
};

Book.all(tacosFunction);