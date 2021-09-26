const sequelize = require('../config/connection');
const { bands, fans, venue } = require('../models');

// uses the user login information
const userData = require('./userData.json');
// users comment section 
const musicData = require('./musicData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const trs = await Traveller.bulkCreate(travellerSeedData);

  const locations = await Location.bulkCreate(locationSeedData);

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const project of projectData) {
    await Nsync.create({
      ...project,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
