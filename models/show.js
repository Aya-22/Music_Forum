const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Trip model
class Show extends Model {}

// create fields/columns for Trip model
Show.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    show_times: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    band_playing: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 1
    },
    venue: {
      type: DataTypes.STRING,
      references: {
        model: 'venue',
        key: 'id',
        unique: false
      }
    },
    fans: {
      type: DataTypes.INTEGER,
      references: {
        model: 'fans',
        key: 'id',
        unique: false
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Show'
  }
);

module.exports = Show;
