var bcrypt = require('bcrypt');
var salt = bcrypt.genSaltSync(10);
var passport = require('passport');
var passportLocal = require('passport-local');

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        notNull: false,
        len: [6, 30]
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    }
  },
    {
      classMethods: {
        // encrypt a password
        encryptPass: function(password) {
          var hash = bcrypt.hashSync(password, salt);
          return hash;
        },
        // compare a password
        comparePass: function(userpass, dbpass) {
          return bcrypt.compareSync(userpass, dbpass);
        },
        // create a new user
        createNewUser: function(username, password, err, success) {
          if (password.length < 6) {
            err({message: 'Password should be more than 6 characters.'});
          }
          else {
            User.create({
              username: username,
              password: User.encryptPass(password)
            }).error(function(error) {
              console.log(error);
              if (error.username) {
                err({message: 'Your username should be at least 6 characters.'});
              }
              else {
                err({message: 'An account with that username already exists.'});
              }
            }).success(function(user) {
              success({message: 'Account created, please log in now.'});
            });
          }
        },
      }
    }
  );

  passport.use(new passportLocal.Strategy({
    usernameField: 'username', // corresponds to 'name' in the form
    passwordField: 'password', // corresponds to 'name' in the form
    passReqToCallback: true
  },
  function(req, username, password, done) {
    // find a user in the db
    User.find({
      where: {
        username: username
      }
    })
    // done(err) // when we screw up (db issues)
    // done(null, false) // no db issues, but user screws up (wrong username / pw)
    // done(null, user) // no db issues, and user enters correct info
    // when that's done...
    .complete(function(error, user) {
      if (error) {
        console.log(error);
        return done(err, req.flash('loginMessage', 'Oops! Something went wrong on our end.'));
      }
      if (user === null) {
        return done(null, false, req.flash('loginMessage', 'Username does not exist.'));
      }
      if (User.comparePass(password, user.password) !== true) {
        return done(null, false, req.flash('loginMessage', 'Invalid password.'));
      }
      // lets user in and stores a token on the cookie to remember that user has logged in
      done(null, user);
    });
  }));

        // authorize a user
        // authorizeUser: function(username, password, err, success) {
        //   User.find({
        //     where: {
        //       username: username
        //     }
        //   })
        //   // when that's done...
        //   .done(function(error, user) {
        //     if (error) {
        //       console.log(error);
        //       err({message: 'Oops! Something went wrong on our end!'});
        //     }
        //     else if (user === null) {
        //       err({message: 'Username does not exist'});
        //     }
        //     else if (User.comparePass(password, user.password) === true) {
        //       success();
        //     }
        //     else {
        //       err({message: 'Invalid password'});
        //     }
        //   });
        // }

  return User;
};




