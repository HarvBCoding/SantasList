const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Gift extends Model {}

Gift.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true, 
        },
        gift_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
        },
        recipient_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'recipient',
                key: 'id'
            }
        }
    },
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'gift'
}
);

module.exports = Gift;
