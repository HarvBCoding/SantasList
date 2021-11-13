const { User } = require('../models');

const userdata = [
    {
        username: 'malicious1',
        email: 'harveyb@gmail.com',
        password: 'password321'
    },
    {
        username: 'lorimucho',
        email: 'lorimucho@gmail.com',
        password: 'password321'
    }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;