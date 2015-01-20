/*global _:false, console: true */
'use strict';
var Staves = {};
Staves.baseUrl = 'http://paizo.com/pathfinderRPG/prd/magicItems/staves.html';
Staves.getStaves = function() {
    return [
        {'name': 'Staff of Charming', 'cost': 17600, 'url': '#staff-of-charming'},
        {'name': 'Staff of Fire', 'cost': 18950, 'url': ''},
        {'name': 'Staff of Swarming Insects', 'cost': 22800, 'url': ''},
        {'name': 'Staff of Size Alteration', 'cost': 26150, 'url': ''},
        {'name': 'Staff of Healing', 'cost': 29600, 'url': ''},
        {'name': 'Staff of Frost', 'cost': 41400, 'url': ''},
        {'name': 'Staff of Illumination', 'cost': 51500, 'url': ''},
        {'name': 'Staff of Defense', 'cost': 62000, 'url': ''},
        {'name': 'Staff of Abjuration', 'cost': 82000, 'url': ''},
        {'name': 'Staff of Conjuration', 'cost': 82000, 'url': ''},
        {'name': 'Staff of Divination', 'cost': 82000, 'url': ''},
        {'name': 'Staff of Enchantment', 'cost': 82000, 'url': ''},
        {'name': 'Staff of Evocation', 'cost': 82000, 'url': ''},
        {'name': 'Staff of Illusion', 'cost': 82000, 'url': ''},
        {'name': 'Staff of Necromancy', 'cost': 82000, 'url': ''},
        {'name': 'Staff of Transmutation', 'cost': 82000, 'url': ''},
        {'name': 'Staff of Earth and Stone', 'cost': 85800, 'url': ''},
        {'name': 'Staff of Woodlands', 'cost': 100400, 'url': ''},
        {'name': 'Staff of Life', 'cost': 109400, 'url': ''},
        {'name': 'Staff of Passage', 'cost': 206900, 'url': ''},
        {'name': 'Staff of Power', 'cost': 235000, 'url': ''},
    ];
};

Staves.getStaff = function(type) {
    var roll = _.random(1,100);
    var staff = {};
    if(type == 'minor') {
        console.log('Error: There are no minor staves');
        return;
    }
    else if(type == 'medium') {
        switch(true) {
            case (roll <= 15): staff = Staves.getStaves()[0]; break;
            case (roll <= 30): staff = Staves.getStaves()[1]; break;
            case (roll <= 40): staff = Staves.getStaves()[2]; break;
            case (roll <= 55): staff = Staves.getStaves()[3]; break;
            case (roll <= 75): staff = Staves.getStaves()[4]; break;
            case (roll <= 90): staff = Staves.getStaves()[5]; break;
            case (roll <= 95): staff = Staves.getStaves()[6]; break;
            case (roll <= 100): staff = Staves.getStaves()[7]; break;
        }
    }
    else if(type == 'major') {
        switch(true) {
            case (roll <= 3): staff = Staves.getStaves()[0]; break;
            case (roll <= 9): staff = Staves.getStaves()[1]; break;
            case (roll <= 11): staff = Staves.getStaves()[2]; break;
            case (roll <= 13): staff = Staves.getStaves()[3]; break;
            case (roll <= 19): staff = Staves.getStaves()[4]; break;
            case (roll <= 24): staff = Staves.getStaves()[5]; break;
            case (roll <= 31): staff = Staves.getStaves()[6]; break;
            case (roll <= 38): staff = Staves.getStaves()[7]; break;
            case (roll <= 45): staff = Staves.getStaves()[8]; break;
            case (roll <= 50): staff = Staves.getStaves()[9]; break;
            case (roll <= 55): staff = Staves.getStaves()[10]; break;
            case (roll <= 60): staff = Staves.getStaves()[11]; break;
            case (roll <= 65): staff = Staves.getStaves()[12]; break;
            case (roll <= 70): staff = Staves.getStaves()[13]; break;
            case (roll <= 75): staff = Staves.getStaves()[14]; break;
            case (roll <= 80): staff = Staves.getStaves()[15]; break;
            case (roll <= 85): staff = Staves.getStaves()[16]; break;
            case (roll <= 90): staff = Staves.getStaves()[17]; break;
            case (roll <= 95): staff = Staves.getStaves()[18]; break;
            case (roll <= 98): staff = Staves.getStaves()[19]; break;
            case (roll <= 100): staff = Staves.getStaves()[20]; break;

        }
    }
    if(_.random(1,100) <= 30) {
        staff.name += ' (with a clue as to its purpose)';
    }
    return staff;
};