const sequelize = require('../config/connection');
const { Users, Band } = require('../models');

const bandData = require('./bandData.json');
const userData = require('./userData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await Users.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const band of bandData) {
    await Band.create({
      ...Band,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
