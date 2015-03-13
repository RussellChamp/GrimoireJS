//GrimoireJS v0.2
//by Russell Champoux
//Grimoire magic item generator for the Pathfinder roleplaying game
/*global $:false, _:false, Chance:false, console:true */

'use strict';

var TYPES = {
    ARMOR_AND_SHIELDS: 'Armor and Shields',
    POTIONS: 'Potions',
    RINGS: 'Rings',
    RODS: 'Rods',
    SCROLLS: 'Scrolls',
    STAVES: 'Staves',
    WANDS: 'Wands',
    WEAPONS: 'Weapons',
    WONDROUS_ITEMS: 'Wondrous Items',
    SPELLS: 'Spells'
};
var SPELL_TYPES = {
    ARCANE: 'Arcane',
    DIVINE: 'Divine'
};
var ENERGY_TYPES = {
    ACID: 'Acid',
    COLD: 'Cold',
    ELEC: 'Electricity',
    FIRE: 'Fire',
    SONIC: 'Sonic'
};
/*var ARMOR_BONUS_COST = [ //cost for a +# armor or shield. bonus^2 * 1000
    0, 1000, 4000, 9000, 16000, 25000, 36000, 49000, 64000, 81000, 100000
];
var WEAPON_BONUS_COST = [ //cost for a +# weapon. bonus^2 * 2000
     0, 2000, 8000, 18000, 32000, 50000, 72000, 98000, 128000, 162000, 200000
];*/
var QUALITIES = {
    MINOR:'minor',
    MEDIUM: 'medium',
    MAJOR: 'major'
};
var WEIGHTS = {};
WEIGHTS[QUALITIES.MINOR] =
{
    ARMOR_AND_SHIELDS: 4,
    WEAPONS: 5,
    POTIONS: 35,
    RINGS: 2,
    RODS: 0,
    SCROLLS: 35,
    STAVES: 0,
    WANDS: 10,
    WONDROUS_ITEMS: 9,
};
WEIGHTS[QUALITIES.MEDIUM] =
{
    ARMOR_AND_SHIELDS: 10,
    WEAPONS: 10,
    POTIONS: 10,
    RINGS: 10,
    RODS: 10,
    SCROLLS: 15,
    STAVES: 3,
    WANDS: 15,
    WONDROUS_ITEMS: 17,
};
WEIGHTS[QUALITIES.MAJOR] = {
    ARMOR_AND_SHIELDS: 10,
    WEAPONS: 10,
    POTIONS: 5,
    RINGS: 10,
    RODS: 10,
    SCROLLS: 10,
    STAVES: 20,
    WANDS: 5,
    WONDROUS_ITEMS: 20,
};


