const sequelize = require('../config/connection');
const { Bands, Fans, Shows, Venue } = require('../models');

const fanData = require('./fanData.json');
const bandData = require('./bandData.json');
const venueData = require('./venueData.json');

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
