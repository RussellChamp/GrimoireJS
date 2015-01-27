/*global _:false, console:false */
/*global Grimoire:true, Intelligence:true */

'use strict';
var Weapons = {};
Weapons.data = {
    'baseUrl': 'http://paizo.com/pathfinderRPG/prd/magicItems/weapons.html',
    // [name, bonus modifier, cost, url]
    'specific': [
        {'name': 'Sleep arrow', 'bonus': 0, 'cost': 132, 'url': '#sleep-arrow'},
        {'name': 'Screaming bolt', 'bonus': 0, 'cost': 267},
        {'name': 'Silver dagger (masterwork)', 'bonus': 0, 'cost': 322},
        {'name': 'Cold iron longsword (masterwork)', 'bonus': 0, 'cost': 330},
        {'name': 'Javelin of lightning', 'bonus': 0, 'cost': 1500},
        {'name': 'Slaying arrow', 'bonus': 0, 'cost': 2282},
        {'name': 'Adamantine dagger', 'bonus': 0, 'cost': 3002},
        {'name': 'Adamantine battleaxe', 'bonus': 0, 'cost': 3010},
        {'name': 'Slaying arrow (greater)', 'bonus': 0, 'cost': 4057},
        {'name': 'Shatterspike', 'bonus': 0, 'cost': 4315},
        {'name': 'Dagger of venom', 'bonus': 0, 'cost': 8302},
        {'name': 'Trident of warning', 'bonus': 0, 'cost': 10115},
        {'name': 'Assassin\'s dagger', 'bonus': 0, 'cost': 10302},
        {'name': 'Shifter\'s sorrow', 'bonus': 0, 'cost': 12780},
        {'name': 'Trident of fish command', 'bonus': 0, 'cost': 18650},
        {'name': 'Flame tongue', 'bonus': 0, 'cost': 20715},
        {'name': 'Luck blade (0 wishes)', 'bonus': 0, 'cost': 22060},
        {'name': 'Sword of subtlety', 'bonus': 0, 'cost': 22310},
        {'name': 'Sword of the planes', 'bonus': 0, 'cost': 22315},
        {'name': 'Nine lives stealer', 'bonus': 0, 'cost': 23057},
        {'name': 'Oathbow', 'bonus': 0, 'cost': 25600},
        {'name': 'Sword of life stealing', 'bonus': 0, 'cost': 25715},
        {'name': 'Mace of terror', 'bonus': 0, 'cost': 38552},
        {'name': 'Life-drinker', 'bonus': 0, 'cost': 40320},
        {'name': 'Sylvan scimitar', 'bonus': 0, 'cost': 47315},
        {'name': 'Rapier of puncturing', 'bonus': 0, 'cost': 50320},
        {'name': 'Sun blade', 'bonus': 0, 'cost': 50335},
        {'name': 'Frost brand', 'bonus': 0, 'cost': 54475},
        {'name': 'Dwarven thrower', 'bonus': 0, 'cost': 60312},
        {'name': 'Luck blade (1 wish)', 'bonus': 0, 'cost': 62360},
        {'name': 'Mace of smiting', 'bonus': 0, 'cost': 75312},
        {'name': 'Luck blade (2 wishes)', 'bonus': 0, 'cost': 102660},
        {'name': 'Holy avenger', 'bonus': 0, 'cost': 120630},
        {'name': 'Luck blade (3 wishes)', 'bonus': 0, 'cost': 14296},
    ] //34 specific weapons
};

