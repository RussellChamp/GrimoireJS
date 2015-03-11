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
var Grimoire = function(config) {
    var self = this;
    this.chance = (config && config.chance ? config.chance : config && config.seed ? new Chance(config.seed) : new Chance());

    this.SOURCES = [];
    $.getJSON('sources/sources.json', function(sources) { 
        sources.sources.forEach(function(url) {
            $.getJSON('sources/' + url, function(source) {
                    console.log('loaded sources/'+ url);
                    source.data = {};
                    //construct the data containers we will insert later data into
                    source.types.forEach(function(type) {
                        source.data[type.name] = {};
                        source.data[type.name].enabled = true;
                        if(type.source) {
                            var typeUrl = 'sources/' + type.source;
                            $.getJSON(typeUrl, function(typeData) {
                                source.data[type.name].data = typeData.data;
                                console.log('loaded sources/' + typeUrl);
                            })
                            .fail(function(d, textStatus, error) {
                            console.error('getJSON failed to load '+typeUrl+ ', status: ' + textStatus + ', error: '+error);
                            });
                        }
                    });
                    self.SOURCES.push(source);
                })
                .fail(function(d, textStatus, error) {
                console.error('getJSON failed to load '+url+ ', status: ' + textStatus + ', error: '+error);
                });
            });
        })
        .fail(function(err) {
            console.log('Failed to load sources list:', err);
        });

    this.getItems = function(sources, quality, count, types, options) {

        var items = [];

        //Error checking block
        if(!sources || sources.length === 0) { console.log('No sources given!'); return items; }
        if(!types || types == 'any' || types.length === 0) { 
            types = _.values(TYPES); //set to all types
        }
        for(var i in types) { 
            if(_.values(TYPES).indexOf(types[i]) == -1) { console.log('Invalid type ' + types[i]); return items; }
        }
        if(_.values(QUALITIES).indexOf(quality) == -1) { console.log('Invalid quality ' + quality); return items; }
        if(!count || count < 1) { count = 1; }
        options = options ? options : {};

        

        //initialize the chance engine, using a seed if provided (for testing purposes)
        //we do this now instead of reinitializing the Chance engine each time we generate an item
        self.chance = (self.chance ? self.chance : options.seed ? new Chance(options.seed) : new Chance());

        _.times(count, function() {
            var item = self.getItem(sources, quality, types, options);
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

        //***SPELLS AND SCROLLS AND WANDS***
        //************************
        if(type == TYPES.SCROLLS || type == TYPES.SPELLS || type == TYPES.WANDS) {
            if(!options.spellType || !options.spellLevel) {
                console.log('Error selecting source for Spells. Invalid options', options);
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
                console.log('Error! There are no ' + QUALITIES.MINOR + ' ' + type);
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
            console.log('Unable to find valid ' + quality + ' ' + type + ' within sources!', sources);
            return;
        }
        //chance.weighted will DESTRUCTIVELY modify paramaters that have a weight of zero
        //in this case, that means sources that do not contain the selected type
        //or sources that have types we want but with no weight
        //because of that, I create a temp array that I don't care if chance mangles
        source = sources[chance.weighted(_.range(sources.length), sourceWeights)];
        return source;
    };


    this.getItem = function(sources, quality, types, options) {
        options = options ? options : {};

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
            //console.log(localWeights);
            itemType = TYPES[chance.weighted(_.keys(localWeights), _.values(localWeights))];
        }
        
        var item = {};
        var source = {};

        //GENERATE ITEM
        //SCROLLS
        if(itemType == TYPES.SCROLLS) {
            item = self.getScroll(sources, quality, undefined /*spell type*/, options);
        }
        else if(itemType == TYPES.POTIONS) {
            item = self.getPotion(sources, quality, undefined /*potion level*/, options);
        }
        else if(itemType == TYPES.WANDS) {
            item = self.getWand(sources, quality, undefined /*spell level*/, options);
        }
        //WONDROUS ITEMS
        else if(itemType == TYPES.WONDROUS_ITEMS) {
            //Select the item source based on the quality and item type
            source = selectSource(sources, quality, itemType, options);
            item = _.clone(chance.pick(source.data[itemType].data[quality]));
            item.source = source.shortName;
            
            //make an intelligent item if we either want ALL intelligent items
            //OR intelligent items are NOT disabled AND we roll under the chance threshold
            if(options.allIntelligent || (!options.disableIntelligent && chance.d100() <= (options.intelligenceChance || 1))) {
                item.intelligence = 'WOOHOO I AM INTELLIGENT!';
            }
        }
        //EVERYTHING ELSE
        else {
            //Select the item source based on the quality and item type
            source = selectSource(sources, quality, itemType, options);
            var totalWeights = _.sum(_.map(source.data[itemType].data, function(item) { return item.weight[quality]; }));
            var roll = chance.integer({min: 1, max: totalWeights});

            //EXCEPTIONS FOR ARMOR_AND_SHEILDS

            //EXCEPTIONS FOR WEAPONS

            //EXCEPTIONS FOR POTIONS

            //EXCEPTIONS FOR WANDS

            //CHANCE FOR INTELLIGENT WEAPONS, RINGS, RODS, STAVES, OR WONDROUS ITEMS
            var itemData = source.data[itemType].data;
            for(var i in itemData) { //check all 'itemType' items in the source
                if(roll <= itemData[i].weight[quality]) { //if we roll under their weighted probability
                    item = _.clone(itemData[i]);
                    delete item.weight;
                    item.source = source.shortName;
                    break;
                }
                else { //decrease the roll value by the current item's weighted probability
                    roll -= itemData[i].weight[quality];
                }
            }
        }
        if(!options.disableClue && chance.d100() > 80) {
            item.name += ' with a clue to it\'s purpose!';
        }
        item.quality = quality;
        return item;
    };

    this.getSpells = function(sources, level, count, type, options) {
        options = options ? options : {};

        var spells = [];
        self.chance = (self.chance ? self.chance : options.seed ? new Chance(options.seed) : new Chance());

        _.times(count, function() {
            
            spells.push(Grimoire.getSpell(sources, level, type, options));
        });

        return spells;
    };

    this.getSpell = function(sources, level, type, options) {
        options = options ? options : {};

        //initialize the chance engine, using a seed if provided (for testing purposes)
        var chance = (self.chance ? self.chance : options.seed ? new Chance(options.seed) : new Chance());
        
        var spellType = type ? type : chance.pick(_.values(SPELL_TYPES));
        options.spellType = spellType;
        options.spellLevel = level;
        var source = selectSource(sources, options.quality, TYPES.SPELLS, options);
        //console.log('Generating a level ' + level + ' ' + spellType + ' spell from ' + source.shortName);

        var spell = {
            name: chance.pick(source.data.Spells.data[spellType][level]),
            level: level,
            type: spellType,
            source: source.shortName
        };

        return spell;
    };

    this.getScroll = function(sources, quality, type, options) {
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
        var spell = self.getSpell(sources, spellLevel, type, options);

        return {
            'name': 'Scroll of ' + spell.name,
            'description': '(' + spell.type + ', spell level ' + spellLevel + ', caster level ' + _.max([1, (spellLevel*2-1)]) + ')',
            'cost': cost[spellLevel],
            'source': spell.source
        };
    };

    this.getPotion = function(sources, quality, level, options) {
        options = options ? options : {};
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

    this.getWand = function(sources, quality, level, options) {
        options = options ? options : {};
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
        options.quality = quality;
        options.typeOverride = TYPES.WANDS;
        var spell = self.getSpell(sources, level, SPELL_TYPES.ARCANE, options);
        return {'name': 'Wand of ' + spell.name,
                'description': '(spell level ' + level + ', caster level ' + _.max([1, (level*2-1)]) + ', 50 charges)',
                'cost': cost[level],
                'source': spell.source
            };
    };
};