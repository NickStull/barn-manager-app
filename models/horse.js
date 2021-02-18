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
        defaultValue: 0
      },
      pmFlakes: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      grainServing: {
        type: DataTypes.DECIMAL(2,1),
        allowNull: true,
        defaultValue: 0.0
      },
      lastDewormer: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        defaultValue: "2000-01-01"
      },
      lastVaccination: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        defaultValue: "2000-01-01"
      },
      lastCoggins: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        defaultValue: "2000-01-01"
      },
      lastFarrier: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        defaultValue: "2000-01-01"
      },
      Notes: {
        type: DataTypes.TEXT,
        allowNull: true
      }
    });
  
    Horse.associate = function(models) {
      Horse.belongsTo(models.Owner, {
        onDelete: "cascade",
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Horse;
  };