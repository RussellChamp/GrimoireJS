/*global _:false */
/*global Grimoire:true, Spells:true, Weapons:true */
'use strict';

Grimoire.alignments = ['Chaotic good', 'Chaotic neutral', 'Chaotic evil', 'Neutral evil', 
'Lawful evil', 'Lawful good', 'Lawful neutral', 'Neutral good', 'True neutral']; //9 alignments

Grimoire.getAlignment = function() {
    var roll = _.random(1,100);
    switch(true) {
        case (roll <= 10): return 'Chaotic good';
        case (roll <= 20): return 'Chaotic neutral';
        case (roll <= 35): return 'Chaotic evil';
        case (roll <= 45): return 'Neutral evil';
        case (roll <= 55): return 'Lawful evil';
        case (roll <= 70): return 'Lawful good';
        case (roll <= 80): return 'Lawful neutral';
        case (roll <= 90): return 'Neutral good';
        case (roll <= 100): return 'True neutral';
    }
};

var Intelligence = {};

Intelligence.abilityScore = [
    //ability_score = [score, base price modifier, ego modifier]
    {'score': 10, 'priceMod': 0, 'egoMod': 0},
    {'score': 11, 'priceMod': 200, 'egoMod': 0},
    {'score': 12, 'priceMod': 500, 'egoMod': 1},
    {'score': 13, 'priceMod': 700, 'egoMod': 1},
    {'score': 14, 'priceMod': 1000, 'egoMod': 2},
    {'score': 15, 'priceMod': 1400, 'egoMod': 2},
    {'score': 16, 'priceMod': 2000, 'egoMod': 3},
    {'score': 17, 'priceMod': 2800, 'egoMod': 3},
    {'score': 18, 'priceMod': 4000, 'egoMod': 4},
    {'score': 19, 'priceMod': 5200, 'egoMod': 4},
    {'score': 20, 'priceMod': 8000, 'egoMod': 5},
    ];

Intelligence.getAbilityScore = function() {
    var roll = _.random(1,100);
    switch(true) {
        case (roll <= 10): return Intelligence.abilityScore[0];
        case (roll <= 20): return Intelligence.abilityScore[1];
        case (roll <= 40): return Intelligence.abilityScore[2];
        case (roll <= 50): return Intelligence.abilityScore[3];
        case (roll <= 70): return Intelligence.abilityScore[4];
        case (roll <= 75): return Intelligence.abilityScore[5];
        case (roll <= 80): return Intelligence.abilityScore[6];
        case (roll <= 85): return Intelligence.abilityScore[7];
        case (roll <= 90): return Intelligence.abilityScore[8];
        case (roll <= 95): return Intelligence.abilityScore[9];
        case (roll <= 100): return Intelligence.abilityScore[10];
    }
};

Intelligence.skills = {
    //Craft has been left off the skills list since an object would have a hard time crafting anything
    'int': ['Appraise', 'Knowledge (arcana)', 'Knowledge (dungeoneering)', 'Knowledge (engineering)',
     'Knowledge (geography)', 'Knowledge (history)', 'Knowledge (local)', 'Knowledge (nature)', 
     'Knowledge (nobility)', 'Knowledge (planes)', 'Knowledge (religion)', 'Linguistics', 'Spellcraft'],
    'cha': ['Bluff', 'Diplomacy', 'Intimidate', 'Perform'],
    'wis': ['Perception', 'Sense Motive', 'Survival'],
};

Intelligence.getSkill = function (type) {
    if(['int','cha','wis'].indexOf(type) >= 0) {
        return _.sample(Intelligence.skills[type]);
    }
    else {
        return _(Intelligence.skills.int)
        .concat(Intelligence.skills.cha)
        .concat(Intelligence.skills.wis)
        .sample();
    }
};

