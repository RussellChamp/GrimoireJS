/*global _:false */
/*global Spells:true */
'use strict';
var Scrolls = {};
Scrolls.cost = [12.5, 25, 150, 375, 700, 1125, 1650, 2275, 3000, 3825];

Scrolls.getLevelScroll = function(level, type) {
    if(level < 0 || level > 9) return;
    if(type === undefined) {
        type = _.random(0,1) ? 'arcane' : 'divine';
    }
    var spell = Spells.getLevelSpell(level, type);
    return {'name': 'Scroll of ' + spell.name, 
            'description': '(' + type + ', spell level ' + level + ', caster level ' + _.max([1, (level*2-1)]) + ')',
            'cost': Scrolls.cost[level],
            };
};

Scrolls.getScroll = function(type) {
    var roll = _.random(1,100);
    if(type == 'minor') {
        switch(true) {
            case (roll <= 5): return Scrolls.getLevelScroll(0);
            case (roll <= 50): return Scrolls.getLevelScroll(1);
            case (roll <= 95): return Scrolls.getLevelScroll(2);
            case (roll <= 100): return Scrolls.getLevelScroll(3);
        }
    }
    else if(type == 'medium') {
        switch(true) {
            case (roll <= 5): return Scrolls.getLevelScroll(2);
            case (roll <= 65): return Scrolls.getLevelScroll(3);
            case (roll <= 95): return Scrolls.getLevelScroll(4);
            case (roll <= 100): return Scrolls.getLevelScroll(5);
        }
    }
    else if(type == 'major') {
        switch(true) {
            case (roll <= 5): return Scrolls.getLevelScroll(4);
            case (roll <= 50): return Scrolls.getLevelScroll(5);
            case (roll <= 70): return Scrolls.getLevelScroll(6);
            case (roll <= 85): return Scrolls.getLevelScroll(7);
            case (roll <= 95): return Scrolls.getLevelScroll(8);
            case (roll <= 100): return Scrolls.getLevelScroll(9);
        }
    }
};