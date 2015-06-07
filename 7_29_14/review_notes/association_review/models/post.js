function Post(sequelize, DataTypes) {

  /* sequelize.define(modelName, attribues, options);
    creates a model like 'post'
    with attribues like 'body' and 'title'
  */

  return sequelize.define('post', {
    title: DataTypes.STRING,
    body: DataTypes.TEXT,
    // set foreign key here if we want to set it manually or interact with it
    authorId: {
      type: DataTypes.INTEGER,
      foreignKey: true
    }
  })
}

module.exports = Post;