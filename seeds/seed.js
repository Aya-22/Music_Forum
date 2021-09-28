const sequelize = require('../config/connection');
const { Bands, Users, Shows, Venue } = require('../models');

<<<<<<< HEAD
<<<<<<< HEAD
// uses the user login information
const userData = require('./userData.json');
// users comment section 
const musicData = require('./musicData.json');
=======
const fanData = require('./fanData.json');
=======
const userData = require('./userData.json');
>>>>>>> main
const bandData = require('./bandData.json');
const venueData = require('./venueData.json');
>>>>>>> main

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const band = await Bands.bulkCreate(bandData);

  const venue = await Venue.bulkCreate(venueData);

  const user = await Users.bulkCreate(userData, {
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
