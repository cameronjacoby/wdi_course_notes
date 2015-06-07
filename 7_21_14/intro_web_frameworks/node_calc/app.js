var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('hello world');
});

app.get('/greet/:name', function(req, res) {
  res.send('hello ' + req.params.name);
});

// app.get('/add/:num1/:num2', function(req, res) {
//   res.send('The result is ' + (parseInt(req.params.num1) + parseInt(req.params.num2)));
// });

// app.get('/subtract/:num1/:num2', function(req, res) {
//   res.send('The result is ' + (parseInt(req.params.num1) - parseInt(req.params.num2)));
// });

// app.get('/multiply/:num1/:num2', function(req, res) {
//   res.send('The result is ' + (parseInt(req.params.num1) * parseInt(req.params.num2)));
// });

// app.get('/divide/:num1/:num2', function(req, res) {
//   res.send('The result is ' + (parseInt(req.params.num1) / parseInt(req.params.num2)));
// });

app.get('/:num1/:operation/:num2', function(req, res) {
  var int1 = parseInt(req.params.num1);
  var int2 = parseInt(req.params.num2);

  switch(req.params.operation) {
    case 'plus':
      res.send(int1 + ' plus ' + int2 + ' equals ' + (int1 + int2));
      break;
    case 'minus':
      res.send(int1 + ' minus ' + int2 + ' equals ' + (int1 - int2));
      break;
    case 'times':
      res.send(int1 + ' times ' + int2 + ' equals ' + (int1 * int2));
      break;
    case 'divided_by':
      res.send(int1 + ' divided by ' + int2 + ' equals ' + (int1 / int2));
      break;
    default:
      break;
  }
});

// add solution using wildcard and reduce

// app.get("/add/*", function(req, res) {
//   var myParams = req.params[0].split("/")
//   var result = myParams.reduce( function(total, num){ return total + parseInt(num) }, 0)
//   res.send("The answer is  " + result);
// });

app.listen(3000);




