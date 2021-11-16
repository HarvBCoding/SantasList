const { User } = require('../models');

const userdata = [
    {
        id: 1,
        username: 'malicious1',
        email: 'harveyb@gmail.com',
        password: 'password321'
    },
    {
        id: 2,
        username: 'lorimucho',
        email: 'lorimucho@gmail.com',
        password: 'password321'
    }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;