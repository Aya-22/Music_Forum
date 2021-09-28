const Users = require('./Users');
const Concert = require('./Concerts');
const Band = require( './Bands' );
const Post = require('./Post');

Users.hasMany(Concert, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Concert.belongsTo(Users, {
  foreignKey: 'user_id'
});

Users.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(Users, {
  foreignKey: 'user_id'
});

Concert.hasMany(Post, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(Concert, {
  foreignKey: 'post_id'
});

Users.belongsToMany(Band, {
  through: 'band_fans'
})
Band.belongsToMany(Users, {
  through: 'band_fans'
})

module.exports = { Users, Concert, Post, Band };