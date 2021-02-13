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
      Owner.hasMany(models.Horse, {
        onDelete: "cascade"
      });
    };
  
    return Owner;
  };