//Contains all the source info
var Grimoire = function(config) { // jshint ignore:line
    var self = this;
    this.chance = (config && config.chance ? config.chance : config && config.seed ? new Chance(config.seed) : new Chance());

    this.SOURCES = [];
    $.getJSON('sources/sources.json', function(sources) { 
        sources.sources.forEach(function(url) {
            $.getJSON(url, function(source) {
                    console.log('loaded '+ url);
                    source.data = {};
                    //construct the data containers we will insert later data into
                    source.types.forEach(function(type) {
                        source.data[type.name] = {};
                        source.data[type.name].enabled = true;
                        if(type.source) {
                            $.getJSON(type.source, function(typeData) {
                                source.data[type.name].data = typeData;
                                console.log('loaded ' + type.source);
                            })
                            .fail(function(d, textStatus, error) {
                            console.error('getJSON failed to load '+type.source+ ', status: ' + textStatus + ', error: '+error);
                            });
                        }
                    });
                    self.SOURCES.push(source);
                })
                .fail(function(d, textStatus, error) {
                    console.error('getJSON failed to load '+url+ ', status: ' + textStatus + ', error: '+error);
                });
            });
        sources.other.forEach(function(url) {
            $.getJSON(url, function(data) {
                var dataName = url.replace(/.*\/(.*)\.json/, '$1');
                self[dataName] = data;
                console.log('loaded ' + url + ' as ' + dataName);
            })
            .fail(function(d, textStatus, error) {
                console.error('getJSON failed to load '+url+', status: '+textStatus+', error: '+error);
            });
        });
        })
        .fail(function(err) {
            console.error('Failed to load sources list:', err);
        });

    this.getItems = function(quality, count, options) {
        options = options ? options : {};
        var sources = options.sources ? options.sources : self.SOURCES;
        var types = options.types ? options.types : _.values(TYPES);

        //Error checking block
        if(!sources || sources.length === 0) { console.error('No sources given!'); return items; }
        if(!types || types == 'any' || types.length === 0) { 
            types = _.values(TYPES); //set to all types
        }
        for(var i in types) { 
            if(_.values(TYPES).indexOf(types[i]) == -1) { console.error('Invalid type ' + types[i]); return items; }
        }
        if(_.values(QUALITIES).indexOf(quality) == -1) { console.error('Invalid quality ' + quality); return items; }
        if(!count || count < 1) { count = 1; }
        

        //initialize the chance engine, using a seed if provided (for testing purposes)
        //we do this now instead of reinitializing the Chance engine each time we generate an item
        self.chance = (self.chance ? self.chance : options.seed ? new Chance(options.seed) : new Chance());

        var items = [];

        _.times(count, function() {
            var item = self.getItem(quality, options);
            if(item) {
                items.push(item);
                console.log(item);
            }
        });
        return items;
    };

    var selectSource = function(sources, quality, type, options) {
        options = options ? options : {};
        //this is a concern when "getPotions/getWands" calls "getSpell" which calls "selectSource"
        type = options.typeOverride ? options.typeOverride : type;
        quality = quality ? quality : options.quality;

        var chance = (self.chance ? self.chance : options.seed ? new Chance(options.seed) : new Chance());

        var source = {};
        var sourceWeights = {};

        //***UNIQUES FOR WEAPONS AND ARMORS***
        //************************************
        if(type == 'Uniques') {
            if(!options.itemType || !options.uniqueType) {
                console.error('itemType or uniqueType not provided', options);
            }
            sourceWeights = _.map(sources, function(source) {
                if(source.data[options.itemType] && source.data[options.itemType].enabled &&
                    source.data[options.itemType].data[options.uniqueType]) {
                        return _.filter(source.data[options.itemType].data[options.uniqueType],
                        function(special) { 
                            return special.weight[quality] > 0; 
                        }).length; //return a count of all specials that have a quality weight above 0
                }
                else {
                    return 0; //either itemType not found or not enabled or uniqueType not found
                }
            });
            
        }
        //***SPECIALS FOR WEAPONS AND ARMORS***
        //*************************************
        else if(type == 'Specials') {
            if(!options.itemType || !options.specialType) {
                console.error('itemType or specialType not provided', options);
            }
            sourceWeights = _.map(sources, function(source) {
                if(source.data[options.itemType] && source.data[options.itemType].enabled &&
                    source.data[options.itemType].data[options.specialType]) {
                        return _.filter(source.data[options.itemType].data[options.specialType],
                        function(special) { 
                            return special.weight[quality] > 0; 
                        }).length; //return a count of all specials that have a quality weight above 0
                }
                else {
                    return 0; //either itemType not found or not enabled or specialType not found
                }
            });
        }
        //***SPELLS AND SCROLLS AND WANDS***
        //**********************************
        else if(type == TYPES.SCROLLS || type == TYPES.SPELLS || type == TYPES.WANDS) {
            if(!options.spellType || !options.spellLevel) {
                console.error('Error selecting source for Spells. Invalid options', options);
            }
            sourceWeights = _.map(sources, function(source) {
                //Check that we have a spells section
                //AND that the specific item type we are looking for is enabled
                if(source.data[TYPES.SPELLS] && source.data[type] && source.data[type].enabled) {
                    if(source.data[TYPES.SPELLS].data[options.spellType]) {
                        return source.data[TYPES.SPELLS].data[options.spellType][options.spellLevel].length;
                    }
                    else { //source did not have my desired spell type
                        return 0;
                    }
                }
                else { //source has no spells
                    return 0;
                }
                
                });
        }
        //***POTIONS***
        //*************
        else if(type == TYPES.POTIONS) {
            sourceWeights = _.map(sources,
                function(source) {
                    if(source.data[type] && source.data[type].enabled && source.data[type].data[options.potionLevel]) {
                        return source.data[type].data[options.potionLevel].length;
                    }
                    else {
                        return 0; //either no data, disabled, or not items of that quality
                    }
                });
        }
        //***WONDROUS ITEMS***
        //********************
        else if(type == TYPES.WONDROUS_ITEMS) {
            sourceWeights = _.map(sources,
                function(source) {
                    if(source.data[type] && source.data[type].enabled && source.data[type].data[quality]) {
                        return source.data[type].data[quality].length;
                    }
                    else {
                        return 0; //either no data, disabled, or not items of that quality
                    }
                });
        }
        //***EVERYTHING ELSE***
        //*********************
        else {
            if((type == TYPES.RODS || type == TYPES.STAVES) && quality == QUALITIES.MINOR) {
                console.error('Error! There are no ' + QUALITIES.MINOR + ' ' + type);
                return;
            }
            //Determine which source to use
            //get a count from each source of what we're looking for
            sourceWeights = _.map(sources, 
                function(source) {
                    //only choose from sources that HAVE that type of item
                    //AND are enabled
                    //AND have at least one item of that quality with a probability weight
                    if(source.data[type] && source.data[type].enabled) {
                        return _.filter(source.data[type].data,
                        function(item) { 
                            return item.weight[quality] > 0; 
                        }).length; 
                    }
                    else {
                        return 0;
                    }
                });
        }
        if(_.sum(sourceWeights) <= 0) {
            console.error('Unable to find valid ' + quality + ' ' + type + ' within sources!', sources);
            return;
        }
        //chance.weighted will DESTRUCTIVELY modify paramaters that have a weight of zero
        //in this case, that means sources that do not contain the selected type
        //or sources that have types we want but with no weight
        //because of that, I create a temp array that I don't care if chance mangles
        source = sources[chance.weighted(_.range(sources.length), sourceWeights)];
        return source;
    };


    this.getItem = function(quality, options) {
        options = options ? options : {};
        var sources = options.sources ? options.sources : self.SOURCES;
        var types = options.types ? options.types : _.values(TYPES);

        var chance = (self.chance ? self.chance : options.seed ? new Chance(options.seed) : new Chance());

        var itemType = '';
        if(types.length == 1) {
            itemType = types[0];
        }
        else {
            //Create a weighted-average map based on the desired types
            var localWeights = _.clone(WEIGHTS[quality]); //copy the default weighted-average for this quality
            for(var key in localWeights) {
                if(_.values(types).indexOf(TYPES[key]) == -1) { //remove any items that were not selected
                    delete localWeights[key];
                }
            }
            //Determine the type of item to generate
            itemType = TYPES[chance.weighted(_.keys(localWeights), _.values(localWeights))];
        }
        
        var item = {};
        var source = {};

        //GENERATE ITEM
        //SCROLLS
        if(itemType == TYPES.SCROLLS) {
            item = self.getScroll(quality, options);
        }
        else if(itemType == TYPES.POTIONS) {
            item = self.getPotion(quality, options);
        }
        else if(itemType == TYPES.WANDS) {
            item = self.getWand(quality, options);
        }
        //WONDROUS ITEMS
        else if(itemType == TYPES.WONDROUS_ITEMS) {
            item = self.getWondrousItem(quality, options);
        }
        //EVERYTHING ELSE
        else {
            //Select the item source based on the quality and item type
            source = selectSource(sources, quality, itemType, options);

            //EXCEPTIONS FOR ARMOR_AND_SHEILDS

            //EXCEPTIONS FOR WEAPONS

            //CHANCE FOR INTELLIGENT WEAPONS, RINGS, RODS, STAVES, OR WONDROUS ITEMS
            item = self.getWeightedItem(source.data[itemType].data, quality);
            item.source = source.shortName;
        }

        if(!options.disableClue && chance.d100() <= (options.clueChance || 20)) {
            item.name += ' with a clue to it\'s purpose!';
        }
        item.quality = quality;
        return item;
    };

    this.getWeightedItem = function(itemData, quality, options) {
        options = options ? options : {};
        var chance = (self.chance ? self.chance : options.seed ? new Chance(options.seed) : new Chance());

        var maxRoll = options.maxRoll || _.sum(_.map(itemData, function(item) { return item.weight[quality]; }));
        var roll = chance.integer({min: 1, max: maxRoll});
        var item = {};

        for(var i in itemData) { //check all 'itemType' items in the source
                if(roll <= itemData[i].weight[quality]) { //if we roll under their weighted probability
                    item = _.clone(itemData[i]);
                    delete item.weight;
                    return item;
                }
                else { //decrease the roll value by the current item's weighted probability
                    roll -= itemData[i].weight[quality];
                }
            }
        console.error('Could not find valid '+quality+'item in',itemData);
    }

    this.getSpells = function(level, count, options) {
        options = options ? options : {};
        var sources = options.sources ? options.sources : self.SOURCES;
        var type = options.type; //if undefined, we'll pass it on

        var spells = [];
        self.chance = (self.chance ? self.chance : options.seed ? new Chance(options.seed) : new Chance());

        _.times(count, function() {          
            spells.push(self.getSpell(sources, level, type, options));
        });

        return spells;
    };

    this.getSpell = function(level, options) {
        options = options ? options : {};
        var sources = options.sources ? options.sources : self.SOURCES;
        var type = options.type;

        //initialize the chance engine, using a seed if provided (for testing purposes)
        var chance = (self.chance ? self.chance : options.seed ? new Chance(options.seed) : new Chance());
        
        var spellType = type ? type : chance.pick(_.values(SPELL_TYPES));
        options.spellType = spellType;
        options.spellLevel = level;
        var source = selectSource(sources, options.quality, TYPES.SPELLS, options);
        //console.log('Generating a level ' + level + ' ' + spellType + ' spell from ' + source.shortName);

        var spell = {
            name: chance.pick(source.data[TYPES.SPELLS].data[spellType][level]),
            level: level,
            type: spellType,
            source: source.shortName
        };

        return spell;
    };

    this.getScroll = function(quality, options) {
        options = options ? options : {};

        var chance = (self.chance ? self.chance : options.seed ? new Chance(options.seed) : new Chance());

        var cost = [12.5, 25, 150, 375, 700, 1125, 1650, 2275, 3000, 3825];
        var spellLevel = 0;

        var roll = chance.integer({min: 1, max: 100});
        if(quality == QUALITIES.MINOR) {
            switch(true) {
                case (roll <= 5): spellLevel = 0; break;
                case (roll <= 50): spellLevel = 1; break;
                case (roll <= 95): spellLevel = 2; break;
                case (roll <= 100): spellLevel = 3; break;
            }
        }
        else if(quality == QUALITIES.MEDIUM) {
            switch(true) {
                case (roll <= 5): spellLevel = 2; break;
                case (roll <= 65): spellLevel = 3; break;
                case (roll <= 95): spellLevel = 4; break;
                case (roll <= 100): spellLevel = 5; break;
            }
        }
        else if(quality == QUALITIES.MAJOR) {
            switch(true) {
                case (roll <= 5): spellLevel = 4; break;
                case (roll <= 50): spellLevel = 5; break;
                case (roll <= 70): spellLevel = 6; break;
                case (roll <= 85): spellLevel = 7; break;
                case (roll <= 95): spellLevel = 8; break;
                case (roll <= 100): spellLevel = 9; break;
            }
        }

        options.quality = quality;
        var spell = self.getSpell(spellLevel, options);

        return {
            'name': 'Scroll of ' + spell.name,
            'description': '(' + spell.type + ', spell level ' + spellLevel + ', caster level ' + _.max([1, (spellLevel*2-1)]) + ')',
            'cost': cost[spellLevel],
            'source': spell.source
        };
    };

    this.getPotion = function(quality, options) {
        options = options ? options : {};
        var sources = options.sources ? options.sources : self.SOURCES;
        var level = options.potionLevel;

        var chance = (self.chance ? self.chance : options.seed ? new Chance(options.seed) : new Chance());
        var cost = [25, 50, 300, 750];
        
        if(!level || level < 0 || level > 4) {
            var roll = chance.d100();
            if(quality == QUALITIES.MINOR) {
                switch(true) {
                    case (roll <= 20): level = 0; break;
                    case (roll <= 60): level = 1; break;
                    case (roll <= 100): level = 2; break;
                }
            }
            else if(quality == QUALITIES.MEDIUM) {
                switch(true) {
                    case (roll <= 20): level = 1; break;
                    case (roll <= 60): level = 2; break;
                    case (roll <= 100): level = 3; break;
                }
            }
            else if(quality == QUALITIES.MAJOR) {
                switch(true) {
                    case (roll <= 20): level = 2; break;
                    case (roll <= 100): level = 3; break;
                }
            }
        }
        options.typeOverride = TYPES.POTIONS;
        options.potionLevel = level;
        var source = selectSource(sources, quality, TYPES.POTIONS, options);

        return {
            'name': 'Potion/Oil of ' + chance.pick(source.data[TYPES.POTIONS].data[level]),
            'description': '(spell level ' + level + ', caster level ' + _.max([1, (level*2-1)]) + ')',
            'cost': cost[level],
            'source': source.shortName
        };
    };

    this.getWand = function(quality, options) {
        options = options ? options : {};
        var level = options.wandLevel;

        var chance = (self.chance ? self.chance : options.seed ? new Chance(options.seed) : new Chance());
        var cost = [375, 750, 4500, 11250, 21000];


        if(!level || level < 0 || level > 4) {
            var roll = chance.d100();
            if(quality == QUALITIES.MINOR) {
                switch(true) {
                    case (roll <= 5): level = 0; break;
                    case (roll <= 60): level = 1; break;
                    case (roll <= 100): level = 2; break;
                }
            }
            else if(quality == QUALITIES.MEDIUM) {
                switch(true) {
                    case (roll <= 60): level = 2; break;
                    case (roll <= 100): level = 3; break;
                }
            }
            else if(quality == QUALITIES.MAJOR) {
                switch(true) {
                    case (roll <= 60): level = 3; break;
                    case (roll <= 100): level = 4; break;
                }
            }
        }

        options.wandLevel = level;
        options.typeOverride = TYPES.WANDS;
        options.spellType = SPELL_TYPES.ARCANE;
        var spell = self.getSpell(level, options);
        return {'name': 'Wand of ' + spell.name,
                'description': '(spell level ' + level + ', caster level ' + _.max([1, (level*2-1)]) + ', 50 charges)',
                'cost': cost[level],
                'source': spell.source
            };
    };

    this.getWondrousItem = function(quality, options) {
        options = options ? options : {};
        var chance = (self.chance ? self.chance : options.seed ? new Chance(options.seed) : new Chance());

        //Select the item source based on the quality and item type
        var sources = options.sources ? options.sources : self.SOURCES;
        var source = selectSource(sources, quality, TYPES.WONDROUS_ITEMS, options);

        //wondrous items of the same quality have equal probability weight
        var item = _.clone(chance.pick(source.data[TYPES.WONDROUS_ITEMS].data[quality]));
        item.source = source.shortName;
        
        //make an intelligent item if we either want ALL intelligent items
        //OR intelligent items are NOT disabled AND we roll under the chance threshold
        if(options.allIntelligent || (!options.disableIntelligent && chance.d100() <= (options.intelligenceChance || 1))) {
            item.intelligence = 'WOOHOO I AM INTELLIGENT!';
        }
        return item;
    };

    this.getHumanoid = function(options) {
        options = options ? options : {};
        var chance = (self.chance ? self.chance : options.seed ? new Chance(options.seed) : new Chance());
        return chance.weighted(
            _.map(self.Humanoids, function(h) { return h.name; }),
            _.map(self.Humanoids, function(h) { return h.weight; }));
    };

    this.getOutsider = function(options) {
        options = options ? options : {};
        var chance = (self.chance ? self.chance : options.seed ? new Chance(options.seed) : new Chance());
        return chance.weighted(
            _.map(self.Outsiders, function(o) { return o.name; }),
            _.map(self.Outsiders, function(o) { return o.weight; }));
    };
    this.getBane = function(options) {
        options = options ? options : {};
        var chance = (self.chance ? self.chance : options.seed ? new Chance(options.seed) : new Chance());
        var bane = chance.weighted(
            _.map(self.Banes, function(b) { return b.name; }),
            _.map(self.Banes, function(b) { return b.weight; }));
        bane = bane.replace(/GET_HUMANOID_TYPE/, self.getHumanoid(options));
        bane = bane.replace(/GET_OUTSIDER_TYPE/, self.getOutsider(options));
        return bane;
    };

    //type is 'armor', 'shield', 'melee', or 'ranged'
    //options.excludeSpecials can contain a list of specials you do NOT want to get
    //this is useful when creating a weapon that you do not want to have duplicate specials
    this.getSpecials = function(quality, type, options) {
        options = options ? options : {};
        options.excludeSpecials = options.excludeSpecials ? options.excludeSpecials : [];
        options.itemType = options.itemType ? options.itemType : 
                            (type == 'melee' || type == 'ranged') ? TYPES.WEAPONS :
                            (type == 'armor' || type == 'shield') ? TYPES.ARMOR_AND_SHIELDS :
                            undefined;
        options.specialType = type + 'Specials';
        if(!options.itemType) {
            console.error('Invalid special type', type);
            return;
        }

        var chance = (self.chance ? self.chance : options.seed ? new Chance(options.seed) : new Chance());
        var sources = options.sources ? options.sources : self.SOURCES;

        var special = {};
        do {
            var roll = chance.d100();
            if((quality == QUALITIES.MINOR && roll === 100) ||
                (quality == QUALITIES.MEDIUM && roll > 95) ||
                (quality == QUALITIES.MAJOR && roll > 90)) {
                var special1 = self.getSpecials(quality, type, options);
                options.excludeSpecials = options.excludeSpecials.concat(special1); //exclude the special(s) just rolled
                var special2 = self.getSpecials(quality, type, options);
                return special1.concat(special2); //could contain more than one special
            }
            else { //only 1 special
                var source = selectSource(sources, quality, 'Specials', options);
                //data source will look like source.data.Weapons.meleeSpecials

                special = self.getWeightedItem(source.data[options.itemType].data[options.specialType], quality);
                special.source = source.shortName;
            }
        } while(options.excludeSpecials.indexOf(special) != -1); //if we have a duplicate, try again

        //EXCEPTION for Bane special
        if(special.name.indexOf('GET_BANE_TYPE')) {
            special.name = special.name.replace(/GET_BANE_TYPE/, self.getBane(options));
        }

        return [special]; //could contain one or more specials
    };

    this.getUniqueWeapon = function(quality, options) {
        options = options ? options : {};
        options.itemType = TYPES.WEAPONS;
        options.uniqueType = 'uniqueWeapons';

        var sources = options.sources ? options.sources : self.SOURCES;

        var source = selectSource(sources, quality, 'Uniques', options);
        var weapon = self.getWeightedItem(source.data[TYPES.WEAPONS].data.uniqueWeapons, quality);
        weapon.source = source.shortName;

        return weapon;
    };

    //options.type can be 'melee' or 'ranged'
    //note that this option is not alwawys honored when a unique item is rolled
    this.getWeapon = function(quality, options) {
        options = options ? options : {};
        options.excludeSpecials = options.excludeSpecials || [];
        var chance = (self.chance ? self.chance : options.seed ? new Chance(options.seed) : new Chance());
        var weapon = {
            name: '',
            type: '',
            bonus: 0,
            baseCost: 0,
            specials: [],
            intelligence: {},
            glowing: false
        };
        weapon.type = (options.type == 'melee' || options.type == 'ranged') ? options.type
                    : chance.weighted(['melee', 'ranged'], [7,3]);

        var roll = chance.d100();
        var action = '';

        if(quality == QUALITIES.MINOR) {
            if(roll <= 70) {
                //generic +1 weapon
                weapon.bonus = 1;
            }
            else if(roll <= 85) {
                //generic +2 weapon
                weapon.bonus = 2;
            }
            else if(roll <= 90) {
                action = 'getUnique';
            }
            else {
                //10% special ability and roll again
                action = 'getSpecial';
            }
        }
        else if(quality == QUALITIES.MEDIUM) {
            if(roll <= 10) {
                weapon.bonus = 1;
            }
            else if(roll <= 29) {
                weapon.bonus = 2;
            }
            else if(roll <= 58) {
                weapon.bonus = 3;
            }
            else if(roll <= 62) {
                weapon.bonus = 4;
            }
            else if(roll <= 68) {
                action = 'getUnique';
            }
            else {
                //32% special ability and roll again
                action = 'getSpecial';
            }            
        }
        else if(quality == QUALITIES.MAJOR) {
            if(roll <= 20) {
                weapon.bonus = 3;
            }
            else if(roll <= 38) {
                weapon.bonus = 4;
            }
            else if(roll <= 49) {
                weapon.bonus = 5;
            }
            else if(roll <= 63) {
                action = 'getUnique';
            }
            else {
                //37% special ability and roll again
                action = 'getSpecial';
            }
        }
        else {
            console.error('invalid quality', quality);
            return;
        }
        if(action == 'getUnique') {
            var unique = self.getUniqueWeapon(quality, options);
            weapon.name = unique.name;
            weapon.baseCost = unique.cost;
            weapon.source = unique.source;
            weapon.url = unique.url;
        }
        else if(action == 'getSpecial') {
            weapon = self.getWeapon(quality, options);
            var specialsBonus = _.chain(weapon.specials).map(function(s) { return s.bonus; }).sum().value();
            var specials = [];
            var newSpecialsBonus = 0;
            options.excludeSpecials = options.excludeSpecials.concat(weapon.specials);
            if(weapon.bonus + specialsBonus < 10) {
                var tries = 5;
                //this has the opportunity to loop forever either if no match can be found
                do {
                    specials = self.getSpecials(quality, weapon.type, options);
                    newSpecialsBonus = _.chain(specials).map(function(s) { return s.bonus; }).sum().value();

                } while(weapon.bonus + specialsBonus + newSpecialsBonus > 10 && --tries > 0);
                if(tries > 0) { //we found a match without running out of tries!
                    weapon.specials = weapon.specials.concat(specials);
                }
            }
        }        

        //ALL
        //1% chance to be intelligent (NOT usable items - eg Arrows)
        //30% chance to be glowing
        if(options.allIntelligent || 
            (!options.disableIntelligent && chance.d100() <= (options.intelligenceChance || 1))) {
            weapon.intelligence = 'WOOHOO I AM INTELLIGENT!';
        }
        if(!options.disableGlowing && chance.d100() <= (options.glowingChance || 30)) {
            weapon.glowing = true;
        }

        return weapon;
    };

    //options.type can be 'armor' or 'shield'
    this.getArmorOrShield = function(quality, options) {
        options = options ? options : {};
        var chance = (self.chance ? self.chance : options.seed ? new Chance(options.seed) : new Chance());

        var item = {};
        return item;
    };


    //can take clWeights and geWeights to weight the alignment probabilities
    //clWeights are for [chaotic, neutral, lawful]
    //geWeights are for [good, neutral, evil]
    this.getAlignment = function(options) {
        options = options ? options : {};
        var chance = (self.chance ? self.chance : options.seed ? new Chance(options.seed) : new Chance());
        var clWeights = options.clWeights ? options.clWeights : [1,1,1];
        var geWeights = options.geWeights ? options.geWeights : [1,1,1];

        var alignment = chance.weighted(['Chaotic', 'Neutral', 'Lawful'], clWeights) +
                        ' ' +
                        chance.weighted(['Good', 'Neutral', 'Evil'], geWeights);
        if(alignment == 'Neutral Neutral') {
            alignment = 'True Neutral';
        }
        return alignment;
    };

};


