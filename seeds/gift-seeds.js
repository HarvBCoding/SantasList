const { Gift } = require('../models');

const giftdata = [
    {
        gift_name: "Coding Set",
        price: 99.99,
        recipient_id: 1
    },
    {
        gift_name: "Spiderman",
        price: 29.99,
        recipient_id: 1
    },
    {
        gift_name: "Coding Set",
        price: 99.99,
        recipient_id: 2
    },
    {
        gift_name: "Kid Arachnid",
        price: 29.99,
        recipient_id: 2
    },
    {
        gift_name: "Activity Table",
        price: 39.99,
        recipient_id: 3
    },
    {
        gift_name: "Snow suit",
        price: 19.99,
        recipient_id: 3
    },
    {
        gift_name: "Bowling Set",
        price: 49.99,
        recipient_id: 4
    },
    {
        gift_name: "Barbie",
        price: 19.99,
        recipient_id: 4
    },
    {
        gift_name: "Kitchen Set",
        price: 89.99,
        recipient_id: 5
    },
    {
        gift_name: "Ice Cream Set",
        price: 39.99,
        recipient_id: 5
    },
    {
        gift_name: "Barbie",
        price: 19.99,
        recipient_id: 6
    },
    {
        gift_name: "Barbie Dreamhouse",
        price: 99.99,
        recipient_id: 6
    },
    {
        gift_name: "Pet set",
        price: 69.99,
        recipient_id: 7
    },
    {
        gift_name: "Teething Toys",
        price: 29.99,
        recipient_id: 7
    }
];

const seedGifts = () => Gift.bulkCreate(giftdata);

module.exports = seedGifts;