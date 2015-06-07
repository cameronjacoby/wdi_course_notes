var express = require('express'),
  ejs = require('ejs'),
  bodyParser = require('body-parser'),
  passport = require('passport'),
  passportLocal = require('passport-local'),
  cookieParser = require('cookie-parser'),
  cookieSession = require('cookie-session'),
  flash = require('connect-flash'),
  app = express(),
  db = require('./models/index');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.use(cookieSession({
  secret: 'thisismysecretkey', // usually want to generate a random hash for a secret key
  name: 'cookie created by cameron',
  // max age is in milliseconds
  maxage: 360000
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// prepare our serialize (grab user id)
passport.serializeUser(function(user, done) {
  console.log('SERIALIZE JUST RAN');
  done(null, user.id);
});

// deserialize (constantly check if id is in the db)
passport.deserializeUser(function(id, done) {
  console.log('DESERIALIZE JUST RAN');
  db.user.find({
    where: {
      id: id
    }
  }).done(function(error, user) {
    done(error, user); // only time we can pass in error & user is when we've already logged in the user
  });
});

app.get('/', function(req, res) {
  // check if the user is logged in
  if (!req.user) {
    res.render('index');
  }
  else {
    res.redirect('/home');
  }
});

app.get('/signup', function(req, res) {
  if (!req.user) {
    res.render('signup', {username: ''});
  }
  else {
    res.redirect('/home');
  }
});

app.get('/login', function(req, res) {
  if (!req.user) {
    res.render('login', {username: '', message: req.flash('loginMessage')});
  }
  else {
    res.redirect('/home');
  }
});

app.get('/home', function(req, res) {
  res.render('home', {
    isAuthenticated: req.isAuthenticated(),
    user: req.user
  });
});

app.post('/create', function(req, res) {
  newUsername = req.body.username;
  newPassword = req.body.password;
  db.user.createNewUser(newUsername, newPassword,
    function(err) {
      res.render('signup', {message: err.message, username: newUsername});
    },
    function(success) {
      res.render('index', {message: success.message});
    }
  );
});

app.post('/login', passport.authenticate('local', {
  successRedirect: '/home',
  failureRedirect: '/login',
  failureFlash: true
}));

app.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});


app.get('*', function(req, res) {
  res.status(404);
  res.render('404');
});


app.listen(3000, function(){
  console.log('server started on localhost:3000');
});




