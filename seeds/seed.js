const sequelize = require('../config/connection');
const { Band, Users, Concert, Post } = require('../models');

const userData = require('./userData.json');
const bandData = require('./bandData.json');
const concertData = require('./concertData.json');
const postData = require('./postData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const band = await Band.bulkCreate(bandData);

  const concert = await Concert.bulkCreate(concertData);

  const user = await Users.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const post of postData) {
    await Post.create({
      ...post,
      user_id: user[Math.floor(Math.random() * user.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
