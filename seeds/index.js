const seedUsers = require('./user-seeds');
const seedRecipients = require('./recipient-seeds');
const seedGifts = require('./gift-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('---------------');
    await seedUsers();
    console.log('---------------')
    await seedRecipients();
    console.log('---------------')
    await seedGifts();
    console.log('---------------')

    process.exit(0);
};

seedAll();