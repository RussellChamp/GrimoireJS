/*global _:false, console:true */
/*global Intelligence:true */
'use strict';
var Rods = {};
Rods.getAllRods = function() {
    return [
        {'name': 'Core Rule Book',
        'shortName': 'CRB',
        'baseUrl': 'http://paizo.com/pathfinderRPG/prd/magicItems/rods.html',
        'count': {'medium': 17, 'major': 29},
        'items': [
        {'name': 'Rod of Metamagic, Enlarge, lesser', 'cost': 3000, 'url': '#metamagic-enlarge'},
        {'name': 'Rod of Metamagic, Extend, lesser', 'cost': 3000, 'url': ''},
        {'name': 'Rod of Metamagic, Silent, lesser', 'cost': 3000, 'url': ''},
        {'name': 'Rod of Immovable', 'cost': 5000, 'url': ''},
        {'name': 'Rod of Metamagic, Empower, lesser', 'cost': 9000, 'url': ''},
        {'name': 'Rod of Metal and mineral detection', 'cost': 10500, 'url': ''},
        {'name': 'Rod of Cancellation', 'cost': 11000, 'url': ''},
        {'name': 'Rod of Metamagic, Enlarge', 'cost': 11000, 'url': ''},
        {'name': 'Rod of Metamagic, Extend', 'cost': 11000, 'url': ''},
        {'name': 'Rod of Metamagic, Silent', 'cost': 11000, 'url': ''},
        {'name': 'Rod of Wonder', 'cost': 12000, 'url': ''},
        {'name': 'Rod of Python', 'cost': 13000, 'url': ''},
        {'name': 'Rod of Metamagic, Maximize, lesser', 'cost': 14000, 'url': ''},
        {'name': 'Rod of Flame extinguishing', 'cost': 15000, 'url': ''},
        {'name': 'Rod of Viper', 'cost': 19000, 'url': ''},
        {'name': 'Rod of Enemy detection', 'cost': 23500, 'url': ''},
        {'name': 'Rod of Metamagic, Enlarge, greater', 'cost': 24500, 'url': ''},
        {'name': 'Rod of Metamagic, Extend, greater', 'cost': 24500, 'url': ''},
        {'name': 'Rod of Metamagic, Silent, greater', 'cost': 24500, 'url': ''},
        {'name': 'Rod of Splendor', 'cost': 25000, 'url': ''},
        {'name': 'Rod of Withering', 'cost': 25000, 'url': ''},
        {'name': 'Rod of Metamagic, Empower', 'cost': 32500, 'url': ''},
        {'name': 'Rod of Thunder and lightning', 'cost': 33000, 'url': ''},
        {'name': 'Rod of Metamagic, Quicken, lesser', 'cost': 35000, 'url': ''},
        {'name': 'Rod of Negation', 'cost': 37000, 'url': ''},
        {'name': 'Rod of Absorption', 'cost': 50000, 'url': ''},
        {'name': 'Rod of Flailing', 'cost': 50000, 'url': ''},
        {'name': 'Rod of Metamagic, Maximize', 'cost': 54000, 'url': ''},
        {'name': 'Rod of Rulership', 'cost': 60000, 'url': ''},
        {'name': 'Rod of Security', 'cost': 61000, 'url': ''},
        {'name': 'Rod of Lordly might', 'cost': 70000, 'url': ''},
        {'name': 'Rod of Metamagic, Empower, greater', 'cost': 73000, 'url': ''},
        {'name': 'Rod of Metamagic, Quicken', 'cost': 75500, 'url': ''},
        {'name': 'Rod of Alertness', 'cost': 85000, 'url': ''},
        {'name': 'Rod of Metamagic, Maximize, greater', 'cost': 121500, 'url': ''},
        {'name': 'Rod of Metamagic, Quicken, greater', 'cost': 170000, 'url': ''},
    ]},
    {'name': 'Advanced Player\'s Guide',
    'shortName': 'APG',
    'baseUrl': 'http://paizo.com/pathfinderRPG/prd/advanced/magicItems/rods.html',
    'count': {'medium': 25, 'major': 28},
    'items': [
        {'name': 'Rod of Metamagic, merciful, lesser', 'cost': 1500, 'url': '#metamagic,-merciful'},
        {'name': 'Rod of Metamagic, bouncing, lesser', 'cost': 3000, 'url': ''},
        {'name': 'Rod of Metamagic, disruptive, lesser', 'cost': 3000, 'url': ''},
        {'name': 'Rod of Metamagic, ectoplasmic, lesser', 'cost': 3000, 'url': ''},
        {'name': 'Rod of Metamagic, elemental, lesser', 'cost': 3000, 'url': ''},
        {'name': 'Rod of Metamagic, focused, lesser', 'cost': 3000, 'url': ''},
        {'name': 'Rod of Metamagic, intensified, lesser', 'cost': 3000, 'url': ''},
        {'name': 'Rod of Metamagic, lingering, lesser', 'cost': 3000, 'url': ''},
        {'name': 'Rod of Metamagic, reach, lesser', 'cost': 3000, 'url': ''},
        {'name': 'Rod of Metamagic, selective, lesser', 'cost': 3000, 'url': ''},
        {'name': 'Rod of Metamagic, merciful', 'cost': 5500, 'url': ''},
        {'name': 'Rod of Metamagic, persistent, lesser', 'cost': 9000, 'url': ''},
        {'name': 'Rod of Metamagic, sickening, lesser', 'cost': 9000, 'url': ''},
        {'name': 'Rod of Metamagic, thundering, lesser', 'cost': 9000, 'url': ''},
        {'name': 'Rod of Metamagic, bouncing', 'cost': 11000, 'url': ''},
        {'name': 'Rod of Metamagic, disruptive', 'cost': 11000, 'url': ''},
        {'name': 'Rod of Metamagic, ectoplasmic', 'cost': 11000, 'url': ''},
        {'name': 'Rod of Metamagic, elemental', 'cost': 11000, 'url': ''},
        {'name': 'Rod of Metamagic, focused', 'cost': 11000, 'url': ''},
        {'name': 'Rod of Metamagic, intensified', 'cost': 11000, 'url': ''},
        {'name': 'Rod of Metamagic, lingering', 'cost': 11000, 'url': ''},
        {'name': 'Rod of Metamagic, reach', 'cost': 11000, 'url': ''},
        {'name': 'Rod of Metamagic, selective', 'cost': 11000, 'url': ''},
        {'name': 'Rod of Metamagic, merciful, greater', 'cost': 12250, 'url': ''},
        {'name': 'Rod of Metamagic, dazing, lesser', 'cost': 14000, 'url': ''},
        {'name': 'Rod of Metamagic, bouncing, greater', 'cost': 24500, 'url': ''},
        {'name': 'Rod of Metamagic, disruptive, greater', 'cost': 24500, 'url': ''},
        {'name': 'Rod of Metamagic, ectoplasmic, greater', 'cost': 24500, 'url': ''},
        {'name': 'Rod of Metamagic, elemental, greater', 'cost': 24500, 'url': ''},
        {'name': 'Rod of Metamagic, focused, greater', 'cost': 24500, 'url': ''},
        {'name': 'Rod of Metamagic, intensified, greater', 'cost': 24500, 'url': ''},
        {'name': 'Rod of Metamagic, lingering, greater', 'cost': 24500, 'url': ''},
        {'name': 'Rod of Metamagic, reach, greater', 'cost': 24500, 'url': ''},
        {'name': 'Rod of Metamagic, selective, greater', 'cost': 24500, 'url': ''},
        {'name': 'Rod of Metamagic, persistent', 'cost': 32500, 'url': ''},
        {'name': 'Rod of Metamagic, sickening', 'cost': 32500, 'url': ''},
        {'name': 'Rod of Metamagic, thundering', 'cost': 32500, 'url': ''},
        {'name': 'Rod of Metamagic, dazing', 'cost': 54000, 'url': ''},
        {'name': 'Rod of Metamagic, persistent, greater', 'cost': 73000, 'url': ''},
        {'name': 'Rod of Metamagic, sickening, greater', 'cost': 73000, 'url': ''},
        {'name': 'Rod of Metamagic, thundering, greater', 'cost': 73000, 'url': ''},
        {'name': 'Rod of Metamagic, dazing, greater', 'cost': 121500, 'url': ''},
    ]}
    ];
};

