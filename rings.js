/*global _:false */
'use strict';
var Rings = {};
Rings.getRingsAll = function() {
  return [
    {
    'name': 'Core Rule Book',
    'shortName': 'CRB',
    'baseUrl': 'http://paizo.com/pathfinderRPG/prd/magicItems/rings.html',
    'items' : [
        { 'name' : 'Ring of Protection +1', 'cost' : 2000, 'url' : '#_ring-of-protection' },
        { 'name' : 'Ring of Feather falling', 'cost' : 2200, 'url' : '' },
        { 'name' : 'Ring of Sustenance', 'cost' : 2500, 'url' : '' },
        { 'name' : 'Ring of Climbing', 'cost' : 2500, 'url' : '' },
        { 'name' : 'Ring of Jumping', 'cost' : 2500, 'url' : '' },
        { 'name' : 'Ring of Swimming', 'cost' : 2500, 'url' : '' },
        { 'name' : 'Ring of Counterspells', 'cost' : 400, 'url' : '' },
        { 'name' : 'Ring of Mind shielding', 'cost' : 800, 'url' : '' },
        { 'name' : 'Ring of Protection +2', 'cost' : 8000, 'url' : '' },
        { 'name' : 'Ring of Force shield', 'cost' : 8500, 'url' : '' },
        { 'name' : 'Ring of the Ram', 'cost' : 8600, 'url' : '' },
        { 'name' : 'Ring of Climbing, improved', 'cost' : 1000, 'url' : '' },
        { 'name' : 'Ring of Jumping, improved', 'cost' : 1000, 'url' : '' },
        { 'name' : 'Ring of Swimming, improved', 'cost' : 1000, 'url' : '' },
        { 'name' : 'Ring of Animal friendship', 'cost' : 10800, 'url' : '' },
        { 'name' : 'Ring of Energy resistance, minor', 'cost' : 1200, 'url' : '' },
        { 'name' : 'Ring of Chameleon power', 'cost' : 12700, 'url' : '' },
        { 'name' : 'Ring of Water walking', 'cost' : 1500, 'url' : '' },
        { 'name' : 'Ring of Protection +3', 'cost' : 1800, 'url' : '' },
        { 'name' : 'Ring of Spell storing, minor', 'cost' : 1800, 'url' : '' },
        { 'name' : 'Ring of Invisibility', 'cost' : 20000, 'url' : '' },
        { 'name' : 'Ring of Wizardry (I)', 'cost' : 2000, 'url' : '' },
        { 'name' : 'Ring of Evasion', 'cost' : 2500, 'url' : '' },
        { 'name' : 'Ring of X-ray vision', 'cost' : 2500, 'url' : '' },
        { 'name' : 'Ring of Blinking', 'cost' : 2700, 'url' : '' },
        { 'name' : 'Ring of Energy resistance, major', 'cost' : 2800, 'url' : '' },
        { 'name' : 'Ring of Protection +4', 'cost' : 3200, 'url' : '' },
        { 'name' : 'Ring of Wizardry (II)', 'cost' : 4000, 'url' : '' },
        { 'name' : 'Ring of Freedom of movement', 'cost' : 4000, 'url' : '' },
        { 'name' : 'Ring of Energy resistance, greater', 'cost' : 4400, 'url' : '' },
        { 'name' : 'Ring of Friend shield (pair)', 'cost' : 5000, 'url' : '' },
        { 'name' : 'Ring of Protection +5', 'cost' : 5000, 'url' : '' },
        { 'name' : 'Ring of Shooting stars', 'cost' : 5000, 'url' : '' },
        { 'name' : 'Ring of Spell storing', 'cost' : 5000, 'url' : '' },
        { 'name' : 'Ring of Wizardry (III)', 'cost' : 7000, 'url' : '' },
        { 'name' : 'Ring of Telekinesis', 'cost' : 7500, 'url' : '' },
        { 'name' : 'Ring of Regeneration', 'cost' : 9000, 'url' : '' },
        { 'name' : 'Ring of Spell turning', 'cost' : 10000, 'url' : '' },
        { 'name' : 'Ring of Wizardry (IV)', 'cost' : 10000, 'url' : '' },
        { 'name' : 'Ring of Three wishes', 'cost' : 12000, 'url' : '' },
        { 'name' : 'Ring of Djinni calling', 'cost' : 12500, 'url' : '' },
        { 'name' : 'Ring of Elemental command (air)', 'cost' : 20000, 'url' : '' },
        { 'name' : 'Ring of Elemental command (earth)', 'cost' : 20000, 'url' : '' },
        { 'name' : 'Ring of Elemental command (fire)', 'cost' : 20000, 'url' : '' },
        { 'name' : 'Ring of Elemental command (water)', 'cost' : 20000, 'url' : '' },
        { 'name' : 'Ring of Spell storing, major', 'cost' : 2000, 'url' : '' },
        ]
    },
    {
        'name': 'Advanced Player\'s Guide',
        'shortName': 'APG',
        'baseUrl': 'http://paizo.com/pathfinderRPG/prd/advanced/magicItems/rings.html',
        'items' : [
        { 'name' : 'Dungeon ring, prisoner\'s', 'cost': 250, 'url': '#dungeon-ring'},
        { 'name' : 'Arcane signets', 'cost': 1000, 'url': '' },
        { 'name' : 'Maniacal Devices', 'cost': 5000, 'url': '' },
        { 'name' : 'Delayed doom (1 stone)', 'cost': 5000, 'url': '' },
        { 'name' : 'Forcefangs', 'cost': 8000, 'url': '' },
        { 'name' : 'Revelation, lesser', 'cost': 10000, 'url': '' },
        { 'name' : 'Delayed doom (2 stones)', 'cost': 10000, 'url': '' },
        { 'name' : 'Delayed doom (3 stones)', 'cost': 15000, 'url': '' },
        { 'name' : 'Retribution', 'cost': 15000, 'url': '' },
        { 'name' : 'Dungeon ring, jailer\'s', 'cost': 16000, 'url': '' },
        { 'name' : 'Revelation, greater', 'cost': 16000, 'url': '' },
        { 'name' : 'Delayed doom (4 stones)', 'cost': 20000, 'url': '' },
        { 'name' : 'Revelation, superior', 'cost': 24000, 'url': '' },
        { 'name' : 'Delayed doom (5 stones)', 'cost': 25000, 'url': '' },
        { 'name' : 'Delayed doom (6 stones)', 'cost': 30000, 'url': '' },
        { 'name' : 'Delayed doom (7 stones)', 'cost': 35000, 'url': '' },
        { 'name' : 'Delayed doom (8 stones)', 'cost': 40000, 'url': '' },
        { 'name' : 'Delayed doom (9 stones)', 'cost': 45000, 'url': '' },
        ]
    }
  ];
};

