const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Gift extends Model {}

Gift.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true, 
            allowNull: false
        },
        gift_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false
        }
    },
{
    sequelize,
    timestamp: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'gift'
}
);