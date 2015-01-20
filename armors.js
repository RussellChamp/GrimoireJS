/*global _:false */
'use strict';

//TODO: Program the "Roll twice" logic

var Armors = {};
Armors.specificBaseUrl = 'http://paizo.com/pathfinderRPG/prd/magicItems/armor.html';
Armors.getSpecifics = function() {
    return [
        {'name': 'Mithral shirt', 'bonus': 0, 'cost': 1100, 'url': '#mithril-shirt'},
        {'name': 'Dragonhide plate', 'bonus': 0, 'cost': 3300, 'url':''},
        {'name': 'Elven chain', 'bonus': 0, 'cost': 5150, 'url':''},
        {'name': 'Rhino hide', 'bonus': 0, 'cost': 5165, 'url':''},
        {'name': 'Adamantine breastplate', 'bonus': 0, 'cost': 10200, 'url':''},
        {'name': 'Dwarven plate', 'bonus': 0, 'cost': 16500, 'url':''},
        {'name': 'Banded mail of luck', 'bonus': 0, 'cost': 18900, 'url':''},
        {'name': 'Celestial armor', 'bonus': 0, 'cost': 22400, 'url':''},
        {'name': 'Plate armor of the deep', 'bonus': 0, 'cost': 24650, 'url':''},
        {'name': 'Breastplate of command', 'bonus': 0, 'cost': 25400, 'url':''},
        {'name': 'Mithral full plate of speed', 'bonus': 0, 'cost': 26500, 'url':''},
        {'name': 'Demon armor', 'bonus': 0, 'cost': 52260, 'url':''},
    ];
};

Armors.getSpecific = function(type) {
    var roll = _.random(1,100);
    var armor = {};
    if(type == 'minor') {
        switch(true) {
            case (roll <= 50): armor = Armors.getSpecifics()[0]; break;
            case (roll <= 80): armor = Armors.getSpecifics()[1]; break;
            case (roll <= 100): armor = Armors.getSpecifics()[2]; break;
        }
    }
    else if(type == 'medium') {
        switch(true) {
            case (roll <= 25): armor = Armors.getSpecifics()[0]; break;
            case (roll <= 45): armor = Armors.getSpecifics()[1]; break;
            case (roll <= 57): armor = Armors.getSpecifics()[2]; break;
            case (roll <= 67): armor = Armors.getSpecifics()[3]; break;
            case (roll <= 82): armor = Armors.getSpecifics()[4]; break;
            case (roll <= 97): armor = Armors.getSpecifics()[5]; break;
            case (roll <= 100): armor = Armors.getSpecifics()[6]; break;
        }
    }
    else if(type == 'major') {
        switch(true) {
            case (roll <= 10): armor = Armors.getSpecifics()[4]; break;
            case (roll <= 20): armor = Armors.getSpecifics()[5]; break;
            case (roll <= 32): armor = Armors.getSpecifics()[6]; break;
            case (roll <= 50): armor = Armors.getSpecifics()[7]; break;
            case (roll <= 60): armor = Armors.getSpecifics()[8]; break;
            case (roll <= 75): armor = Armors.getSpecifics()[9]; break;
            case (roll <= 90): armor = Armors.getSpecifics()[10]; break;
            case (roll <= 100): armor = Armors.getSpecifics()[11]; break;
        }
    }
    return armor;
};

Armors.getArmors = function() {
    //5 possible roll'able armors. Specific type of armor is left up to DM
    return [
        {'name': '+1 armor', 'bonus': 1, 'cost': 1000},
        {'name': '+2 armor', 'bonus': 2, 'cost': 4000},
        {'name': '+3 armor', 'bonus': 3, 'cost': 9000},
        {'name': '+4 armor', 'bonus': 4, 'cost': 16000},
        {'name': '+5 armor', 'bonus': 5, 'cost': 25000},
        {'name': '+6 armor', 'bonus': 6, 'cost': 36000},
        {'name': '+7 armor', 'bonus': 7, 'cost': 49000},
        {'name': '+8 armor', 'bonus': 8, 'cost': 64000},
        {'name': '+9 armor', 'bonus': 9, 'cost': 81000},
        {'name': '+10 armor', 'bonus': 10,'cost': 10000}
    ];
};

