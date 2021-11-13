const { Recipient } = require('../models');

const recipientdata = [
    {
        name: "Miles",
        relationship: "Child",
        user_id: 1
    },
    {
        name: "Jaxon",
        relationship: "Child",
        user_id: 1
    },
    {
        name: "Rhyis",
        relationship: "Child",
        user_id: 1
    },
    {
        name: "Andi",
        relationship: "Child",
        user_id: 2
    },
    {
        name: "Ryan",
        relationship: "Child",
        user_id: 2
    },
    {
        name: "Kyle",
        relationship: "Child",
        user_id: 2
    },
    {
        name: "Eddy",
        relationship: "Child",
        user_id: 2
    }
];

const seedRecipients = () => Recipient.bulkCreate(recipientdata);

module.exports = seedRecipients;