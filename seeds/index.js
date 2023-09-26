const sequelize = require("../config/connection");
const {Buff, Character, Class, Player, Set, Skill} = require("../models");

const classes = [
    {
        name: "Dragonknight",
        description: "These skillful masters-at-arms use the ancient Akaviri martial arts tradition of battle-spirit, and wield fearsome magic that pounds, shatters and physically alters the world around them.",
    },
    {
        name: "Nightblade",
        description: "Nightblades are adventurers and opportunists with a gift for getting in and out of trouble. Relying variously on stealth, blades, and speed, Nightblades thrive on conflict and misfortune, trusting to their luck and cunning to survive.",
    },
    {
        name: "Sorcerer",
        description: "Sorcerers can use conjuration and destruction spells to hurl lightning bolts and create shock fields, wield dark magic to snare and stun, and summon Daedric combat followers from Oblivion to assist them.",
    },
    {
        name: "Templar",
        description: "These traveling knights call upon the powers of light and the burning sun to deal massive damage to their enemies while restoring health, magicka, and stamina to their allies.",
    },
    {
        name: "Warden",
        description: "Wardens are defenders of the Green, master storytellers whose nature tales become magical reality. They wield frost spells against enemies and summon animals to aid them.",
    },
    {
        name: "Necromancer",
        description: "Masters of death, Necromancers can call upon corpses to serve as undead thralls and weave ghastly spells to both harm and heal.",
    },
    {
        name: "Arcanist",
        description: "Channel the eldritch powers of Apocrypha as an Arcanist. These scholarly spellcasters channel secret runes and abyssal spells to destroy their enemies, heal their allies, and defend against any foe.",
    },
]

const characters = [
    {
        name: "DK Tank",
        role: "Tank",
        ClassId:1
    },
    {
        name: "DK Healer",
        role: "Healer",
        ClassId:1
    },
    {
        name: "DK DPS",
        role: "DPS",
        ClassId:1
    },
    {
        name: "Blade Tank",
        role: "Tank",
        ClassId:2
    },
    {
        name: "Blade Healer",
        role: "Healer",
        ClassId:2
    },
    {
        name: "Blade DPS",
        role: "DPS",
        ClassId:2
    },
    {
        name: "Sorc Tank",
        role: "Tank",
        ClassId:3
    },
    {
        name: "Sorc Healer",
        role: "Healer",
        ClassId:3
    },
    {
        name: "Sorc DPS",
        role: "DPS",
        ClassId:3
    },
    {
        name: "Plar Tank",
        role: "Tank",
        ClassId:4
    },
    {
        name: "Plar Healer",
        role: "Healer",
        ClassId:4
    },
    {
        name: "Plar DPS",
        role: "DPS",
        ClassId:4
    },
    {
        name: "Warden Tank",
        role: "Tank",
        ClassId:5
    },
    {
        name: "Warden Healer",
        role: "Healer",
        ClassId:5
    },
    {
        name: "Warden DPS",
        role: "DPS",
        ClassId:5
    },
    {
        name: "Cro Tank",
        role: "Tank",
        ClassId:6
    },
    {
        name: "Cro Healer",
        role: "Healer",
        ClassId:6
    },
    {
        name: "Cro DPS",
        role: "DPS",
        ClassId:6
    },
    {
        name: "Arc Tank",
        role: "Tank",
        ClassId:7
    },
    {
        name: "Arc Healer",
        role: "Healer",
        ClassId:7
    },
    {
        name: "Arc DPS",
        role: "DPS",
        ClassId:7
    },
]

const skills = [
    {
        name: "Combat Prayer",
        description: "Slam your staff down to activate its blessings, healing you and your allies in front of you for 7608 Health. Also grants Minor Berserk and Minor Resolve increasing you and your allies' damage done by 5% and Physical Resistance and Spell Resistance by 2974 for 10 seconds.",
        BuffId:8
    },
    {
        name: "Storm Atronach",
        description: "Summon an immobile storm atronach at the target location. Its arrival deals 6149 Shock Damage and stuns enemies for 3 seconds. The atronach zaps the closest enemy, dealing 3073 Shock Damage every 1 second. An ally near the atronach can activate the ON-icon-synergy-Charged Lightning.png​ Charged Lightning synergy, granting nearby allies Major Berserk for 10 seconds, increasing their damage done by 10%.",
        BuffId:7
    },
]