//I've tried to keep things orderly in public arrays but item powers are a bit messy
//item_power = [description, base price modifier, ego modifier]
Intelligence.getItemPower = function() {
    var roll = _.random(1,100);
    switch(true) {
        case (roll <= 10):
        return {'description': 'Item can cast ' + Spells.getLevelSpell(0).name + ' at will',
                'priceMod': 1000, 'egoMod': 1};
        case (roll <= 20):
        return {'description': 'Item can cast ' + Spells.getLevelSpell(1).name + ' 3/day',
                'priceMod': 1200, 'egoMod': 1};
        case (roll <= 25):
        return {'description': 'Item can use Magic Aura on itself at will',
                'priceMod': 2000, 'egoMod': 1};
        case (roll <= 35):
        return {'description': 'Item can cast ' + Spells.getLevelSpell(2).name + ' 1/day',
                'priceMod': 2400, 'egoMod': 1};
        case (roll <= 45):
        return {'description': 'Item has 5 ranks in ' + Intelligence.getSkill(),
                'priceMod': 2500, 'egoMod': 1};
        case (roll <= 50):
        return {'description': 'Item can sprout limbs and move with a speed of 10 feet',
                'priceMod': 5000, 'egoMod': 1};
        case (roll <= 55):
        return {'description': 'Item can cast ' + Spells.getLevelSpell(3).name + ' 1/day',
                'priceMod': 6000, 'egoMod': 1};
        case (roll <= 60):
        return {'description': 'Item can cast ' + Spells.getLevelSpell(2).name + ' 3/day',
                'priceMod': 1000, 'egoMod': 1};
        case (roll <= 70):
        return {'description': 'Item has 10 ranks in ' + Intelligence.getSkill(),
                'priceMod': 10000, 'egoMod': 2};
        case (roll <= 75):
        return {'description': 'Item can change shape into one other form of the same size',
                'priceMod': 10000, 'egoMod': 2};
        case (roll <= 80):
        return {'description': 'Item can fly, as per the spell, at a speed of 30 feet',
                'priceMod': 10000, 'egoMod': 2};
        case (roll <= 85):
        return {'description': 'Item can cast ' + Spells.getLevelSpell(4).name + ' 1/day',
                'priceMod': 11200, 'egoMod': 2};
        case (roll <= 90):
        return {'description': 'Item can cast teleport itself 1/day',
                'priceMod': 15000, 'egoMod': 2};
        case (roll <= 95):
        return {'description': 'Item can cast ' + Spells.getLevelSpell(3).name + ' 3/day',
                'priceMod': 18000, 'egoMod': 2};
        case (roll <= 100):
        return {'description': 'Item can cast ' + Spells.getLevelSpell(4).name + ' 3/day',
                'priceMod': 33600, 'egoMod': 2};
    }
};

//this one was also a bit messy
//item_purpose = [description, ego modifier]
Intelligence.getItemPurpose = function() {
    var roll = _.random(1,100);
    switch(true) {
        case (roll <= 20): 
        return {'description': 'Defeat/slay diametrically opposed alignment',
                'egoMod': 2};
        case (roll <= 30): 
        return {'description': 'Defeat/slay arcane spellcasters (including spellcasting monsters and those that use spell-like abilities)',
                'egoMod': 2};
        case (roll <= 40): 
        return {'description': 'Defeat/slay divine spellcasters (including divine entities and servitors)',
                'egoMod': 2};
        case (roll <= 50): 
        return {'description': 'Defeat/slay non-spellcasters',
                'egoMod': 2};
        case (roll <= 55): 
        return {'description': 'Defeat/slay all ' + Weapons.getBane().slice(8), //this probably isn't quite right but we'll keep it for now',
                'egoMod': 2};
        case (roll <= 60): 
        return {'description': 'Defeat/slay all ' + _.sample(['Humanoids (' + Grimoire.getHumanoidType() + ')', 'Outsiders (' + Grimoire.getOutsiderType() + ')']),
                'egoMod': 2};
        case (roll <= 70): 
        return {'description': 'Defend all ' + _.sample(['Humanoids (' + Grimoire.getHumanoidType() + ')', 'Outsiders (' + Grimoire.getOutsiderType() + ')']),
                'egoMod': 2};
        case (roll <= 80): 
        return {'description': 'Defeat/slay the servants of ' + Grimoire.getDeity(),
                'egoMod': 2};
        case (roll <= 90): 
        return {'description': 'Defend the servants of ' + Grimoire.getDeity(),
                'egoMod': 2};
        case (roll <= 95): 
        return {'description': 'Defeat/slay all (other than the item and the wielder)',
                'egoMod': 2};
        case (roll <= 100): 
        return {'description': 'Make something up! (GM discression)',
                'egoMod': 2};
    }
};

