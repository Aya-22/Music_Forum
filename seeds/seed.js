const sequelize = require('../config/connection');
const { Bands, Fans, Shows, Venue } = require('../models');

<<<<<<< HEAD
// uses the user login information
const userData = require('./userData.json');
// users comment section 
const musicData = require('./musicData.json');
=======
const fanData = require('./fanData.json');
const bandData = require('./bandData.json');
const venueData = require('./venueData.json');
>>>>>>> main

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const band = await Bands.bulkCreate(bandData);

  const venue = await Venue.bulkCreate(venueData);

  const fan = await Fans.bulkCreate(fanData, {
    individualHooks: true,
    returning: true,
  });

  for (const project of projectData) {
    await Shows.create({
      ...project,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