Weapons.getSpecific = function(type) {
    var roll = _.random(1,100);
    if(type == 'minor') {
        switch(true) {
            case(roll <= 15): return Weapons.data.specific[0];
            case(roll <= 25): return Weapons.data.specific[1];
            case(roll <= 45): return Weapons.data.specific[2];
            case(roll <= 65): return Weapons.data.specific[3];
            case(roll <= 75): return Weapons.data.specific[4];
            case(roll <= 80): return Weapons.data.specific[5];
            case(roll <= 90): return Weapons.data.specific[6];
            case(roll <= 100): return Weapons.data.specific[7];
        }
    }
    else if(type == 'medium') {
        switch(true) {
            case(roll <= 9):  return Weapons.data.specific[4];
            case(roll <= 15): return Weapons.data.specific[5];
            case(roll <= 24): return Weapons.data.specific[6];
            case(roll <= 33): return Weapons.data.specific[7];
            case(roll <= 37): return Weapons.data.specific[8];
            case(roll <= 40): return Weapons.data.specific[9];
            case(roll <= 46): return Weapons.data.specific[10];
            case(roll <= 51): return Weapons.data.specific[11];
            case(roll <= 57): return Weapons.data.specific[12];
            case(roll <= 62): return Weapons.data.specific[13];
            case(roll <= 66): return Weapons.data.specific[14];
            case(roll <= 74): return Weapons.data.specific[15];
            case(roll <= 79): return Weapons.data.specific[16];
            case(roll <= 86): return Weapons.data.specific[17];
            case(roll <= 91): return Weapons.data.specific[18];
            case(roll <= 95): return Weapons.data.specific[19];
            case(roll <= 98): return Weapons.data.specific[20];
            case(roll <= 100): return Weapons.data.specific[21];
        }
    }
    else if(type == 'major') {
        switch(true) {
            case(roll <= 4):  return Weapons.data.specific[12];
            case(roll <= 7):  return Weapons.data.specific[13];
            case(roll <= 9):  return Weapons.data.specific[14];
            case(roll <= 13): return Weapons.data.specific[15];
            case(roll <= 17): return Weapons.data.specific[16];
            case(roll <= 24): return Weapons.data.specific[17];
            case(roll <= 31): return Weapons.data.specific[18];
            case(roll <= 37): return Weapons.data.specific[19];
            case(roll <= 42): return Weapons.data.specific[20];
            case(roll <= 46): return Weapons.data.specific[21];
            case(roll <= 51): return Weapons.data.specific[22];
            case(roll <= 57): return Weapons.data.specific[23];
            case(roll <= 62): return Weapons.data.specific[24];
            case(roll <= 67): return Weapons.data.specific[25];
            case(roll <= 73): return Weapons.data.specific[26];
            case(roll <= 79): return Weapons.data.specific[27];
            case(roll <= 84): return Weapons.data.specific[28];
            case(roll <= 91): return Weapons.data.specific[29];
            case(roll <= 95): return Weapons.data.specific[30];
            case(roll <= 97): return Weapons.data.specific[31];
            case(roll <= 99): return Weapons.data.specific[32];
            case(roll <= 100): return Weapons.data.specific[33];
        }
    }
}; //end getSpecific

Weapons.data.meleeSpecial = [
        {'name': 'Bane', 'bonus': 1},
        {'name': 'Defending', 'bonus': 1},
        {'name': 'Flaming', 'bonus': 1},
        {'name': 'Frost', 'bonus': 1},
        {'name': 'Shock', 'bonus': 1},
        {'name': 'Ghost touch', 'bonus': 1},
        {'name': 'Keen', 'bonus': 1},
        {'name': 'Ki Focus', 'bonus': 1},
        {'name': 'Merciful', 'bonus': 1},
        {'name': 'Mighty cleaving', 'bonus': 1},
        {'name': 'Spell storing', 'bonus': 1},
        {'name': 'Throwing', 'bonus': 1},
        {'name': 'Thundering', 'bonus': 1},
        {'name': 'Vicious', 'bonus': 1},
        {'name': 'Anarchic', 'bonus': 2},
        {'name': 'Axiomatic', 'bonus': 2},
        {'name': 'Disruption', 'bonus': 2},
        {'name': 'Flaming burst', 'bonus': 2},
        {'name': 'Icy burst', 'bonus': 2},
        {'name': 'Holy', 'bonus': 2},
        {'name': 'Shocking burst', 'bonus': 2},
        {'name': 'Unholy', 'bonus': 2},
        {'name': 'Wounding', 'bonus': 2},
        {'name': 'Speed', 'bonus': 3},
        {'name': 'Brilliant energy', 'bonus': 4},
        {'name': 'Dancing', 'bonus': 4},
        {'name': 'Vorpal', 'bonus': 5},
    ]; //27 melee specials - name, bonus modifier
    // 100   96–100  91–100  Roll again twice4

