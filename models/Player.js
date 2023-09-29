const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Player extends Model {};

Player.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
    }
);

module.exports = Player;