const sets = [
    {
        name: "Vestment of Olorime",
        description: "Casting abilities that leave an effect on the ground in combat will create a circle of might for 5 seconds. You and your group members in the circle gain Major Courage for 20 seconds, increasing your Weapon and Spell Damage by 430 for 20 seconds. This effect can occur once every 10 seconds.",
        role: "Healer",
        BuffId:1
    },
    {
        name: "Spell Power Cure",
        description: "When you overheal yourself or an ally, you give the target Major Courage for 5 seconds which increases their Weapon and Spell Damage by 430.",
        role: "Healer",
        BuffId:1
    },
    {
        name: "Claw of Yolnahkriin",
        description: "When you taunt an enemy, you give yourself and 11 group members Minor Courage for 15 seconds, increasing your Weapon and Spell Damage by 215. This effect can occur once every 8 seconds.",
        role: "Tank",
        BuffId:2
    },
    {
        name: "Coral Riptide",
        description: "Increase your Weapon and Spell Damage by up to 740 based on your missing Stamina, reaching the maximum at 33% Stamina.",
        role: "DPS",
    },
    {
        name: "Whorl of the Depths",
        description: "When you deal damage with a Light Attack, you apply Whorl of the Depths to the target, dealing 988 Frost Damage over 8 seconds. When this effect ends, a 5 meter whirlpool is created under the target for 6 seconds and deals 743 Frost Damage every 1 second. This effect can occur once every 18 seconds and scales off the higher of your Weapon or Spell Damage.",
        role: "DPS",
    },
    {
        name: "Deadly Strike",
        description: "Increase the damage your damage over time and channeled abilities do by 15%.",
        role: "DPS",
    },
    {
        name: "Pillar of Nirn",
        description: "When you deal damage, you create a fissure underneath the enemy after 1 second, dealing 683 Bleed Damage to all enemies within 2.5 meters and causing them to bleed for an additional 3415 Bleed Damage over 10 seconds. This effect can occur once every 10 seconds and scales off the higher of your Weapon or Spell Damage.",
        role: "DPS",
    },
]

const buffs = [
    {
        name: "Major Courage",
        description: "Increases Weapon and Spell Damage by 430.",
    },
    {
        name: "Minor Courage",
        description: "Increases Weapon and Spell Damage by 215.",
    },
    {
        name: "Major Brutality",
        description: "Increases Weapon Damage by 20%.",
    },
    {
        name: "Minor Brutality",
        description: "Increases Weapon Damage by 10%.",
    },
    {
        name: "Major Sorcery",
        description: "Increases Spell Damage by 20%.",
    },
    {
        name: "Minor Sorcery",
        description: "Increases Spell Damage by 10%.",
    },
    {
        name: "Major Berserk",
        description: "Increases all damage done by 10%.",
    },
    {
        name: "Minor Berserk",
        description: "Increases all damage done by 5%.",
    },
    {
        name: "Major Savagery",
        description: "Increases weapon critical by 2629.",
    },
    {
        name: "Minor Savagery",
        description: "Increases weapon critical by 1314.",
    },
    {
        name: "Major Prophecy",
        description: "Increases spell critical by 2629.",
    },
    {
        name: "Minor Prophecy",
        description: "Increases spell critical by 1314.",
    },
    {
        name: "Major Slayer",
        description: "Increases damage done to Dungeon and Trial Monsters by 10%.",
    },
    {
        name: "Minor Slayer",
        description: "Increases damage done to Dungeon and Trial Monsters by 5%.",
    },
    {
        name: "Major Resolve",
        description: "Increases resistances by 5940.",
    },
    {
        name: "Minor Resolve",
        description: "Increases resistances by 2974.",
    },
    {
        name: "Major Protection",
        description: "Reduce damage taken by 10%.",
    },
    {
        name: "Minor Protection",
        description: "Reduce damage taken by 5%.",
    },
    {
        name: "Major Evasion",
        description: "Reduce damage taken from area attacks by 20%.",
    },
    {
        name: "Minor Evasion",
        description: "Reduce damage taken from area attacks by 10%.",
    },
    {
        name: "Major Intellect",
        description: "Increases magicka recovery by 30%.",
    },
    {
        name: "Minor Intellect",
        description: "Increases magicka recovery by 15%.",
    },
    {
        name: "Major Fortitude",
        description: "Increases health recovery by 30%.",
    },
    {
        name: "Minor Fortitude",
        description: "Increases health recovery by 15%.",
    },
    {
        name: "Major Endurance",
        description: "Increases stamina recovery by 30%.",
    },
    {
        name: "Minor Endurance",
        description: "Increases stamina recovery by 15%.",
    },
    {
        name: "Major Force",
        description: "Increases critical damage done by 20%.",
    },
    {
        name: "Minor Force",
        description: "Increases critical damage done by 10%.",
    },
    {
        name: "Minor Toughness",
        description: "Increases max health by 10%.",
    },
    {
        name: "Major Brittle",
        description: "Increases target's critical damage taken by 20%.",
    },
    {
        name: "Minor Brittle",
        description: "Increases target's critical damage taken by 10%.",
    },
    {
        name: "Major Breach",
        description: "Reduce target's resistances by 5984.",
    },
    {
        name: "Minor Breach",
        description: "Reduce target's resistances by 2974.",
    },
    {
        name: "Major Vulnerability",
        description: "Increases the target's damage taken by 10%.",
    },
    {
        name: "Minor Vulnerability",
        description: "Increases the target's damage taken by 5%.",
    },
]

const seedDb = async () => {
    try{
        await sequelize.sync({force:true});
        // const userData = await User.bulkCreate(users,{individualHooks:true});
        const buffData = await Buff.bulkCreate(buffs);
        const skillData = await Skill.bulkCreate(skills);
        const setData = await Set.bulkCreate(sets);
        const classData = await Class.bulkCreate(classes);
        const charData = await Character.bulkCreate(characters);
        process.exit(0);
    } catch (err){
        console.log(err)
    }
}

seedDb();