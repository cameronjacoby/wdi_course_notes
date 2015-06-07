module.exports = {
  up: function(migration, DataTypes, done) {
    // add altering commands here, calling 'done' when finished
    migration.createTable('posts', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      // createdAt & updatedAt are required
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
      // STRING is a VARCHAR(255) by default
      title: DataTypes.STRING,
      // for large posts we need more space
      body: DataTypes.TEXT
    })
    .complete(done);
    
  },
  down: function(migration, DataTypes, done) {
    // add reverting commands here, calling 'done' when finished
    migration.dropTable('posts')
    .complete(done);
  }
}