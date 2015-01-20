var Potions = {}

Potions.baseUrl = "http://paizo.com/pathfinderRPG/prd/spells/bleed.html";
//list of potion-able spells taken from
//http://paizo.com/threads/rzs2loj8?Alchemists-Lab-Potion-List-and-Questions
//TODO: implement url list later
Potions.getPotions = function() {
    return [
    /*level 0*/['Bleed','Touch of Fatigue','Resistance','Stabilize','Guidance'],
    /*level 1*/['Cure Light Wounds','Chill Touch','Doom','Endure Elements','Enlarge Person','Feather Fall','Hide from Animals',
        'Hide from Undead','Inflict Light Wounds','Jump','Mage Armor','Magic Fangs','Magic Weapon','Pass without Trace','Protection from Evil',
        'Reduce Person','Remove Fear','Sanctuary','Shield of Faith'],
    /*level 2*/['Aid','Barkskin','Bear\'s Endurance','Blindness/Deafness','Blur','Bull\'s Strength','Cat\'s Grace','Cure Moderate Wounds',
        'Darkvision','Delay Poison','Eagle\'s Splendor','Fox\'s Cunning','Heroism','Hold Person','Inflict Moderate Wounds','Invisibility',
        'Owl\'s Wisdom','Protection From Arrows','Rage','Remove Paralysis','Resist Energy','Restoration, Lesser','Tongues','Touch of Idiocy',
        'Undetectable Alignment'],
    /*level 3*/['Bestow Curse','Confusion','Contagion','Crushing Despair','Cure Serious Wounds','Deep Slumber','Dispel Magic','Displacement',
        'Gaseous Form','Good Hope','Haste','Inflict Serious Wounds','Keen Edge','Magic Circle against Evil','Magic Fang, Greater','Magic Weapon, Greater',
        'Magic Vestment','Neutralize Poison','Nondetection','Poison','Protection from Energy','Remove Blindness/Deafness','Remove Curse','Remove Disease',
        'Slow','Water Breathing','Water Walking']
    ];
};
Potions.cost = [25, 50, 300, 750];

Potions.getLevelPotion = function(level) {
    if(level < 0 || level > 3) return;
    var potion = _.sample(Potions.getPotions()[level]);
    return {"name": "Potion/Oil of " + potion,
            "description": "(spell level " + level + ", caster level " + _.max([1, (level*2-1)]) + ")",
            "cost": Potions.cost[level]
        };
};

Potions.getPotion = function(type) {
    var roll = _.random(1,100);
    if(type == 'minor') {
        switch(true) {
            case (roll <= 20): return Potions.getLevelPotion(0); break;
            case (roll <= 60): return Potions.getLevelPotion(1); break;
            case (roll <= 100): return Potions.getLevelPotion(2); break;
        }
    }
    else if(type == 'medium') {
        switch(true) {
            case (roll <= 20): return Potions.getLevelPotion(1); break;
            case (roll <= 60): return Potions.getLevelPotion(2); break;
            case (roll <= 100): return Potions.getLevelPotion(3); break;
        }
    }
    else if(type == 'major') {
        switch(true) {
            case (roll <= 20): return Potions.getLevelPotion(2); break;
            case (roll <= 100): return Potions.getLevelPotion(3); break;
        }
    }
};