/*global _:false */
'use strict';

//TODO: Program the "Roll twice" logic

var Shields = {};
Shields.specificBaseUrl = 'http://paizo.com/pathfinderRPG/prd/magicItems/armor.html';
Shields.getSpecifics = function() {
    return [
        {'name': 'Darkwood buckler', 'bonus': 0, 'cost': 203, 'url': '#darkwood-buckler'},
        {'name': 'Darkwood shield', 'bonus': 0, 'cost': 257, 'url': ''},
        {'name': 'Mithral heavy shield', 'bonus': 0, 'cost': 1020, 'url': ''},
        {'name': 'Caster\'s shield', 'bonus': 0, 'cost': 3153, 'url': ''},
        {'name': 'Spined shield', 'bonus': 0, 'cost': 5580, 'url': ''},
        {'name': 'Lion\'s shield', 'bonus': 0, 'cost': 9170, 'url': ''},
        {'name': 'Winged shield', 'bonus': 0, 'cost': 17257, 'url': ''},
        {'name': 'Absorbing shield', 'bonus': 0, 'cost': 5017, 'url': ''}
        ];
};

Shields.getSpecific = function(type) {
    var roll = _.random(1,100);
    var shield = {};
    if(type == 'minor') {
        switch(true) {
            case (roll <= 30): shield = Shields.getSpecifics()[0]; break;
            case (roll <= 80): shield = Shields.getSpecifics()[1]; break;
            case (roll <= 95): shield = Shields.getSpecifics()[2]; break;
            case (roll <= 100): shield = Shields.getSpecifics()[3]; break;
        }
    }
    else if(type == 'medium') {
        switch(true) {
            case (roll <= 20): shield = Shields.getSpecifics()[0]; break;
            case (roll <= 45): shield = Shields.getSpecifics()[1]; break;
            case (roll <= 70): shield = Shields.getSpecifics()[2]; break;
            case (roll <= 85): shield = Shields.getSpecifics()[3]; break;
            case (roll <= 90): shield = Shields.getSpecifics()[4]; break;
            case (roll <= 95): shield = Shields.getSpecifics()[5]; break;
            case (roll <= 100): shield = Shields.getSpecifics()[6]; break;
        }
    }
    else if(type == 'major') {
        switch(true) {
            case (roll <= 20): shield = Shields.getSpecifics()[3]; break;
            case (roll <= 40): shield = Shields.getSpecifics()[4]; break;
            case (roll <= 62): shield = Shields.getSpecifics()[5]; break;
            case (roll <= 90): shield = Shields.getSpecifics()[6]; break;
            case (roll <= 100): shield = Shields.getSpecifics()[7]; break;
        }
    }
    return shield;
};

Shields.getShields = function() {
    //5 possible roll'able shields. Specific type of shield is left up to DM
    return [
        {'name': '+1 shield', 'bonus': 1, 'cost': 1000},
        {'name': '+2 shield', 'bonus': 2, 'cost': 4000},
        {'name': '+3 shield', 'bonus': 3, 'cost': 9000},
        {'name': '+4 shield', 'bonus': 4, 'cost': 16000},
        {'name': '+5 shield', 'bonus': 5, 'cost': 25000},
        {'name': '+6 shield', 'bonus': 6, 'cost': 36000},
        {'name': '+7 shield', 'bonus': 7, 'cost': 49000},
        {'name': '+8 shield', 'bonus': 8, 'cost': 64000},
        {'name': '+9 shield', 'bonus': 9, 'cost': 81000},
        {'name': '+10 shield', 'bonus': 10,'cost': 10000}
    ];
};

