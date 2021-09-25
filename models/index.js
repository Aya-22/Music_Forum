const bands = require('./bands');
const venue = require('./venue');
const fans = require('./fans');
const show = require('./show');

fans.belongsToMany(concerts, {
  // Define the third table needed to store the foreign keys
  through: {
    model: show,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'planned_trips'
});

concerts.belongsToMany(fans, {
  // Define the third table needed to store the foreign keys
  through: {
    model: show,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'location_travellers'
});

fans.belongsToMany(bands, {
    // Define the third table needed to store the foreign keys
    through: {
      model: show,
      unique: false
    },
    // Define an alias for when data is retrieved
    as: 'location_travellers'
  });

bands.belongsToMany(fans, {
    // Define the third table needed to store the foreign keys
    through: {
      model: show,
      unique: false
    },
    // Define an alias for when data is retrieved
    as: 'location_travellers'
  });
module.exports = { Traveller, Location, Trip };