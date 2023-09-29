const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Class extends Model {};

Class.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    {
        sequelize,
    }
);

module.exports = Class;