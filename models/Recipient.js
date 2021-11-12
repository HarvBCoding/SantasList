const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Recipient extends Model {}

Recipient.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        relationship: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'recipient'
    }
);

module.exports = Recipient;