Grimoire.getHumanoidType = function() {
    var roll = _.random(1,100);
    switch(true) {
        case (roll <= 6):  return 'aquatic';
        case (roll <= 19): return 'dwarf';
        case (roll <= 32): return 'elf';
        case (roll <= 39): return 'giant';
        case (roll <= 45): return 'goblinoid';
        case (roll <= 52): return 'gnoll';
        case (roll <= 59): return 'gnome';
        case (roll <= 67): return 'halfling';
        case (roll <= 79): return 'human';
        case (roll <= 92): return 'orc';
        case (roll <= 100): return 'reptilian';
    }
};

Grimoire.getOutsiderType = function() {
    var roll = _.random(1,100);
    switch(true) {
        //There is NO roll chart for picking outsiders types. 
        //I made up this roll. Common enemy types have ~2x chance to roll
        case (roll <= 9):  return 'air';
        case (roll <= 18): return 'earth';
        case (roll <= 27): return 'fire';
        case (roll <= 36): return 'water';
        case (roll <= 54): return 'chaotic';
        case (roll <= 72): return 'evil';
        case (roll <= 81): return 'good';
        case (roll <= 90): return 'lawful';
        case (roll <= 100): return 'native';
    }
};

Weapons.getBane = function() {
    var roll = _.random(1,100);
    switch(true) {
        //There is NO roll chart for picking outsiders types. 
        //I made up this roll. Common enemy types have ~2x chance to roll
        case (roll <= 5):  return 'Bane of Aberations';
        case (roll <= 9):  return 'Bane of Animals';
        case (roll <= 16): return 'Bane of Constructs';
        case (roll <= 22): return 'Bane of Dragons';
        case (roll <= 27): return 'Bane of Fey';
        case (roll <= 60): return 'Bane of Humanoids (' + Grimoire.getHumanoidType() + ')';
        case (roll <= 65): return 'Bane of Magical Beasts';
        case (roll <= 70): return 'Bane of Monstrous Humanoids';
        case (roll <= 72): return 'Bane of Oozes';
        case (roll <= 88): return 'Bane of Outsiders (' + Grimoire.getOutsiderType() + ')';
        case (roll <= 90): return 'Bane of Plants';
        case (roll <= 98): return 'Bane of Undead';
        case (roll <= 100): return 'Bane of Vermin';
    }
};

