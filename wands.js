/*global _:false */
/*global Spells:true */
'use strict';
var Wands = {};

Wands.cost = [375, 750, 4500, 11250, 21000];

Wands.getLevelWand = function(level) {
    if(level < 0 || level > 4) return;
    var spell = Spells.getLevelSpell(level, 'arcane');
    return {'name': 'Wand of ' + spell.name,
            'description': '(spell level ' + level + ', caster level ' + _.max([1, (level*2-1)]) + ', 50 charges)',
            'cost': Wands.cost[level]
        };
};

Wands.getWand = function(type) {
    var roll = _.random(1,100);
    if(type == 'minor') {
        switch(true) {
            case (roll <= 5): return Wands.getLevelWand(0);
            case (roll <= 60): return Wands.getLevelWand(1);
            case (roll <= 100): return Wands.getLevelWand(2);
        }
    }
    else if(type == 'medium') {
        switch(true) {
            case (roll <= 60): return Wands.getLevelWand(2);
            case (roll <= 100): return Wands.getLevelWand(3);
        }
    }
    else if(type == 'major') {
        switch(true) {
            case (roll <= 60): return Wands.getLevelWand(3);
            case (roll <= 100): return Wands.getLevelWand(4);
        }
    }
};