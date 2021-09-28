const Bands = require('./Bands');
const Venue = require('./Venue');
const Fans = require('./Fans');
const Shows = require('./Shows');

Fans.belongsToMany(Venue, {
  // Define the third table needed to store the foreign keys
  through: {
    model: Shows,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'planned_trips'
});

Venue.belongsToMany(Fans, {
  // Define the third table needed to store the foreign keys
  through: {
    model: Shows,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'location_travellers'
});

Fans.belongsToMany(Bands, {
    // Define the third table needed to store the foreign keys
    through: {
      model: Shows,
      unique: false
    },
    // Define an alias for when data is retrieved
    as: 'location_travellers'
  });

Bands.belongsToMany(Fans, {
    // Define the third table needed to store the foreign keys
    through: {
      model: Shows,
      unique: false
    },
    // Define an alias for when data is retrieved
    as: 'location_travellers'
  });
module.exports = { Bands, Fans, Shows, Venue };