Weapons.getMeleeSpecial = function(type) {
    //TODO: check for conflicting or duplicate specials
    var roll = _.random(1,100);
    var s1, s2;
    if(type == 'minor') {
        switch(true) {
            case (roll <= 10): return {'name': Weapons.getBane(), 'bonus': 1};
            case (roll <= 17): return Weapons.data.meleeSpecial[1];
            case (roll <= 27): return Weapons.data.meleeSpecial[2];
            case (roll <= 37): return Weapons.data.meleeSpecial[3];
            case (roll <= 47): return Weapons.data.meleeSpecial[4];
            case (roll <= 56): return Weapons.data.meleeSpecial[5];
            case (roll <= 67): return Weapons.data.meleeSpecial[6];
            case (roll <= 71): return Weapons.data.meleeSpecial[7];
            case (roll <= 75): return Weapons.data.meleeSpecial[8];
            case (roll <= 82): return Weapons.data.meleeSpecial[9];
            case (roll <= 87): return Weapons.data.meleeSpecial[10];
            case (roll <= 91): return Weapons.data.meleeSpecial[11];
            case (roll <= 95): return Weapons.data.meleeSpecial[12];
            case (roll <= 99): return Weapons.data.meleeSpecial[13];
            case (roll <= 100): //roll twice
            s1 = Weapons.getMeleeSpecial('minor');
            s2 = Weapons.getMeleeSpecial('minor');
            return {'name': s1.name + ' ' + s2.name, 'bonus': s1.bonus + s2.bonus};
        }
    }
    else if(type == 'medium') {
        switch(true) {
            case (roll <= 6):  return {'name': Weapons.getBane(), 'bonus': 1};
            case (roll <= 12): return Weapons.data.meleeSpecial[1];
            case (roll <= 19): return Weapons.data.meleeSpecial[2];
            case (roll <= 26): return Weapons.data.meleeSpecial[3];
            case (roll <= 33): return Weapons.data.meleeSpecial[4];
            case (roll <= 38): return Weapons.data.meleeSpecial[5];
            case (roll <= 44): return Weapons.data.meleeSpecial[6];
            case (roll <= 48): return Weapons.data.meleeSpecial[7];
            case (roll <= 50): return Weapons.data.meleeSpecial[8];
            case (roll <= 54): return Weapons.data.meleeSpecial[9];
            case (roll <= 59): return Weapons.data.meleeSpecial[10];
            case (roll <= 63): return Weapons.data.meleeSpecial[11];
            case (roll <= 65): return Weapons.data.meleeSpecial[12];
            case (roll <= 69): return Weapons.data.meleeSpecial[13];
            case (roll <= 72): return Weapons.data.meleeSpecial[14];
            case (roll <= 75): return Weapons.data.meleeSpecial[15];
            case (roll <= 78): return Weapons.data.meleeSpecial[16];
            case (roll <= 81): return Weapons.data.meleeSpecial[17];
            case (roll <= 84): return Weapons.data.meleeSpecial[18];
            case (roll <= 87): return Weapons.data.meleeSpecial[19];
            case (roll <= 90): return Weapons.data.meleeSpecial[20];
            case (roll <= 93): return Weapons.data.meleeSpecial[21];
            case (roll <= 95): return Weapons.data.meleeSpecial[22];
            case (roll <= 100): //roll twice
            s1 = Weapons.getMeleeSpecial('medium');
            s2 = Weapons.getMeleeSpecial('medium');
            return {'name': s1.name + ' ' + s2.name, 'bonus': s1.bonus + s2.bonus};
        }
    }
    else if(type == 'major') {
        switch(true) {
            case (roll <= 3):  return {'name': Weapons.getBane(), 'bonus': 1};
            case (roll <= 6):  return Weapons.data.meleeSpecial[2];
            case (roll <= 9):  return Weapons.data.meleeSpecial[3];
            case (roll <= 12): return Weapons.data.meleeSpecial[4];
            case (roll <= 15): return Weapons.data.meleeSpecial[5];
            case (roll <= 19): return Weapons.data.meleeSpecial[7];
            case (roll <= 21): return Weapons.data.meleeSpecial[9];
            case (roll <= 24): return Weapons.data.meleeSpecial[10];
            case (roll <= 28): return Weapons.data.meleeSpecial[11];
            case (roll <= 32): return Weapons.data.meleeSpecial[12];
            case (roll <= 36): return Weapons.data.meleeSpecial[13];
            case (roll <= 41): return Weapons.data.meleeSpecial[14];
            case (roll <= 46): return Weapons.data.meleeSpecial[15];
            case (roll <= 49): return Weapons.data.meleeSpecial[16];
            case (roll <= 54): return Weapons.data.meleeSpecial[17];
            case (roll <= 59): return Weapons.data.meleeSpecial[18];
            case (roll <= 64): return Weapons.data.meleeSpecial[19];
            case (roll <= 69): return Weapons.data.meleeSpecial[20];
            case (roll <= 74): return Weapons.data.meleeSpecial[21];
            case (roll <= 78): return Weapons.data.meleeSpecial[22];
            case (roll <= 83): return Weapons.data.meleeSpecial[23];
            case (roll <= 86): return Weapons.data.meleeSpecial[24];
            case (roll <= 88): return Weapons.data.meleeSpecial[25];
            case (roll <= 90): return Weapons.data.meleeSpecial[26];
            case (roll <= 100): //roll twice
            s1 = Weapons.getMeleeSpecial('major');
            s2 = Weapons.getMeleeSpecial('major');
            return {'name': s1.name + ' ' + s2.name, 'bonus': s1.bonus + s2.bonus};
        }
    }
};

Weapons.data.rangedSpecial = [
        {'name': 'Bane', 'bonus': 1},
        {'name': 'Distance', 'bonus': 1},
        {'name': 'Flaming', 'bonus': 1},
        {'name': 'Frost', 'bonus': 1},
        {'name': 'Merciful', 'bonus': 1},
        {'name': 'Returning', 'bonus': 1},
        {'name': 'Shock', 'bonus': 1},
        {'name': 'Seeking', 'bonus': 1},
        {'name': 'Thundering', 'bonus': 1},
        {'name': 'Anarchic', 'bonus': 2},
        {'name': 'Axiomatic', 'bonus': 2},
        {'name': 'Flaming burst', 'bonus': 2},
        {'name': 'Holy', 'bonus': 2},
        {'name': 'Icy burst', 'bonus': 2},
        {'name': 'Shocking burst', 'bonus': 2},
        {'name': 'Unholy', 'bonus': 2},
        {'name': 'Speed', 'bonus': 3},
        {'name': 'Brilliant energy', 'bonus': 4},
    ]; //18 ranged specials - name, bonus modifier

