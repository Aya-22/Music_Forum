const User = require('./User');
const Bands = require('./Bands');

User.hasMany(Bands, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Bands.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Bands };