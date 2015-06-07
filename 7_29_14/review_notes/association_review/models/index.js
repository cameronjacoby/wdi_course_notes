var fs        = require('fs')
  , path      = require('path')
  , Sequelize = require('sequelize')
  , lodash    = require('lodash')
  , env       = process.env.NODE_ENV || 'development'
  , config    = require(__dirname + '/../config/config.json')[env]
  , sequelize = new Sequelize(config.database, config.username, config.password, config)
  , db        = {}

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== 'index.js')
  })
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  })

Object.keys(db).forEach(function(modelName) {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db)
  }
})

// put this line in author.js instead:
// db.author.hasMany(db.post);
db.post.belongsTo(db.author);

// test association using a query

// db.author.create({firstname: 'cameron', lastname: 'jacoby'});

// db.author.find(2).success(function(foundAuthor) {
//   var newPost = db.post.build({title: 'hello world again!'});
//   foundAuthor.addPost(newPost).success(function() {
//     newPost.save();
//   });
// });

module.exports = lodash.extend({
  sequelize: sequelize,
  Sequelize: Sequelize
}, db)