//another messy one
//dedicated_power = [description, base price modifier, ego modifier]
Intelligence.getDedicatedPower = function() {
    var roll = _.random(1,100);
    switch(true) {
        case (roll <= 20): 
        return {'description': 'Item can detect any special purpose foes within 60 feet',
         'priceMod': 10000, 'egoMod': 1};
        case (roll <= 35): 
        return {'description': 'Item can cast ' + Spells.getLevelSpell(4).name + ' at will',
         'priceMod': 56000, 'egoMod': 2};
        case (roll <= 50): 
        return {'description': 'Wielder gets +2 luck bonus on attacks, saves, and checks',
         'priceMod': 80000, 'egoMod': 2};
        case (roll <= 65): 
        return {'description': 'Item can cast ' + Spells.getLevelSpell(5).name + ' at will',
         'priceMod': 90000, 'egoMod': 2};
        case (roll <= 80): 
        return {'description': 'Item can cast ' + Spells.getLevelSpell(6).name + ' at will',
         'priceMod': 132000, 'egoMod': 2};
        case (roll <= 95): 
        return {'description': 'Item can cast ' + Spells.getLevelSpell(7).name + ' at will',
         'priceMod': 182000, 'egoMod': 2};
        case (roll <= 100): 
        return {'description': 'Item can cast true resurrection on weilder, once per month',
         'priceMod': 200000, 'egoMod': 2};
    }
};

Intelligence.communication = [
        {'description': 'Empathy', 'priceMod': 0, 'egoMod': 0},
        {'description': 'Speech', 'priceMod': 500, 'egoMod': 0},
        {'description': 'Telepathy', 'priceMod': 1000, 'egoMod': 1},
        ];
Intelligence.basicSenses = [
        {'description': 'Senses (30 ft.)', 'priceMod': 0, 'egoMod': 0},
        {'description': 'Senses (60 ft.)', 'priceMod': 500, 'egoMod': 0},
        {'description': 'Senses (120 ft.)', 'priceMod': 1000, 'egoMod': 0},
        ];
Intelligence.specialSenses = [
        {'description': '', 'priceMod': 0, 'egoMod': 0},
        {'description': 'Darkvision', 'priceMod': 500, 'egoMod': 0},
        {'description': 'Blindsense', 'priceMod': 5000, 'egoMod': 1},
        {'description': 'Read languages', 'priceMod': 1000, 'egoMod': 1},
        {'description': 'Read magic', 'priceMod': 2000, 'egoMod': 1},
        ];

//Common was left out since ALL intelligent items speak common
//Druidic was left out since only Druids know it
//I was thinking of separating languages into generally 'good' or 'evil' but realized that was more up to DM discression
Intelligence.languages = ['Abyssal', 'Aklo', 'Aquan', 'Auran', 'Celestial', 'Draconic', 
                            'Dwarven', 'Elven', 'Giant', 'Gnome', 'Goblin', 'Gnoll', 'Halfling', 
                            'Ignan', 'Infernal', 'Orc', 'Sylvan', 'Terran', 'Undercommon'];

