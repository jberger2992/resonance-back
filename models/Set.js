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
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        tank: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        healer: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        dps: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    },
    {
        sequelize,
    }
);

module.exports = Set;