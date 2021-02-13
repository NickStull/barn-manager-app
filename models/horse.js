module.exports = function(sequelize, DataTypes) {
    var Horse = sequelize.define("Horse", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
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
  
    Horse.associate = function(models) {
      // We're saying that a Post should belong to an Author
      // A Post can't be created without an Author due to the foreign key constraint
      Horse.belongsTo(models.Owner, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Horse;
  };