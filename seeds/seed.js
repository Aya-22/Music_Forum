const sequelize = require('../config/connection');
const { User, Music } = require('../models');

const userData = require('./userData.json');
const projectData = require('./musicData.json');

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
