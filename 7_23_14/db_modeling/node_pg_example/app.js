
// 1. Connect to postgres and get a client object

// 2. Use the client to make a query to our DATABASE

var pg = require('pg');

var db = {};

db.config = {
  database: "library_example_app",
  port: 5432,
  host: "localhost"
};

db.connect = function(callback) {
  pg.connect(db.config, function(err, client, done) {
    if (err) {
         console.error("OOOPS!!! SOMETHING WENT WRONG!", err);
    }
    callback(client);
    done();
  });
};

db.query = function(statement, params, callback) {
  db.connect(function(client) {
    client.query(statement, params, callback);
  });
};


// connect to the DATABASE
// db.query("SELECT * FROM books", function(err, res) {
//   if (err) {
//     console.log("OOOPS!", err);
//   } 
//   console.log(res.rows);
// });

function Book(params) {
  this.title = params.title;
  this.author = params.author;
  this.id = params.id;
}

Book.all = function(somethingToDoAfter) {
  db.query('SELECT * FROM books', function(err, res) {
    if (err) {
      console.log(err);
    }
    var books = [];
    res.rows.forEach(function(bookParams) {
      books.push(new Book(bookParams));
    });
    somethingToDoAfter(books);
  })
};

// Book.all(function(books) {
//   console.log('The books are: ', books);
// });


db.query('INSERT INTO books (title, author) VALUES ($1, $2) RETURNING *', 
  ['The Great Gatsby', 'Fitzgerald'], function(err, res) {
    console.log(res.rows);
  });











