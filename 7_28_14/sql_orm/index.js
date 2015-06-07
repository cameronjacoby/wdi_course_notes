var Sequelize = require('sequelize');

var sequelize = new Sequelize('sequelize_practice', null, null, {
  dialect: 'postgres',
  port: 5432
});

// define our object
var Animal = sequelize.define('animal', {
  name: Sequelize.STRING,
  location: Sequelize.STRING
});

sequelize.sync().complete(function(err) {
  if (err) {
    console.log('something went wrong');
  } else {
    console.log('ok');

    // start the server
    // app.listen();

    // Animal
    //   // .create will continue to create new penguins every time code runs
    //   .findOrCreate({name: 'penguin', location: 'antarctica'})
    //   // javascript does not care about white spaces --> can split up a line
    //   .success(function(taco) {
    //     console.log(taco);
    // });

    // Animal.find(1).success(function(thing) {
    //   console.log(thing.dataValues);  // 'thing' will be null if id doesn't exist
    // });

    // Animal.findAll().success(function(animals) {
    //   console.log(animals);
    // });

    Animal.find(1).success(function(animal) {
      animal.updateAttributes({location: 'australia'}).success(function() {
        console.log('updated animal at id: ', animal.dataValues.id);
      });
    });


  }
});




