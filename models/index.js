const User = require('./User');
const Recipient = require('./Recipient');

// user has many recipients
User.hasMany(Recipient, {
    foreignKey: 'user_id'
});

// recipient belongs to user
Recipient.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Recipient }