Armors.getSpecials = function() {
    return [
        {'name': 'Glamered', 'bonus': 0, 'cost': 2700},
        {'name': 'Light Fortification', 'bonus': 1, 'cost': 0},
        {'name': 'Slick', 'bonus': 0, 'cost': 3750},
        {'name': 'Shadow', 'bonus': 0, 'cost': 3750},
        {'name': 'Spell resistance (13)', 'bonus': 2, 'cost': 0},
        {'name': 'Improved Slick', 'bonus': 0, 'cost': 15000},
        {'name': 'Improved Shadow', 'bonus': 0, 'cost': 15000},
        {'name': 'Energy resistance', 'bonus': 0, 'cost': 18000},
        {'name': 'Ghost touch', 'bonus': 3, 'cost': 0},
        {'name': 'Invulnerability', 'bonus': 3, 'cost': 0},
        {'name': 'Moderate Fortification', 'bonus': 3, 'cost': 0},
        {'name': 'Spell resistance (15)', 'bonus': 3, 'cost': 0},
        {'name': 'Wild', 'bonus': 3, 'cost': 0},
        {'name': 'Slick, greater', 'bonus': 0, 'cost': 33750},
        {'name': 'Shadow, greater', 'bonus': 0, 'cost': 33750},
        {'name': 'Improved Energy resistance', 'bonus': 0, 'cost': 42000},
        {'name': 'Spell resistance (17)', 'bonus': 4, 'cost': 0},
        {'name': 'Etherealness', 'bonus': 0, 'cost': 49000},
        {'name': 'Undead controlling', 'bonus': 0, 'cost': 49000},
        {'name': 'Fortification, heavy', 'bonus': 5, 'cost': 0},
        {'name': 'Spell resistance (19)', 'bonus': 5, 'cost': 0},
        {'name': 'Energy resistance, greater', 'bonus': 0, 'cost': 66000}
        //100    Roll again twice
    ];
};

Armors.getSpecial = function(type) {
    var roll = _.random(1,100);
    if(type == 'minor') {
        switch(true) {
            case (roll <= 25): return Armors.getSpecials()[0];
            case (roll <= 32): return Armors.getSpecials()[1];
            case (roll <= 52): return Armors.getSpecials()[2];
            case (roll <= 92): return Armors.getSpecials()[3];
            case (roll <= 96): return Armors.getSpecials()[4];
            case (roll <= 97): return Armors.getSpecials()[5];
            case (roll <= 99): return Armors.getSpecials()[6];
            case (roll <= 100): /*roll twice*/ break;
        }
    }
    else if(type == 'medium') {
        switch(true) {
            case (roll <= 5): return Armors.getSpecials()[0];
            case (roll <= 8): return Armors.getSpecials()[1];
            case (roll <= 11): return Armors.getSpecials()[2];
            case (roll <= 17): return Armors.getSpecials()[3];
            case (roll <= 19): return Armors.getSpecials()[4];
            case (roll <= 29): return Armors.getSpecials()[5];
            case (roll <= 49): return Armors.getSpecials()[6];
            case (roll <= 74): return Armors.getSpecials()[7];
            case (roll <= 79): return Armors.getSpecials()[8];
            case (roll <= 84): return Armors.getSpecials()[9];
            case (roll <= 89): return Armors.getSpecials()[10];
            case (roll <= 94): return Armors.getSpecials()[11];
            case (roll <= 99): return Armors.getSpecials()[12];
            case (roll <= 100): /*roll twice*/ break;
        }
    }
    else if(type == 'major') {
        switch(true) {
            case (roll <= 3): return Armors.getSpecials()[0];
            case (roll <= 4): return Armors.getSpecials()[1];
            case (roll <= 7): return Armors.getSpecials()[5];
            case (roll <= 13): return Armors.getSpecials()[6];
            case (roll <= 28): return Armors.getSpecials()[7];
            case (roll <= 33): return Armors.getSpecials()[8];
            case (roll <= 35): return Armors.getSpecials()[9];
            case (roll <= 40): return Armors.getSpecials()[10];
            case (roll <= 42): return Armors.getSpecials()[11];
            case (roll <= 43): return Armors.getSpecials()[12];
            case (roll <= 48): return Armors.getSpecials()[13];
            case (roll <= 58): return Armors.getSpecials()[14];
            case (roll <= 83): return Armors.getSpecials()[15];
            case (roll <= 88): return Armors.getSpecials()[16];
            case (roll <= 89): return Armors.getSpecials()[17];
            case (roll <= 90): return Armors.getSpecials()[18];
            case (roll <= 92): return Armors.getSpecials()[19];
            case (roll <= 94): return Armors.getSpecials()[20];
            case (roll <= 99): return Armors.getSpecials()[21];
            case (roll <= 100): /*roll twice*/ break;
        }
    }
    if(['minor','medium','major'].indexOf(type) >= 0 && roll == 100) {
        var special1 = Armors.getSpecial(type);
        var special2 = Armors.getSpecial(type);
        //there exists a possibility of getting the same bonus or a bonus over +10
        //this is hilarious and has not been fixed
        return {'name': special1.name + ' ' + special2.name,
                'bonus': special1.bonus + special2.bonus,
                'cost': special1.cost + special2.cost
            };
    }
};