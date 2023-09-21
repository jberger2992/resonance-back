const { Model, Datatypes } = require("sequelize");
const sequelize = require("../config/connection");

class Buff extends Model {};

Buff.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        }
    },
    {
        sequelize,
    }
);

module.exports = Buff;