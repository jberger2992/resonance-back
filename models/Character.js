const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Character extends Model {};

Character.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
    }
);

module.exports = Character;