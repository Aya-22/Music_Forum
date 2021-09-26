const sequelize = require('../config/connection');
const { User, Music } = require('../models');

// uses the user login information
const userData = require('./userData.json');
// users comment section 
const musicData = require('./musicData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const music of musicData) {
    await Music.create({
      ...music,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