Weapons.getRangedSpecial = function(type) {
    var roll = _.random(1,100);
    var s1, s2;
    if(type == 'minor') {
        switch(true) {
            case (roll <= 12): return {'name': Weapons.getBane(), 'bonus': 1};
            case (roll <= 25): return Weapons.data.rangedSpecial[1];
            case (roll <= 40): return Weapons.data.rangedSpecial[2];
            case (roll <= 55): return Weapons.data.rangedSpecial[3];
            case (roll <= 60): return Weapons.data.rangedSpecial[4];
            case (roll <= 68): return Weapons.data.rangedSpecial[5];
            case (roll <= 83): return Weapons.data.rangedSpecial[6];
            case (roll <= 93): return Weapons.data.rangedSpecial[7];
            case (roll <= 99): return Weapons.data.rangedSpecial[8];
            case (roll <= 100): //roll twice
            s1 = Weapons.getRangedSpecial('minor');
            s2 = Weapons.getRangedSpecial('minor');
            return {'name': s1.name + ' ' + s2.name, 'bonus': s1.bonus + s2.bonus};
        }
    }
    else if(type == 'medium') {
        switch(true) {
            case (roll <= 8):  return {'name': Weapons.getBane(), 'bonus': 1};
            case (roll <= 16): return Weapons.data.rangedSpecial[1];
            case (roll <= 28): return Weapons.data.rangedSpecial[2];
            case (roll <= 40): return Weapons.data.rangedSpecial[3];
            case (roll <= 42): return Weapons.data.rangedSpecial[4];
            case (roll <= 47): return Weapons.data.rangedSpecial[5];
            case (roll <= 59): return Weapons.data.rangedSpecial[6];
            case (roll <= 64): return Weapons.data.rangedSpecial[7];
            case (roll <= 68): return Weapons.data.rangedSpecial[8];
            case (roll <= 71): return Weapons.data.rangedSpecial[9];
            case (roll <= 74): return Weapons.data.rangedSpecial[10];
            case (roll <= 79): return Weapons.data.rangedSpecial[11];
            case (roll <= 82): return Weapons.data.rangedSpecial[12];
            case (roll <= 87): return Weapons.data.rangedSpecial[13];
            case (roll <= 92): return Weapons.data.rangedSpecial[14];
            case (roll <= 95): return Weapons.data.rangedSpecial[15];
            case (roll <= 100): //roll twice
            s1 = Weapons.getRangedSpecial('medium');
            s2 = Weapons.getRangedSpecial('medium');
            return {'name': s1.name + ' ' + s2.name, 'bonus': s1.bonus + s2.bonus};
        }
    }
    if(type == 'major') {
        switch(true) {
            case (roll <= 4):  return {'name': Weapons.getBane(), 'bonus': 1};
            case (roll <= 8):  return Weapons.data.rangedSpecial[1];
            case (roll <= 12): return Weapons.data.rangedSpecial[2];
            case (roll <= 16): return Weapons.data.rangedSpecial[3];
            case (roll <= 21): return Weapons.data.rangedSpecial[5];
            case (roll <= 25): return Weapons.data.rangedSpecial[6];
            case (roll <= 27): return Weapons.data.rangedSpecial[7];
            case (roll <= 29): return Weapons.data.rangedSpecial[8];
            case (roll <= 34): return Weapons.data.rangedSpecial[9];
            case (roll <= 39): return Weapons.data.rangedSpecial[10];
            case (roll <= 49): return Weapons.data.rangedSpecial[11];
            case (roll <= 54): return Weapons.data.rangedSpecial[12];
            case (roll <= 64): return Weapons.data.rangedSpecial[13];
            case (roll <= 74): return Weapons.data.rangedSpecial[14];
            case (roll <= 79): return Weapons.data.rangedSpecial[15];
            case (roll <= 84): return Weapons.data.rangedSpecial[16];
            case (roll <= 90): return Weapons.data.rangedSpecial[17];
            case (roll <= 100): //roll twice
            s1 = Weapons.getRangedSpecial('major');
            s2 = Weapons.getRangedSpecial('major');
            return {'name': s1.name + ' ' + s2.name, 'bonus': s1.bonus + s2.bonus};
        }
    }

};

