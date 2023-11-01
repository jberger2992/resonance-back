const sequelize = require("../config/connection");
const {Buff, Character, Player, Set, Skill} = require("../models");

const characters = [
    {
        name: "DK Tank",
        role: "Tank",
    },
    {
        name: "DK Healer",
        role: "Healer",
    },
    {
        name: "DK DPS",
        role: "DPS",
    },
    {
        name: "Blade Tank",
        role: "Tank",
    },
    {
        name: "Blade Healer",
        role: "Healer",
    },
    {
        name: "Blade DPS",
        role: "DPS",
    },
    {
        name: "Sorc Tank",
        role: "Tank",
    },
    {
        name: "Sorc Healer",
        role: "Healer",
    },
    {
        name: "Sorc DPS",
        role: "DPS",
    },
    {
        name: "Plar Tank",
        role: "Tank",
    },
    {
        name: "Plar Healer",
        role: "Healer",
    },
    {
        name: "Plar DPS",
        role: "DPS",
    },
    {
        name: "Warden Tank",
        role: "Tank",
    },
    {
        name: "Warden Healer",
        role: "Healer",
    },
    {
        name: "Warden DPS",
        role: "DPS",
    },
    {
        name: "Cro Tank",
        role: "Tank",
    },
    {
        name: "Cro Healer",
        role: "Healer",
    },
    {
        name: "Cro DPS",
        role: "DPS",
    },
    {
        name: "Arc Tank",
        role: "Tank",
    },
    {
        name: "Arc Healer",
        role: "Healer",
    },
    {
        name: "Arc DPS",
        role: "DPS",
    },
]

const skills = [
    {
        name: "Combat Prayer",
        description: "Slam your staff down to activate its blessings, healing you and your allies in front of you for 7608 Health. Also grants Minor Berserk and Minor Resolve increasing you and your allies' damage done by 5% and Physical Resistance and Spell Resistance by 2974 for 10 seconds.",
        // BuffId:8
    },
    {
        name: "Storm Atronach",
        description: "Summon an immobile storm atronach at the target location. Its arrival deals 6149 Shock Damage and stuns enemies for 3 seconds. The atronach zaps the closest enemy, dealing 3073 Shock Damage every 1 second. An ally near the atronach can activate the ON-icon-synergy-Charged Lightning.png​ Charged Lightning synergy, granting nearby allies Major Berserk for 10 seconds, increasing their damage done by 10%.",
        // BuffId:7
    },
]

const sets = [
    {
        name: "Vestment of Olorime",
        description: "Casting abilities that leave an effect on the ground in combat will create a circle of might for 5 seconds. You and your group members in the circle gain Major Courage for 20 seconds, increasing your Weapon and Spell Damage by 430 for 20 seconds. This effect can occur once every 10 seconds.",
        type: "5pc",
        tank: true,
        healer: true,
        // BuffId:1
    },
    {
        name: "Spell Power Cure",
        description: "When you overheal yourself or an ally, you give the target Major Courage for 5 seconds which increases their Weapon and Spell Damage by 430.",
        type: "5pc",
        healer: true,
        // BuffId:1
    },
    {
        name: "Claw of Yolnahkriin",
        description: "When you taunt an enemy, you give yourself and 11 group members Minor Courage for 15 seconds, increasing your Weapon and Spell Damage by 215. This effect can occur once every 8 seconds.",
        type: "5pc",
        tank: true,
        // BuffId:2
    },
    {
        name: "Pearlescent Ward",
        description: "Grants you and up to 11 other group members Pearlescent Ward. This bonus persists through death. Pearlescent Ward increases Weapon and Spell Damage by up to 180 based on the number of group members that are alive. Current 180 Weapon and Spell Damage. Pearlescent Ward increases damage reduction from non-player enemies out of 66% based on the number of group members that are dead.",
        type: "5pc",
        tank: true,
    },
    {
        name: "Turning Tide",
        description: "When you Block, you gain Flowing Water for 10 seconds, causing your next Bash attack to deal 2223 Magic Damage to up to 6 enemies in a 5 by 10 meter line, and apply Major Vulnerability for 10 seconds, increasing their damage taken by 10%. This effect can occur once every 15 seconds and scales off your Max Health.",
        type: "5pc",
        tank: true,
        // BuffId:
    },
    {
        name: "Pillager's Profit",
        description: "Casting an Ultimate ability while in combat grants 5% of Ultimate spent, up to a max of 20, as Ultimate to up to 11 other group members within 12 meters every 2 seconds over 10 seconds. Group members can only be affected by this set once every 45 seconds.",
        type: "5pc",
        healer: true,
    },
    {
        name: "Roaring Opportunist",
        description: "After completing a fully-charged Heavy Attack, you and up to 5 group members gain Major Slayer, increasing your damage done to Dungeon, Trial, and Arena Monsters by 10% for 1 second for every 600 Spell Damage or 6300 Magicka you have. Roaring Opportunist can only affect a target every 22 seconds. Maximum duration 12 seconds.",
        type: "5pc",
        healer: true,
        // BuffId:
    },
    {
        name: "Jorvuld's Guidance",
        description: " While in combat, increases the duration of all Major buffs, Minor buffs, and damage shields you apply to yourself and allies by 40%.",
        type: "5pc",
        healer: true,
    },
    {
        name: "Saxhleel Champion",
        description: " When you use an Ultimate ability while in combat, you and up to 11 group members within 28 meters of you gain Major Force for 1 second per 15 Ultimate spent, increasing your Critical Damage done by 20%.",
        type: "5pc",
        tank: true,
        healer: true,
        // BuffId:
    },
    {
        name: "Powerful Assault",
        description: "When you cast an Assault ability while in combat, you and up to 5 group members within 12 meters gain 307 Weapon and Spell Damage for 15 seconds.",
        type: "5pc",
        tank: true,
        healer: true,
    },
    {
        name: "Powerful Assault",
        description: "When you cast an Assault ability while in combat, you and up to 5 group members within 12 meters gain 307 Weapon and Spell Damage for 15 seconds.",
        type: "5pc",
        tank: true,
        healer: true,
    },
    {
        name: "Coral Riptide",
        description: "Increase your Weapon and Spell Damage by up to 740 based on your missing Stamina, reaching the maximum at 33% Stamina.",
        type: "5pc",
        dps: true,
    },
    {
        name: "Whorl of the Depths",
        description: "When you deal damage with a Light Attack, you apply Whorl of the Depths to the target, dealing 988 Frost Damage over 8 seconds. When this effect ends, a 5 meter whirlpool is created under the target for 6 seconds and deals 743 Frost Damage every 1 second. This effect can occur once every 18 seconds and scales off the higher of your Weapon or Spell Damage.",
        type: "5pc",
        dps: true,
    },
    {
        name: "Deadly Strike",
        description: "Increase the damage your damage over time and channeled abilities do by 15%.",
        type: "5pc",
        dps: true,
    },
    {
        name: "Pillar of Nirn",
        description: "When you deal damage, you create a fissure underneath the enemy after 1 second, dealing 683 Bleed Damage to all enemies within 2.5 meters and causing them to bleed for an additional 3415 Bleed Damage over 10 seconds. This effect can occur once every 10 seconds and scales off the higher of your Weapon or Spell Damage.",
        type: "5pc",
        dps: true,
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
        const setData = await Set.bulkCreate(sets);
        const skillData = await Skill.bulkCreate(skills);
        const charData = await Character.bulkCreate(characters);
        process.exit(0);
    } catch (err){
        console.log(err)
    }
}

seedDb();