// var express = require('express'),
//   app = express();

// app.get('/', function (req, res) {
//   res.send('Hello World');
// });

// app.listen(3000);

// // the following test
// var request = require('supertest');
// request(app)
//   .get('/')
//   .expect(200)
//   .end(function(err, res) {
//     if (err) throw err;
//   });


// var express = require('express'),
//   app = express();

// app.get('/add/:numOne/:numTwo', function (req, res) {
//   var numOne = parseInt(req.params.numOne);
//   var numTwo = parseInt(req.params.numTwo);

//   var answer = (numOne + numTwo).toString();

//   res.send(answer);
// });

// app.listen(3000);

// // the following test
// var request = require('supertest');
// request(app)
//   .get('/add/2/2')
//   .expect(200)
//   .expect('4')
//   .end(function(err, res) {
//     if (err) throw err;
//   });


// var express = require('express'),
//   bodyParser = require('body-parser'),
//   app = express();

// app.use(bodyParser.urlencoded({extended: true}));
// var friends = [];

// app.get('/friends', function (req, res) {
//   res.send(friends.join('<br>'));
// });

// app.post('/friends', function (req, res) {
//   friends.push(req.body.friend);
//   res.redirect('/friends');
// });

// app.listen(3000);

// // the following test
// var request = require('supertest');
// request(app)
//   .post('/friends')
//   .send({friend: {name: 'john'}})
//   .expect(302)
//   .end(function(err, res){
//     if (err) throw err;
//   });