//DEBUG - pass an instance of Grimoire
var Debug = function(grimoire) { // jshint ignore:line
    //var self = this;
    this.grimoire = grimoire;

    if(!grimoire) {
        console.error('did not get an instance of grimoire!');
        return;
    }
    this.validateSources = function() {
        grimoire.SOURCES.forEach(function(source) {
            console.log('----', source.name, '----');
            source.types.forEach(function(type) {
                if(type.source) {
                    if(!source.data[type.name] || !source.data[type.name].data) {
                        console.log(source.shortName + ' failed to load ' + type.name + '!');
                    }
                    console.log(type.name, source.data[type.name]);
                    if(type.name == TYPES.RINGS) {
                        var weights = {};
                        weights[QUALITIES.MINOR] = 0;
                        weights[QUALITIES.MEDIUM] = 0;
                        weights[QUALITIES.MAJOR] = 0;
                        source.data[type.name].data.forEach(function(ring) {
                            if(!ring.cost || ring.cost < 0) {
                                console.error('Invalid cost', ring.cost, 'for', ring.name);
                            }
                            
                            if(!_.sum(ring.weight)) {
                                console.error(ring.name, 'has no weight!');
                            }
                            weights[QUALITIES.MINOR] += ring.weight.minor;
                            weights[QUALITIES.MEDIUM] += ring.weight.medium;
                            weights[QUALITIES.MAJOR] += ring.weight.major;
                        });
                        console.log('Weights ', weights);
                    }
                }
            });
        });
    };
};