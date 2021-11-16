const User = require('./User');
const Recipient = require('./Recipient');
const Gift = require('./Gift');

// user has many recipients
User.hasMany(Recipient, {
    foreignKey: 'user_id'
});

// recipient belongs to user
Recipient.belongsTo(User, {
    foreignKey: 'user_id'
});

// gift 
Gift.belongsTo(Recipient, {
    foreignKey: 'recipient_id',
    onDelete: 'SET NULL'
});

// recipient has many gifts
Recipient.hasMany(Gift, {
    foreignKey: 'recipient_id',
    onDelete: 'SET NULL'
});

module.exports = { User, Recipient, Gift }