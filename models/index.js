const Buff = require("./Buff");
const Class = require("./Class");
const Set = require("./Set");
const Skill = require("./Skill");
const Character = require("./Character");
const Player = require("./Player");

Class.hasMany(Skill);
Skill.belongsTo(Class);

Character.hasOne(Class);
Class.belongsToMany(Character,{through:"Character_Classes"});

Player.hasMany(Character);
Character.belongsToMany(Player,{through:"Player_Characters"});

Skill.hasMany(Buff);
Buff.belongsToMany(Skill,{through:"Skill_Buffs"});
Set.hasMany(Buff);
Buff.belongsToMany(Set,{through:"Set_Buffs"});

module.exports = {
    Buff,
    Class,
    Set,
    Skill,
    Character,
    Player,
}