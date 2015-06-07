var express = require('express'),
  bodyParser = require('body-parser'),
  friends = require('./routes/friends'),
  site = require('./routes/site'),
  app = express();

app.use(bodyParser());
app.use(friends);
app.use(site);

app.listen(3000);


module.exports = app;