Shields.getSpecials = function() {
    return [
        {'name': 'Arrow catching', 'bonus': 1, 'cost': 0},
        {'name': 'Bashing', 'bonus': 1, 'cost': 0},
        {'name': 'Blinding', 'bonus': 1, 'cost': 0},
        {'name': 'Light Fortification', 'bonus': 1, 'cost': 0},
        {'name': 'Arrow deflection', 'bonus': 2, 'cost': 0},
        {'name': 'Animated', 'bonus': 2, 'cost': 0},
        {'name': 'Spell resistance (13)', 'bonus': 2, 'cost': 0},
        {'name': 'Energy resistance', 'bonus': 0, 'cost': 18000},
        {'name': 'Ghost touch', 'bonus': 3, 'cost': 0},
        {'name': 'Moderate Fortification', 'bonus': 3, 'cost': 0},
        {'name': 'Spell resistance (15)', 'bonus': 3, 'cost': 0},
        {'name': 'Wild', 'bonus': 3, 'cost': 0},
        {'name': 'Improved Energy resistance', 'bonus': 0, 'cost': 42000},
        {'name': 'Spell resistance (17)', 'bonus': 4, 'cost': 0},
        {'name': 'Undead controlling', 'bonus': 0, 'cost': 49000},
        {'name': 'Fortification, heavy', 'bonus': 5, 'cost': 0},
        {'name': 'Reflecting', 'bonus': 5, 'cost': 0},
        {'name': 'Spell resistance (19)', 'bonus': 5, 'cost': 0},
        {'name': 'Energy resistance, greater', 'bonus': 0, 'cost': 6600}
        ];
};

Shields.getSpecial = function(type) {
    var roll = _.random(1,100);
    if(type == 'minor') {
        switch(true) {
            case (roll <= 20): return Shields.getSpecials()[0];
            case (roll <= 40): return Shields.getSpecials()[1];
            case (roll <= 50): return Shields.getSpecials()[2];
            case (roll <= 75): return Shields.getSpecials()[3];
            case (roll <= 92): return Shields.getSpecials()[4];
            case (roll <= 97): return Shields.getSpecials()[5];
            case (roll <= 99): return Shields.getSpecials()[6];
            case (roll <= 100): /*roll twice*/ break;
        }
    }
    else if(type == 'medium') {
        switch(true) {
            case (roll <= 10): return Shields.getSpecials()[0];
            case (roll <= 20): return Shields.getSpecials()[1];
            case (roll <= 25): return Shields.getSpecials()[2];
            case (roll <= 40): return Shields.getSpecials()[3];
            case (roll <= 50): return Shields.getSpecials()[4];
            case (roll <= 57): return Shields.getSpecials()[5];
            case (roll <= 59): return Shields.getSpecials()[6];
            case (roll <= 79): return Shields.getSpecials()[7];
            case (roll <= 85): return Shields.getSpecials()[8];
            case (roll <= 95): return Shields.getSpecials()[9];
            case (roll <= 98): return Shields.getSpecials()[10];
            case (roll <= 99): return Shields.getSpecials()[11];
            case (roll <= 100): /*roll twice*/ break;
        }
    }
    else if(type == 'major') {
        switch(true) {
            case (roll <= 5): return Shields.getSpecials()[0];
            case (roll <= 8): return Shields.getSpecials()[1];
            case (roll <= 10): return Shields.getSpecials()[2];
            case (roll <= 15): return Shields.getSpecials()[3];
            case (roll <= 20): return Shields.getSpecials()[4];
            case (roll <= 25): return Shields.getSpecials()[5];
            case (roll <= 41): return Shields.getSpecials()[7];
            case (roll <= 46): return Shields.getSpecials()[8];
            case (roll <= 56): return Shields.getSpecials()[9];
            case (roll <= 58): return Shields.getSpecials()[10];
            case (roll <= 59): return Shields.getSpecials()[11];
            case (roll <= 84): return Shields.getSpecials()[12];
            case (roll <= 86): return Shields.getSpecials()[13];
            case (roll <= 87): return Shields.getSpecials()[14];
            case (roll <= 91): return Shields.getSpecials()[15];
            case (roll <= 93): return Shields.getSpecials()[16];
            case (roll <= 94): return Shields.getSpecials()[17];
            case (roll <= 99): return Shields.getSpecials()[18];
            case (roll <= 100): /*roll twice*/ break;
        }
    }
    if(['minor','medium','major'].indexOf(type) >= 0 && roll == 100) {
        var special1 = Shields.getSpecial(type);
        var special2 = Shields.getSpecial(type);
        //there exists a possibility of getting the same bonus or a bonus over +10
        //this is hilarious and has not been fixed
        return {'name': special1.name + ' ' + special2.name,
                'bonus': special1.bonus + special2.bonus,
                'cost': special1.cost + special2.cost
            };
    }
};