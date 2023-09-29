const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Set extends Model {};

Set.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
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

module.exports = Set;