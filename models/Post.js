const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Trip model
class Post extends Model {}

// create fields/columns for Trip model
Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    post: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
        unique: false
      }
    },
    band_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'bands',
        key: 'id',
        unique: false
      }
    },
    concert_id: {
      type: DataTypes.INTEGER,
      references: {
<<<<<<< HEAD
        model: 'bands',
=======
        model: 'concert',
>>>>>>> main
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
    modelName: 'post'
  }
);

module.exports = Post;