//returns ['all stats, powers, and abilities', cost]
Intelligence.getItemIntelligence = function(basePrice) {
    var cost = 500 + (basePrice === undefined ? 0 : basePrice);
    var ego = 0;
    switch(true) {
        case (basePrice <= 1000): ego += 0; break;
        case (basePrice <= 5000): ego += 1; break;
        case (basePrice <= 10000): ego += 2; break;
        case (basePrice <= 20000): ego += 3; break;
        case (basePrice <= 50000): ego += 4; break;
        case (basePrice <= 100000): ego += 6; break;
        case (basePrice <= 200000): ego += 8; break;
        case (basePrice  > 200000): ego += 12; break;
    }
    
    var sInt = Intelligence.getAbilityScore();
    var sCha = Intelligence.getAbilityScore();
    var sWis = Intelligence.getAbilityScore();

    cost += sInt.priceMod + sCha.priceMod + sWis.priceMod;
    ego += sInt.egoMod + sCha.egoMod + sWis.egoMod;

    var languages = ['Common'];
    var bonusLanguages = Math.floor((sInt.score-10)/2);
    //extra languages will be calculated after we see if it picked up ranks in Linguistics

    var communication = {};
    var roll = _.random(1,100);
    //get communication ability for the item. there was no roll table so I made this up
    switch(true) {
        case (roll <= 30): communication = Intelligence.communication[0]; break;
        case (roll <= 70): communication = Intelligence.communication[1]; break;
        case (roll <= 100): communication = Intelligence.communication[2]; break;
    }
    var basicSenses = {};
    //get senses for the item. there was no roll table so I made this up
    roll = _.random(1,100);
    switch(true) {
        case (roll <= 50): basicSenses = Intelligence.basicSenses[0]; break;
        case (roll <= 80): basicSenses = Intelligence.basicSenses[1]; break;
        case (roll <= 100): basicSenses = Intelligence.basicSenses[2]; break;
    }
    var specialSenses = {};
    //get special senses for the item. there was no roll table so I made this up 
    //and limited it to only 1 special per item
    roll = _.random(1,100);
    switch(true) {
        case (roll <= 50): specialSenses = Intelligence.specialSenses[0]; break;
        case (roll <= 70): specialSenses = Intelligence.specialSenses[0]; break;
        case (roll <= 75): specialSenses = Intelligence.specialSenses[0]; break;
        case (roll <= 90): specialSenses = Intelligence.specialSenses[0]; break;
        case (roll <= 100): specialSenses = Intelligence.specialSenses[0]; break;
    }
    cost += communication.priceMod + basicSenses.priceMod + specialSenses.priceMod;
    ego += communication.egoMod + basicSenses.egoMod + specialSenses.egoMod;


    //Get item powers!
    //So I was thinking of making the number of powers an item had somewhat based on the base cost 
    //but decided to instead roll it pure random items randomly get between 1-5 powers
    //There is the possibility to get repeats of the SAME power
    //In that case, I guess you would just add the numerical parts
    //  eg if 'fly at 30 ft/round' is rolled twice, it becomes 'fly at 60 ft/round'
    var powers = [];
    _.times(_.random(1,5), function() {
        var power = Intelligence.getItemPower();
        powers.push(power);
        cost += power.priceMod;
        ego += power.egoMod;
        if(power.description.indexOf('linguistics') >= 0) {
            bonusLanguages += parseInt(power.description.match(/\d+/)[0]);
        }
    });

    //add any extra languages to the known languages list
    languages = _(languages).concat(_.sample(Intelligence.languages, bonusLanguages)).value();

    //determining purpose
    //there was NO roll chart for determining if an item has a purpose so I made this up
    //I figure 20% of the time sounds good

    var purpose = {'description':'', 'egoMod': 0};
    var dedicatedPowers = [];
    if(_.random(1,100) > 80) {
        purpose = Intelligence.getItemPurpose();
        ego += purpose.egoMod;

        var pPowersNum = 1;
        //I decided that purposed items get between 1-3 dedicated powers, heavily leaning on 1
        roll = _.random(1,100);
        switch(true) {
            case (roll <= 70): pPowersNum = 1; break;
            case (roll <= 90): pPowersNum = 2; break;
            case (roll <= 100): pPowersNum = 3; break;
        }
        
        _.times(pPowersNum, function() {
            var pPower = Intelligence.getDedicatedPower();
            dedicatedPowers.push(pPower);
            cost += pPower.priceMod;
            ego += pPower.egoMod;
        });
    }

    var item = {};
    item.alignment = Grimoire.getAlignment();
    item.ego = ego;
    item.intScore = sInt.score;
    item.chaScore = sCha.score;
    item.wisScore = sWis.score;

    item.communication = communication;
    item.languages = languages;

    item.basicSenses = basicSenses;
    item.specialSenses = specialSenses;
    
    item.powers = powers;
    item.purpose = purpose;
    item.dedicatedPowers = dedicatedPowers;
    item.cost = cost;
    item.print = function() {
        var retStr = 'Alignment: ' + this.alignment + 
                '; Stats: Ego ' + this.ego + ' Int ' + this.intScore + ' Cha ' + this.chaScore + ' Wis ' + this.wisScore +
                '; Communication: ' + this.communication.description;
        this.languages.forEach(function(l, index) { retStr += ((index === 0) ? '; Languages: ' : ', ') + l;});
        retStr += '; Senses: ' + basicSenses.description + (!specialSenses.description) ? '' : (', ' + specialSenses.description);
        this.powers.forEach(function(p, index) { 
            retStr += ((index === 0) ? '; Powers: ' : ', ') + p.description;
        });
        if(this.purpose.description) {
            retStr += '; Purpose: ' + this.purpose.description;
            this.dedicatedPowers.forEach(function(p, index) { 
                retStr += ((index === 0) ? ', Dedicated Powers: ' : ', ') + p.description;
            });
        }
        retStr += '; Cost: ' + this.cost;
        return retStr;
    };

    return item;
};
/*

        
            purpose += ' Dedicated Powers: '
            first = true
            purpose_powers_num.times{
                purpose_power, cost_bonus, ego_bonus = get_dedicated_power()
                if first
                    purpose += purpose_power
                    first = false
                else
                    purpose += ', ' + purpose_power
                end
                cost += cost_bonus
                ego += ego_bonus
            }
        end
        return ['Alignment: ' + alignment + ' Stats: Ego ' + ego.to_s + ' Int ' + stat_int.to_s + ' Cha ' + stat_cha.to_s + ' Wis ' + 
        stat_wis.to_s + senses_and_communication + item_languages + powers + purpose, cost]
    end

end
*/