module.exports = function(sequelize, DataTypes) {
    var Owner = sequelize.define("Owner", {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
  
    Owner.associate = function(models) {
      // Associating Author with Posts
      // When an Author is deleted, also delete any associated Posts
      Owner.hasMany(models.Horse, {
        onDelete: "cascade"
      });
    };
  
    return Owner;
  };