module.exports = {
  up: function(migration, DataTypes, done) {
    // add altering commands here, calling 'done' when finished
    migration.createTable('authors', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      // createdAt & updatedAt are required
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
      firstname: DataTypes.STRING,
      lastname: DataTypes.STRING
    })
    .complete(done);
    
  },
  down: function(migration, DataTypes, done) {
    // add reverting commands here, calling 'done' when finished
    migration.dropTable('authors')
    .complete(done);
  }
}