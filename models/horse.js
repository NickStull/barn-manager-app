module.exports = function(sequelize, DataTypes) {
    var Horse = sequelize.define("Horse", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      breed: {
        type: DataTypes.STRING,
        allowNull: false
      },
      amFlakes: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      pmFlakes: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      grainServing: {
        type: DataTypes.DECIMAL(2,1),
        allowNull: true
      },
      lastDewormer: {
        type: DataTypes.DATEONLY,
        allowNull: true
      },
      lastVaccination: {
        type: DataTypes.DATEONLY,
        allowNull: true
      },
      lastCoggins: {
        type: DataTypes.DATEONLY,
        allowNull: true
      },
      lastFarrier: {
        type: DataTypes.DATEONLY,
        allowNull: true
      },
      Notes: {
        type: DataTypes.TEXT,
        allowNull: true
      }
    });
  
    Horse.associate = function(models) {
      Horse.belongsTo(models.Owner, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Horse;
  };