Rods.getRod = function(type, source) {
    var roll = _.random(1,100);
    var rod = {};
    if(source === undefined) {
        source = 'CRB';
    }

    if(type == 'minor') {
        console.log('Error: There are no minor rods');
        return;
    }

    var sourceRods = _.findWhere(Rods.getAllRods(), function(s) {
            return s.shortName == source.toUpperCase();
        }).items;

    if(source.toUpperCase() == 'CRB')
    {
        if(type == 'medium') {
            switch(true) {
                case (roll <= 7): rod = sourceRods[0]; break;
                case (roll <= 14): rod = sourceRods[1]; break;
                case (roll <= 21): rod = sourceRods[2]; break;
                case (roll <= 28): rod = sourceRods[3]; break;
                case (roll <= 35): rod = sourceRods[4]; break;
                case (roll <= 42): rod = sourceRods[5]; break;
                case (roll <= 53): rod = sourceRods[6]; break;
                case (roll <= 57): rod = sourceRods[7]; break;
                case (roll <= 61): rod = sourceRods[8]; break;
                case (roll <= 65): rod = sourceRods[9]; break;
                case (roll <= 71): rod = sourceRods[10]; break;
                case (roll <= 79): rod = sourceRods[11]; break;
                case (roll <= 83): rod = sourceRods[12]; break;
                case (roll <= 89): rod = sourceRods[13]; break;
                case (roll <= 97): rod = sourceRods[14]; break;
                case (roll <= 99): rod = sourceRods[21]; break;
                case (roll <= 100): rod = sourceRods[23]; break;
            }
        }
        else if(type == 'major') {
            switch(true) {
                case (roll <= 4): rod = sourceRods[6]; break;
                case (roll <= 6): rod = sourceRods[7]; break;
                case (roll <= 8): rod = sourceRods[8]; break;
                case (roll <= 10): rod = sourceRods[9]; break;
                case (roll <= 14): rod = sourceRods[10]; break;
                case (roll <= 19): rod = sourceRods[11]; break;
                case (roll <= 21): rod = sourceRods[13]; break;
                case (roll <= 25): rod = sourceRods[14]; break;
                case (roll <= 30): rod = sourceRods[15]; break;
                case (roll <= 36): rod = sourceRods[16]; break;
                case (roll <= 42): rod = sourceRods[17]; break;
                case (roll <= 48): rod = sourceRods[18]; break;
                case (roll <= 53): rod = sourceRods[19]; break;
                case (roll <= 58): rod = sourceRods[20]; break;
                case (roll <= 64): rod = sourceRods[21]; break;
                case (roll <= 69): rod = sourceRods[22]; break;
                case (roll <= 73): rod = sourceRods[23]; break;
                case (roll <= 77): rod = sourceRods[24]; break;
                case (roll <= 80): rod = sourceRods[25]; break;
                case (roll <= 84): rod = sourceRods[26]; break;
                case (roll <= 86): rod = sourceRods[27]; break;
                case (roll <= 88): rod = sourceRods[28]; break;
                case (roll <= 90): rod = sourceRods[29]; break;
                case (roll <= 92): rod = sourceRods[30]; break;
                case (roll <= 94): rod = sourceRods[31]; break;
                case (roll <= 96): rod = sourceRods[32]; break;
                case (roll <= 98): rod = sourceRods[33]; break;
                case (roll <= 99): rod = sourceRods[34]; break;
                case (roll <= 100): rod = sourceRods[35]; break;
            }
        }
    }
    else if(source.toUpperCase() == 'APG') {
        if(type == 'medium') {
            switch(true) {
                case (roll <= 3): rod = sourceRods[0]; break;
                case (roll <= 6): rod = sourceRods[1]; break;
                case (roll <= 11): rod = sourceRods[2]; break;
                case (roll <= 21): rod = sourceRods[3]; break;
                case (roll <= 27): rod = sourceRods[4]; break;
                case (roll <= 33): rod = sourceRods[5]; break;
                case (roll <= 36): rod = sourceRods[6]; break;
                case (roll <= 39): rod = sourceRods[7]; break;
                case (roll <= 43): rod = sourceRods[8]; break;
                case (roll <= 53): rod = sourceRods[9]; break;
                case (roll <= 55): rod = sourceRods[10]; break;
                case (roll <= 58): rod = sourceRods[11]; break;
                case (roll <= 62): rod = sourceRods[12]; break;
                case (roll <= 66): rod = sourceRods[13]; break;
                case (roll <= 70): rod = sourceRods[14]; break;
                case (roll <= 74): rod = sourceRods[15]; break;
                case (roll <= 80): rod = sourceRods[16]; break;
                case (roll <= 83): rod = sourceRods[17]; break;
                case (roll <= 86): rod = sourceRods[18]; break;
                case (roll <= 88): rod = sourceRods[19]; break;
                case (roll <= 90): rod = sourceRods[20]; break;
                case (roll <= 93): rod = sourceRods[21]; break;
                case (roll <= 97): rod = sourceRods[22]; break;
                case (roll <= 98): rod = sourceRods[23]; break;
                case (roll <= 100): rod = sourceRods[24]; break;
            }
        }
        else if(type == 'major') {
            switch(true) {
                case (roll <= 3): rod = sourceRods[14]; break;
                case (roll <= 9): rod = sourceRods[15]; break;
                case (roll <= 20): rod = sourceRods[16]; break;
                case (roll <= 28): rod = sourceRods[17]; break;
                case (roll <= 36): rod = sourceRods[18]; break;
                case (roll <= 39): rod = sourceRods[19]; break;
                case (roll <= 43): rod = sourceRods[20]; break;
                case (roll <= 46): rod = sourceRods[21]; break;
                case (roll <= 54): rod = sourceRods[22]; break;
                case (roll <= 56): rod = sourceRods[23]; break;
                case (roll <= 58): rod = sourceRods[24]; break;
                case (roll <= 60): rod = sourceRods[25]; break;
                case (roll <= 63): rod = sourceRods[26]; break;
                case (roll <= 69): rod = sourceRods[27]; break;
                case (roll <= 73): rod = sourceRods[28]; break;
                case (roll <= 77): rod = sourceRods[29]; break;
                case (roll <= 79): rod = sourceRods[30]; break;
                case (roll <= 80): rod = sourceRods[31]; break;
                case (roll <= 82): rod = sourceRods[32]; break;
                case (roll <= 86): rod = sourceRods[33]; break;
                case (roll <= 89): rod = sourceRods[34]; break;
                case (roll <= 91): rod = sourceRods[35]; break;
                case (roll <= 93): rod = sourceRods[36]; break;
                case (roll <= 95): rod = sourceRods[37]; break;
                case (roll <= 97): rod = sourceRods[38]; break;
                case (roll <= 98): rod = sourceRods[39]; break;
                case (roll <= 99): rod = sourceRods[40]; break;
                case (roll <= 100): rod = sourceRods[41]; break;
            }
        }
    }
    if(rod) {
        roll = _.random(1,100);
        if(roll == 1) {
            rod.name = 'Intelligent ' + rod.name;
            rod.intelligence = Intelligence.getItemIntelligence(rod.cost);
        }
        else if(roll <= 30) {
            rod.name += ' (with a clue as to its purpose)';
        }
        return rod;
    }
};