Weapons.data.bonusCost = [
    {'name': '',   'bonus': 0, 'cost': 0}, //just for bookkeeping
    {'name': '+1', 'bonus': 1, 'cost': 2000},
    {'name': '+2', 'bonus': 2, 'cost': 8000},
    {'name': '+3', 'bonus': 3, 'cost': 18000},
    {'name': '+4', 'bonus': 4, 'cost': 32000},
    {'name': '+5', 'bonus': 5, 'cost': 50000},
    {'name': '+6', 'bonus': 6, 'cost': 72000},
    {'name': '+7', 'bonus': 7, 'cost': 98000},
    {'name': '+8', 'bonus': 8, 'cost': 128000},
    {'name': '+9', 'bonus': 9, 'cost': 162000},
    {'name': '+10', 'bonus': 10, 'cost': 200000},
    //5 possible roll'able weapons. Specific type of weapon is left up to DM
];

Weapons.getWeapon = function(type, wClass, final) {
//TODO: resolve issue where you get a 'Glowing Glowing Glowing item'
    final = typeof final !== 'undefined' ? final : true; //set to false when we recursively call getWeapon
    if(wClass === undefined) {
        if(_.random(1,100) <= 75)
            wClass = 'melee';
        else
            wClass = 'ranged';
    }
    var roll = _.random(1,100);
    var weapon = {};
    var newWeapon;
    var special;
    if(type == 'minor') {
        switch(true) {
            case (roll <= 70):
            weapon = {'name': Weapons.data.bonusCost[1].name + ' ' + type + ' ' + wClass + ' weapon',
                    'bonus': Weapons.data.bonusCost[1].bonus,
                    'cost': Weapons.data.bonusCost[1].cost,};
            break;
            case (roll <= 85):
            weapon = {'name': Weapons.data.bonusCost[2].name + ' ' + type + ' ' + wClass + ' weapon',
                    'bonus': Weapons.data.bonusCost[2].bonus,
                    'cost': Weapons.data.bonusCost[2].cost,};
            break;
            case (roll <= 90):
            weapon = Weapons.getSpecific(type);
            break;
            case (roll <= 100):
            //'Special ability and roll again'
            newWeapon = Weapons.getWeapon(type, wClass, false);
            special = (wClass == 'melee') ? Weapons.getMeleeSpecial(type) : Weapons.getRangedSpecial(type);
            if(newWeapon.bonus + special.bonus <= 10) {
                weapon = {'name': special.name + ' ' + newWeapon.name,
                        'bonus': special.bonus + newWeapon.bonus,
                        //base weapon cost plus the difference between bonuses
                        'cost': newWeapon.cost + Weapons.data.bonusCost[newWeapon.bonus + special.bonus].cost - Weapons.data.bonusCost[newWeapon.bonus].cost,
                    };
            }
            else {
              weapon = newWeapon; //Don't apply the new special
            }
            break;
        }
    }
    else if(type == 'medium') {
        switch(true) {
            case (roll <= 10):
            weapon = {'name': Weapons.data.bonusCost[1].name + ' ' + type + ' ' + wClass + ' weapon',
                    'bonus': Weapons.data.bonusCost[1].bonus,
                    'cost': Weapons.data.bonusCost[1].cost,};
            break;
            case (roll <= 29):
            weapon = {'name': Weapons.data.bonusCost[2].name + ' ' + type + ' ' + wClass + ' weapon',
                    'bonus': Weapons.data.bonusCost[2].bonus,
                    'cost': Weapons.data.bonusCost[2].cost,};
            break;
            case (roll <= 58):
            weapon = {'name': Weapons.data.bonusCost[3].name + ' ' + type + ' ' + wClass + ' weapon',
                    'bonus': Weapons.data.bonusCost[3].bonus,
                    'cost': Weapons.data.bonusCost[3].cost,};
            break;
            case (roll <= 62):
            weapon = {'name': Weapons.data.bonusCost[4].name + ' ' + type + ' ' + wClass + ' weapon',
                    'bonus': Weapons.data.bonusCost[4].bonus,
                    'cost': Weapons.data.bonusCost[4].cost,};
            break;
            case (roll <= 68):
            weapon = Weapons.getSpecific(type);
            break;
            case (roll <= 100):
            //'Special ability and roll again'
            newWeapon = Weapons.getWeapon(type, wClass, false);
            special = (wClass == 'melee') ? Weapons.getMeleeSpecial(type) : Weapons.getRangedSpecial(type);
            if(newWeapon.bonus + special.bonus <= 10) {
                weapon = {'name': special.name + ' ' + newWeapon.name,
                        'bonus': special.bonus + newWeapon.bonus,
                        //base weapon cost plus the difference between bonuses
                        'cost': newWeapon.cost + Weapons.data.bonusCost[newWeapon.bonus + special.bonus].cost - Weapons.data.bonusCost[newWeapon.bonus].cost,
                    };
            }
            else {
              weapon = newWeapon; //Don't apply the new special
            }
            break;
        }
    }
    else if(type == 'major') {
        switch(true) {
            case (roll <= 20):
            weapon = {'name': Weapons.data.bonusCost[3].name + ' ' + type + ' ' + wClass + ' weapon',
                    'bonus': Weapons.data.bonusCost[3].bonus,
                    'cost': Weapons.data.bonusCost[3].cost,};
            break;
            case (roll <= 38):
            weapon = {'name': Weapons.data.bonusCost[4].name + ' ' + type + ' ' + wClass + ' weapon',
                    'bonus': Weapons.data.bonusCost[4].bonus,
                    'cost': Weapons.data.bonusCost[4].cost,};
            break;
            case (roll <= 49):
            weapon = {'name': Weapons.data.bonusCost[5].name + ' ' + type + ' ' + wClass + ' weapon',
                    'bonus': Weapons.data.bonusCost[5].bonus,
                    'cost': Weapons.data.bonusCost[5].cost,};
            break;
            case (roll <= 63):
            weapon = Weapons.getSpecific(type);
            break;
            case (roll <= 100):
            //'Special ability and roll again'
            newWeapon = Weapons.getWeapon(type, wClass, false);
            special = (wClass == 'melee') ? Weapons.getMeleeSpecial(type) : Weapons.getRangedSpecial(type);
            if(newWeapon.bonus + special.bonus <= 10) {
                weapon = {'name': special.name + ' ' + newWeapon.name,
                        'bonus': special.bonus + newWeapon.bonus,
                        //base weapon cost plus the difference between bonuses
                        'cost': newWeapon.cost + Weapons.data.bonusCost[newWeapon.bonus + special.bonus].cost - Weapons.data.bonusCost[newWeapon.bonus].cost,
                    };
            }
            else {
              weapon = newWeapon; //Don't apply the new special
            }
            break;
        }
    }

    if(weapon === undefined || Object.keys(weapon).length === 0) {
      var err = new Error();
      console.log(type);
      console.log(wClass);
      console.log(final);
      console.log('roll: ' + roll);
      console.log(newWeapon);
      console.log(special);
      return err.stack;
    }
    var i = weapon.name.indexOf('+');
    if(i != -1) {
        //move the '+X' to the front
        weapon.name = weapon.name.slice(i, i+3) + weapon.name.slice(0, i) + weapon.name.slice(i+3);
    }

    //There is the possibility of getting a special modifier on a specific item that does not match
    //This is hilarious and has not yet been fixed

    if(final === true && _.random(1,100) === 1) {
        weapon.name = 'Intelligent ' + weapon.name;
        weapon.intelligence = Intelligence.getItemIntelligence(weapon.cost);
        weapon.cost += weapon.intelligence.cost;
    }

    if(final === true && _.random(1,100) <= 30) {
        weapon.name = 'Glowing ' + weapon.name;
    }
    return weapon;
};

Weapons.getWeapons = function (numMinor, numMedium, numMajor, wClass) {
    //where wClass can be 'melee' or 'ranged'
    var weapons = [];
    _(numMinor).times(function() {
        weapons.push(Weapons.getWeapon('minor', wClass));
    });
    _(numMedium).times(function() {
        weapons.push(Weapons.getWeapon('medium', wClass));
    });
    _(numMajor).times(function() {
        weapons.push(Weapons.getWeapon('major', wClass));
    });
    return weapons;
};
