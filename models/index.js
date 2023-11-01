const Buff = require("./Buff");
const Set = require("./Set");
const Skill = require("./Skill");
const Character = require("./Character");
const Player = require("./Player");

Player.hasMany(Character);
Character.belongsToMany(Player,{through:"Player_Characters"});

Skill.hasMany(Buff);
Buff.belongsToMany(Skill,{through:"Skill_Buffs"});
Set.hasMany(Buff);
Buff.belongsToMany(Set,{through:"Set_Buffs"});

module.exports = {
    Buff,
    Set,
    Skill,
    Character,
    Player,
}