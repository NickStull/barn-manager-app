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
        allowNull: true,
        defaultValue: null
      },
      pmFlakes: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null
      },
      grainServing: {
        type: DataTypes.DECIMAL(2,1),
        allowNull: true,
        defaultValue: null
      },
      lastDewormer: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        defaultValue: null
      },
      lastVaccination: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        defaultValue: null
      },
      lastCoggins: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        defaultValue: null
      },
      lastFarrier: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        defaultValue: null
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