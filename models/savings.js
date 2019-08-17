module.exports = function(sequelize, DataTypes) {
    var Savings = sequelize.define("Savings", {
      id: {
        type: DataTypes.TEXT,
        primaryKey: true,
        validate: {
          len: [1]
        }
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      }
    });
  
    // Savings.associate = function(models) {
    //   // We're saying that a Savings should belong to an Author
    //   // A Savings can't be created without an Author due to the foreign key constraint
    //   Savings.belongsTo(models.savings, {
    //     foreignKey: {
    //       allowNull: false
    //     }
    //   });
    // };
  
    return Savings;
};