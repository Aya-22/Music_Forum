const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Trip model
class Concerts extends Model {}

// create fields/columns for Trip model
Concerts.init(
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
    venue_id: {
      type: DataTypes.STRING,
      references: {
        model: 'venue',
        key: 'id',
        unique: false
      }
    },
    fans_id: {
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
    modelName: 'concerts'
  }
);

module.exports = Concerts;
