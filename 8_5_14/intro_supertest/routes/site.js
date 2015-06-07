var express = require('express'),
  router = express.Router();

router.get('/', function (req, res) {
  res.send('Home page!');
});

router.get('/about', function (req, res) {
  res.send('About us!');
});

router.get('/contact', function (req, res) {
  res.send('Contact us later!');
});


module.exports = router;