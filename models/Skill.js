const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Skill extends Model {};

Skill.init(
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

module.exports = Skill;