Rings.getRings = function() {
    return Rings.getRingsAll()[0].items;
};

Rings.getRing = function(type) {
    var roll = _.random(1,100);
    var ring = '';
    if(type == 'minor') {
        switch(true) {
            case (roll <= 18): ring = Rings.getRings()[0]; break;
            case (roll <= 28): ring = Rings.getRings()[1]; break;
            case (roll <= 36): ring = Rings.getRings()[2]; break;
            case (roll <= 44): ring = Rings.getRings()[3]; break;
            case (roll <= 52): ring = Rings.getRings()[4]; break;
            case (roll <= 60): ring = Rings.getRings()[5]; break;
            case (roll <= 70): ring = Rings.getRings()[6]; break;
            case (roll <= 75): ring = Rings.getRings()[7]; break;
            case (roll <= 80): ring = Rings.getRings()[8]; break;
            case (roll <= 85): ring = Rings.getRings()[9]; break;
            case (roll <= 90): ring = Rings.getRings()[10]; break;
            case (roll <= 93): ring = Rings.getRings()[14]; break;
            case (roll <= 96): ring = Rings.getRings()[15]; break;
            case (roll <= 98): ring = Rings.getRings()[16]; break;
            case (roll <= 100): ring = Rings.getRings()[17]; break;
        }
    }
    else if(type == 'medium') {
        switch(true) {
            case (roll <= 5): ring = Rings.getRings()[6]; break;
            case (roll <= 8): ring = Rings.getRings()[7]; break;
            case (roll <= 18): ring = Rings.getRings()[8]; break;
            case (roll <= 23): ring = Rings.getRings()[9]; break;
            case (roll <= 28): ring = Rings.getRings()[10]; break;
            case (roll <= 34): ring = Rings.getRings()[11]; break;
            case (roll <= 40): ring = Rings.getRings()[12]; break;
            case (roll <= 46): ring = Rings.getRings()[13]; break;
            case (roll <= 50): ring = Rings.getRings()[14]; break;
            case (roll <= 56): ring = Rings.getRings()[15]; break;
            case (roll <= 61): ring = Rings.getRings()[16]; break;
            case (roll <= 66): ring = Rings.getRings()[17]; break;
            case (roll <= 71): ring = Rings.getRings()[18]; break;
            case (roll <= 76): ring = Rings.getRings()[19]; break;
            case (roll <= 81): ring = Rings.getRings()[20]; break;
            case (roll <= 85): ring = Rings.getRings()[21]; break;
            case (roll <= 90): ring = Rings.getRings()[22]; break;
            case (roll <= 93): ring = Rings.getRings()[23]; break;
            case (roll <= 97): ring = Rings.getRings()[24]; break;
            case (roll <= 100): ring = Rings.getRings()[25]; break;
        }
    }
    else if(type == 'major') {
        switch(true) {
            case (roll <= 2): ring = Rings.getRings()[15]; break;
            case (roll <= 7): ring = Rings.getRings()[18]; break;
            case (roll <= 10): ring = Rings.getRings()[19]; break;
            case (roll <= 15): ring = Rings.getRings()[20]; break;
            case (roll <= 19): ring = Rings.getRings()[21]; break;
            case (roll <= 25): ring = Rings.getRings()[22]; break;
            case (roll <= 28): ring = Rings.getRings()[23]; break;
            case (roll <= 32): ring = Rings.getRings()[24]; break;
            case (roll <= 39): ring = Rings.getRings()[25]; break;
            case (roll <= 49): ring = Rings.getRings()[26]; break;
            case (roll <= 55): ring = Rings.getRings()[27]; break;
            case (roll <= 60): ring = Rings.getRings()[28]; break;
            case (roll <= 63): ring = Rings.getRings()[29]; break;
            case (roll <= 65): ring = Rings.getRings()[30]; break;
            case (roll <= 70): ring = Rings.getRings()[31]; break;
            case (roll <= 74): ring = Rings.getRings()[32]; break;
            case (roll <= 79): ring = Rings.getRings()[33]; break;
            case (roll <= 83): ring = Rings.getRings()[34]; break;
            case (roll <= 86): ring = Rings.getRings()[35]; break;
            case (roll <= 88): ring = Rings.getRings()[36]; break;
            case (roll <= 91): ring = Rings.getRings()[37]; break;
            case (roll <= 93): ring = Rings.getRings()[38]; break;
            case (roll == 94): ring = Rings.getRings()[39]; break;
            case (roll == 95): ring = Rings.getRings()[40]; break;
            case (roll == 96): ring = Rings.getRings()[41]; break;
            case (roll == 97): ring = Rings.getRings()[42]; break;
            case (roll == 98): ring = Rings.getRings()[43]; break;
            case (roll == 99): ring = Rings.getRings()[44]; break;
            case (roll == 100): ring = Rings.getRings()[45]; break;
        }
    }
    if(_.random(1,100) <= 30) {
        ring.name += ' (with a clue as to its purpose)';
    }
    return ring;
};
