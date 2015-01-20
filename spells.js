/*global _:false */
'use strict';
var Spells = {};
Spells.getSpells = function() {
    return [
    {
        'name': 'Core Rule Book',
        'shortName': 'CRB',
        'baseUrl': '',
        'arcane': [
        // arcane spells contain all Wizard/Sorcerer spells (at the wizard
        // cost). I may add the others later
                // level 0
            ['Resistance',
                'Acid Splash', 'Detect Magic', 'Detect Poison', 'Read Magic',
                'Daze', 'Dancing Lights', 'Flare', 'Light', 'Ray of Frost',
                'Ghost Sound', 'Bleed', 'Disrupt Undead', 'Touch of Fatigue',
                'Mage Hand', 'Mending', 'Message', 'Open/Close', 'Arcane Mark',
                'Prestidigitation'],
            // level 1
            ['Alarm',
                'Endure Elements', 'Hold Portal', 'Protection from Chaos',
                'Protection from Evil', 'Protection from Good',
                'Protection from Law', 'Shield', 'Grease', 'Mage Armor',
                'Mount', 'Obscuring Mist', 'Summon Monster I', 'Unseen Servant',
                'Comprehend Languages', 'Detect Secret Doors', 'Detect Undead',
                'Identify', 'True Strike', 'Charm Person', 'Hypnotism', 'Sleep',
                'Burning Hands', 'Floating Disk', 'Magic Missile',
                'Shocking Grasp', 'Color Spray', 'Disguise Self', 'Magic Aura',
                'Silent Image', 'Ventriloquism', 'Cause Fear', 'Chill Touch',
                'Ray of Enfeeblement', 'Animate Rope', 'Enlarge Person',
                'Erase', 'Expeditious Retreat', 'Feather Fall', 'Jump',
                'Magic Weapon', 'Reduce Person'],
            // level2
            ['Arcane Lock',
                'Obscure Object', 'Protection from Arrows', 'Resist Energy',
                'Acid Arrow', 'Fog Cloud', 'Glitterdust', 'Summon Monster II',
                'Summon Swarm', 'Web', 'Detect Thoughts', 'Locate Object',
                'See Invisibility', 'Daze Monster', 'Hideous Laughter',
                'Touch of Idiocy', 'Continual Flame', 'Darkness',
                'Flaming Sphere', 'Gust of Wind', 'Scorching Ray', 'Shatter',
                'Blur', 'Hypnotic Pattern', 'Invisibility', 'Magic Mouth',
                'Minor Image', 'Mirror Image', 'Misdirection', 'Phantom Trap',
                'Blindness/Deafness', 'Command Undead', 'False Life',
                'Ghoul Touch', 'Scare', 'Spectral Hand', 'Alter Self',
                'Bear\'s Endurance', 'Bull\'s Strength', 'Cat\'s Grace',
                'Darkvision', 'Eagle\'s Splendor', 'Fox\'s Cunning', 'Knock',
                'Levitate', 'Make Whole', 'Owl\'s Wisdom', 'Pyrotechnics',
                'Rope Trick', 'Spider Climb', 'Whispering Wind'],
            // level3
            ['Dispel Magic',
                'Explosive Runes', 'Magic Circle against Chaos',
                'Magic Circle against Evil', 'Magic Circle against Good',
                'Magic Circle against Law', 'Nondetection',
                'Protection from Energy', 'Phantom Steed', 'Sepia Snake Sigil',
                'Sleet Storm', 'Stinking Cloud', 'Summon Monster III',
                'Arcane Sight', 'Clairaudience/Clairvoyance', 'Tongues',
                'Deep Slumber', 'Heroism', 'Hold Person', 'Rage', 'Suggestion',
                'Daylight', 'Fireball', 'Lightning Bolt', 'Tiny Hut',
                'Wind Wall', 'Displacement', 'Illusory Script',
                'Invisibility Sphere', 'Major Image', 'Gentle Repose',
                'Halt Undead', 'Ray of Exhaustion', 'Vampiric Touch',
                'Beast Shape I', 'Blink', 'Flame Arrow', 'Fly', 'Gaseous Form',
                'Haste', 'Keen Edge', 'Magic Weapon, Greater', 'Secret Page',
                'Shrink Item', 'Slow', 'Water Breathing'],
            // level4
            ['Dimensional Anchor',
                'Fire Trap', 'Globe of Invulnerability, Lesser', 'Remove Curse',
                'Stoneskin', 'Black Tentacles', 'Dimension Door',
                'Minor Creation', 'Secure Shelter', 'Solid Fog',
                'Summon Monster IV', 'Arcane Eye', 'Detect Scrying',
                'Locate Creature', 'Scrying', 'Charm Monster', 'Confusion',
                'Crushing Despair', 'Geas, Lesser', 'Fire Shield', 'Ice Storm',
                'Resilient Sphere', 'Shout', 'Wall of Fire', 'Wall of Ice',
                'Hallucinatory Terrain', 'Illusory Wall',
                'Invisibility, Greater', 'Phantasmal Killer', 'Rainbow Pattern',
                'Shadow Conjuration', 'Animate Dead', 'Bestow Curse',
                'Contagion', 'Enervation', 'Fear', 'Beast Shape II',
                'Elemental Body I', 'Enlarge Person, Mass', 'Mnemonic Enhancer',
                'Reduce Person, Mass', 'Stone Shape'],
            // level5
            ['Break Enchantment',
                'Dismissal', 'Mage\'s Private Sanctum', 'Cloudkill',
                'Mage\'s Faithful Hound', 'Major Creation',
                'Planar Binding, Lesser', 'Secret Chest', 'Summon Monster V',
                'Teleport', 'Wall of Stone', 'Contact Other Plane',
                'Prying Eyes', 'Telepathic Bond', 'Dominate Person',
                'Feeblemind', 'Hold Monster', 'Mind Fog', 'Symbol of Sleep',
                'Cone of Cold', 'Interposing Hand', 'Sending', 'Wall of Force',
                'Dream', 'False Vision', 'Mirage Arcana', 'Nightmare',
                'Persistent Image', 'Seeming', 'Shadow Evocation', 'Blight',
                'Magic Jar', 'Symbol of Pain', 'Waves of Fatigue',
                'Animal Growth', 'Baleful Polymorph', 'Beast Shape III',
                'Elemental Body II', 'Fabricate', 'Overland Flight', 'Passwall',
                'Plant Shape I', 'Polymorph', 'Telekinesis',
                'Transmute Mud to Rock', 'Transmute Rock to Mud', 'Permanency'],
            // level6
            ['Antimagic Field',
                'Dispel Magic, Greater', 'Globe of Invulnerability',
                'Guards and Wards', 'Repulsion', 'Acid Fog', 'Planar Binding',
                'Summon Monster VI', 'Wall of Iron', 'Analyze Dweomer',
                'Legend Lore', 'True Seeing', 'Geas/Quest', 'Heroism, Greater',
                'Suggestion, Mass', 'Symbol of Persuasion', 'Chain Lightning',
                'Contingency', 'Forceful Hand', 'Freezing Sphere', 'Mislead',
                'Permanent Image', 'Programmed Image', 'Shadow Walk', 'Veil',
                'Circle of Death', 'Create Undead', 'Eyebite', 'Symbol of Fear',
                'Undeath to Death', 'Bear\'s Endurance, Mass', 'Beast Shape IV',
                'Bull\'s Strength, Mass', 'Cat\'s Grace, Mass', 'Control Water',
                'Disintegrate', 'Eagle\'s Splendor, Mass', 'Elemental Body III',
                'Flesh to Stone', 'Form of the Dragon I', 'Fox\'s Cunning, Mass',
                'Mage\'s Lucubration', 'Move Earth', 'Owl\'s Wisdom, Mass',
                'Plant Shape II', 'Stone to Flesh', 'Transformation'],
            // level7
            ['Banishment',
                'Sequester', 'Spell Turning', 'Instant Summons',
                'Mage\'s Magnificent Mansion', 'Phase Door', 'Plane Shift',
                'Summon Monster VII', 'Teleport, Greater', 'Teleport Object',
                'Arcane Sight, Greater', 'Scrying, Greater', 'Vision',
                'Hold Person, Mass', 'Insanity', 'Power Word Blind',
                'Symbol of Stunning', 'Delayed Blast Fireball', 'Forcecage',
                'Grasping Hand', 'Mage\'s Sword', 'Prismatic Spray',
                'Invisibility, Mass', 'Project Image',
                'Shadow Conjuration, Greater', 'Simulacrum', 'Control Undead',
                'Finger of Death', 'Symbol of Weakness', 'Waves of Exhaustion',
                'Control Weather', 'Elemental Body IV', 'Ethereal Jaunt',
                'Form of the Dragon II', 'Giant Form I', 'Plant Shape III',
                'Polymorph, Greater', 'Reverse Gravity', 'Statue',
                'Limited Wish'],
            // level8
            ['Dimensional Lock',
                'Mind Blank', 'Prismatic Wall', 'Protection from Spells',
                'Incendiary Cloud', 'Maze', 'Planar Binding, Greater',
                'Summon Monster VIII', 'Trap the Soul', 'Discern Location',
                'Moment of Prescience', 'Prying Eyes, Greater', 'Antipathy',
                'Binding', 'Charm Monster, Mass', 'Demand',
                'Irresistible Dance', 'Power Word Stun', 'Symbol of Insanity',
                'Sympathy', 'Clenched Fist', 'Polar Ray', 'Shout, Greater',
                'Sunburst', 'Telekinetic Sphere', 'Scintillating Pattern',
                'Screen', 'Shadow Evocation, Greater', 'Clone',
                'Create Greater Undead', 'Horrid Wilting', 'Symbol of Death',
                'Form of the Dragon III', 'Giant Form II', 'Iron Body',
                'Polymorph Any Object', 'Temporal Stasis'],
            // level9
            ['Freedom',
                'Imprisonment', 'Mage\'s Disjunction', 'Prismatic Sphere',
                'Gate', 'Refuge', 'Summon Monster IX', 'Teleportation Circle',
                'Foresight', 'Dominate Monster', 'Hold Monster, Mass',
                'Power Word Kill', 'Crushing Hand', 'Meteor Swarm', 'Shades',
                'Weird', 'Astral Projection', 'Energy Drain', 'Soul Bind',
                'Wail of the Banshee', 'Etherealness', 'Shapechange',
                'Time Stop', 'Wish']
            ], //end arcaneSpells

        'divine' : [
                // divine spells contain all cleric and druid spells but only
                // ONE instance at whichever LOWER spell level
            // level 0
            ['Bleed',
                'Create Water', 'Detect Magic', 'Detect Poison', 'Guidance',
                'Light', 'Mending', 'Purify Food and Drink', 'Read Magic',
                'Resistance', 'Stabilize', 'Virtue', 'Flare', 'Know Direction'],
            // level1
            ['Bane',
                'Bless', 'Bless Water', 'Cause Fear', 'Command',
                'Comprehend Languages', 'Cure Light Wounds', 'Curse Water',
                'Deathwatch', 'Detect Chaos', 'Detect Evil', 'Detect Good',
                'Detect Law', 'Detect Undead', 'Divine Favor', 'Doom',
                'Endure Elements', 'Entropic Shield', 'Hide from Undead',
                'Inflict Light Wounds', 'Magic Stone', 'Magic Weapon',
                'Obscuring Mist', 'Protection from Chaos',
                'Protection from Evil', 'Protection from Good',
                'Protection from Law', 'Remove Fear', 'Sanctuary',
                'Shield of Faith', 'Summon Monster I', 'Calm Animals',
                'Charm Animal', 'Detect Animals or Plants',
                'Detect Snares and Pits', 'Entangle', 'Faerie Fire',
                'Goodberry', 'Hide from Animals', 'Jump', 'Longstrider',
                'Magic Fang', 'Pass without Trace', 'Produce Flame',
                'Shillelagh', 'Speak with Animals', 'Summon Nature\'s Ally I'],
            // level2
            ['Aid',
                'Align Weapon', 'Augury', 'Bear\'s Endurance', 'Bull\'s Strength',
                'Calm Emotions', 'Consecrate', 'Cure Moderate Wounds',
                'Darkness', 'Death Knell', 'Delay Poison', 'Desecrate',
                'Eagle\'s Splendor', 'Enthrall', 'Find Traps', 'Gentle Repose',
                'Hold Person', 'Inflict Moderate Wounds', 'Make Whole',
                'Owl\'s Wisdom', 'Remove Paralysis', 'Resist Energy',
                'Restoration, Lesser', 'Shatter', 'Shield Other', 'Silence',
                'Sound Burst', 'Spiritual Weapon', 'Status',
                'Summon Monster II', 'Undetectable Alignment', 'Zone of Truth',
                'Animal Messenger', 'Animal Trance', 'Barkskin', 'Cat\'s Grace',
                'Chill Metal', 'Delay Poison', 'Fire Trap', 'Flame Blade',
                'Flaming Sphere', 'Fog Cloud', 'Gust of Wind', 'Heat Metal',
                'Hold Animal', 'Reduce Animal', 'Soften Earth and Stone',
                'Spider Climb', 'Summon Nature\'s Ally II', 'Summon Swarm',
                'Tree Shape', 'Warp Wood', 'Wood Shape'],
            // level3
            ['Animate Dead',
                'Bestow Curse', 'Blindness/Deafness', 'Contagion',
                'Continual Flame', 'Create Food and Water',
                'Cure Serious Wounds', 'Daylight', 'Deeper Darkness',
                'Dispel Magic', 'Glyph of Warding', 'Helping Hand',
                'Inflict Serious Wounds', 'Invisibility Purge', 'Locate Object',
                'Magic Circle against Chaos', 'Magic Circle against Evil',
                'Magic Circle against Good', 'Magic Circle against Law',
                'Magic Vestment', 'Meld into Stone', 'Obscure Object', 'Prayer',
                'Protection from Energy', 'Remove Blindness/Deafness',
                'Remove Curse', 'Remove Disease', 'Searing Light',
                'Speak with Dead', 'Stone Shape', 'Summon Monster III',
                'Water Breathing', 'Water Walk', 'Wind Wall', 'Call Lightning',
                'Diminish Plants', 'Dominate Animal', 'Magic Fang, Greater',
                'Meld into Stone', 'Neutralize Poison', 'Plant Growth',
                'Poison', 'Quench', 'Sleet Storm', 'Snare', 'Speak with Plants',
                'Spike Growth', 'Summon Nature\'s Ally III'],
            // level4
            ['Air Walk',
                'Chaos Hammer', 'Control Water', 'Cure Critical Wounds',
                'Death Ward', 'Dimensional Anchor', 'Discern Lies', 'Dismissal',
                'Divination', 'Divine Power', 'Freedom of Movement',
                'Giant Vermin', 'Holy Smite', 'Imbue with Spell Ability',
                'Inflict Critical Wounds', 'Magic Weapon, Greater',
                'Neutralize Poison', 'Order\'s Wrath', 'Planar Ally, Lesser',
                'Poison', 'Repel Vermin', 'Restoration', 'Sending',
                'Spell Immunity', 'Summon Monster IV', 'Tongues',
                'Unholy Blight', 'Antiplant Shell', 'Blight', 'Command Plants',
                'Flame Strike', 'Freedom of Movement', 'Giant Vermin',
                'Ice Storm', 'Reincarnate', 'Repel Vermin', 'Rusting Grasp',
                'Scrying', 'Spike Stones', 'Summon Nature\'s Ally IV'],
            // level5
            ['Atonement',
                'Break Enchantment', 'Breath of Life', 'Command, Greater',
                'Commune', 'Cure Light Wounds, Mass', 'Dispel Chaos',
                'Dispel Evil', 'Dispel Good', 'Dispel Law', 'Disrupting Weapon',
                'Flame Strike', 'Hallow', 'Inflict Light Wounds, Mass',
                'Insect Plague', 'Mark of Justice', 'Plane Shift', 'Raise Dead',
                'Righteous Might', 'Slay Living', 'Spell Resistance',
                'Summon Monster V', 'Symbol of Pain', 'Symbol of Sleep',
                'True Seeing', 'Unhallow', 'Wall of Stone', 'Animal Growth',
                'Awaken', 'Baleful Polymorph', 'Call Lightning Storm',
                'Commune with Nature', 'Control Winds', 'Death Ward',
                'Insect Plague', 'Stoneskin', 'Summon Nature\'s Ally V',
                'Transmute Mud to Rock', 'Transmute Rock to Mud', 'Tree Stride',
                'Wall of Fire', 'Wall of Thorns'],
            // level6
            ['Animate Objects',
                'Antilife Shell', 'Banishment', 'Bear\'s Endurance, Mass',
                'Blade Barrier', 'Bull\'s Strength, Mass', 'Create Undead',
                'Cure Moderate Wounds, Mass', 'Dispel Magic, Greater',
                'Eagle\'s Splendor, Mass', 'Find the Path', 'Forbiddance',
                'Geas/Quest', 'Glyph of Warding, Greater', 'Harm', 'Heal',
                'Heroes\' Feast', 'Inflict Moderate Wounds, Mass',
                'Owl\'s Wisdom, Mass', 'Planar Ally', 'Summon Monster VI',
                'Symbol of Fear', 'Symbol of Persuasion', 'Undeath to Death',
                'Wind Walk', 'Word of Recall', 'Antilife Shell',
                'Cat\'s Grace, Mass', 'Fire Seeds', 'Ironwood', 'Liveoak',
                'Move Earth', 'Owl\'s Wisdom, Mass', 'Repel Wood', 'Spellstaff',
                'Stone Tell', 'Summon Nature\'s Ally VI', 'Transport via Plants',
                'Wall of Stone'],
            // level7
            ['Blasphemy',
                'Control Weather', 'Cure Serious Wounds, Mass', 'Destruction',
                'Dictum', 'Ethereal Jaunt', 'Holy Word',
                'Inflict Serious Wounds, Mass', 'Refuge', 'Regenerate',
                'Repulsion', 'Restoration, Greater', 'Resurrection',
                'Scrying, Greater', 'Summon Monster VII', 'Symbol of Stunning',
                'Symbol of Weakness', 'Word of Chaos', 'Animate Plants',
                'Changestaff', 'Control Weather', 'Creeping Doom', 'Fire Storm',
                'Summon Nature\'s Ally VII', 'Sunbeam',
                'Transmute Metal to Wood', 'True Seeing'],
            // level8
            ['Antimagic Field',
                'Cloak of Chaos', 'Create Greater Undead',
                'Cure Critical Wounds, Mass', 'Dimensional Lock',
                'Discern Location', 'Earthquake', 'Fire Storm', 'Holy Aura',
                'Inflict Critical Wounds, Mass', 'Planar Ally, Greater',
                'Shield of Law', 'Spell Immunity, Greater',
                'Summon Monster VIII', 'Symbol of Death', 'Symbol of Insanity',
                'Unholy Aura', 'Animal Shapes', 'Control Plants',
                'Finger of Death', 'Repel Metal or Stone', 'Reverse Gravity',
                'Summon Nature\'s Ally VIII', 'Sunburst', 'Whirlwind',
                'Word of Recall'],
            // level9
            ['Astral Projection',
                'Energy Drain', 'Etherealness', 'Gate', 'Heal, Mass',
                'Implosion', 'Miracle', 'Soul Bind', 'Storm of Vengeance',
                'Summon Monster IX', 'True Resurrection', 'Antipathy',
                'Elemental Swarm', 'Foresight', 'Regenerate', 'Shambler',
                'Shapechange', 'Summon Nature\'s Ally IX', 'Sympathy']
            ] //end divine
        },
        {
        'name': 'Advanced Player Guide',
        'shortName': 'APG',
        'baseUrl': '',
        'arcane': [
        //level0
        ['Sift', 'Spark', 'Unwitting Ally', 'Message', 'Acid Splash', 'Ray of Frost', 'Putrefy Food and Drink'],
        //level1
        ['Beguiling Gift', 'Borrow Skill', 'Dancing Lantern', 'Feather Step', 'Flare Burst', 'Innocence', 'Invigorate', 'Memory Lapse', 
        'Restful Sleep', 'Saving Finale', 'Share Language', 'Solid Note', 'Timely Inspiration', 'Touch of Gracelessness', 'Vanish', 'Alter Winds', 'Feather Fall', 
        'Shocking Grasp', 'Expeditious Excavation', 'Grease', 'Stone Fist', 'Burning Hands', 'Hydraulic Push', 'Obscuring Mist', 'Touch of the Sea', 'Ant Haul', 
        'Break', 'Crafter\'s Curse', 'Crafter\'s Fortune', 'Gravity Bow', 'Sculpt Corpse', 'Stumble Gap', 'Rejuvenate Eidolon, Lesser', 'Unfetter', 'Ill Omen', 
        'Mask Dweomer'],
        //level2
        ['Blood Biography', 'Cacophonous Call', 'Create Treasure Map', 'Dust of Twilight', 'Enter Image', 'Gallant Inspiration', 
        'Ghostbane Dirge', 'Hidden Speech', 'Honeyed Tongue', 'Versatile Weapon', 'Elemental Speech', 'Elemental Touch', 'Resist Energy', 'Summon Monster II', 
        'Glide', 'Gust of Wind', 'Levitate', 'Whispering Wind', 'Acid Arrow', 'Create Pit', 'Glitterdust', 'Shatter', 'Stone Call', 'Burning Gaze', 'Fire Breath', 
        'Flaming Sphere', 'Pyrotechnics', 'Scorching Ray', 'Accelerate Poison', 'Fog Cloud', 'Slipstream', 'Arrow Eruption', 'Create Treasure Map', 'Share Language', 
        'Create Pit', 'Evolution Surge, Lesser', 'Summon Eidolon', 'Feast of Ashes', 'Fester', 'Perceive Cues', 'Pox Pustules', 'Vomit Swarm'],
        //level3
        ['Arcane Concordance', 'Campfire Wall', 'Coordinated Effort', 'Elemental Speech', 'Feather Step, Mass', 'Invigorate, Mass', 
        'Jester\'s Jaunt', 'Purging Finale', 'Reviving Finale', 'Seek Thoughts', 'Thunderous Drums', 'Draconic Reservoir', 'Elemental Aura', 'Protection From Energy', 
        'Cloak of Winds', 'Fly', 'Gaseous Form', 'Lightning Bolt', 'Wind Wall', 'Shifting Sand', 'Spiked Pit', 'Stinking Cloud', 'Fireball', 'Flame Arrow', 'Aqueous Orb', 
        'Hydraulic Torrent', 'Sleet Storm', 'Water Breathing', 'Blood Biography', 'Devolution', 'Enter Image', 'Pain Strike', 'Twilight Knife', 'Versatile Weapon', 
        'Evolution Surge', 'Rejuvenate Eidolon', 'Cup of Dust', 'Guiding Star', 'Nature\'s Exile', 'Screech', 'Share Senses'],
        //level4 
        ['Denounce', 'Discordant Blast', 'Ghostbane Dirge, Mass', 'Heroic Finale', 'Treasure Stitching', 'Wandering Star Motes', 'Detonate', 
        'Dragon\'s Breath', 'Elemental Body I', 'Summon Monster IV', 'Ball Lightning', 'River of Wind', 'Shout', 'Acid Pit', 'Calcific Touch', 'Stone Shape', 'Stoneskin', 
        'Fire Shield', 'Fire Trap', 'Firefall', 'Wall of Fire', 'Ice Storm', 'Solid Fog', 'Wall of Ice', 'Acid Pit', 'Detonate', 'Moonstruck', 'Shadow Projection', 
        'Share Senses', 'True Form', 'Evolution Surge, Greater', 'Purified Calling', 'Transmogrify', 'Sleepwalk', 'Spite', 'Threefold Aspect'],
        //level5 
        ['Bard\'s Escape', 'Cacophonous Call, Mass', 'Cloak of Dreams', 'Deafening Song Bolt', 'Foe to Friend', 'Frozen Note', 'Phantasmal Web', 
        'Stunning Finale', 'Unwilling Shield', 'Elemental Body II', 'Planar Adaptation', 'Planar Binding, Lesser', 'Summon Monster V', 'Overland Flight', 'Suffocation', 
        'Hungry Pit', 'Passwall', 'Transmute Mud to Rock', 'Transmute Rock to Mud', 'Wall of Stone', 'Fire Snake', 'Geyser', 'Cloudkill', 'Cone of Cold', 
        'Life Bubble', 'Pain Strike, Mass', 'Treasure Stitching', 'Rejuvenate Eidolon, Greater', 'Banish Seeming', 'Rest Eternal'],
        //level6 
        ['Brilliant Inspiration', 'Deadly Finale', 'Euphoric Tranquility', 'Fool\'s Forbiddance', 'Getaway', 'Pied Piping', 'Elemental Body III', 
        'Planar Binding', 'Summon Monster VI', 'Chain Lightning', 'Sirocco', 'Acid Fog', 'Flesh to Stone', 'Move Earth', 'Stone to Flesh', 'Wall of Iron', 
        'Contagious Flame', 'Fluid Form', 'Freezing Sphere', 'Cloak of Dreams', 'Enemy Hammer', 'Unwilling Shield', 'Planar Adaptation, Mass', 'Fester, Mass', 
        'Swarm Skin'],
        //level7 
        ['Elemental Body IV', 'Planar Adaptation, Mass', 'Summon Monster VII', 'Control Weather', 'Fly, Mass', 'Rampart', 'Reverse Gravity', 
        'Statue', 'Delayed Blast Fireball', 'Firebrand', 'Vortex', 'Deflection', 'Expend', 'Phantasmal Revenge'],
        //level8 
        ['Planar Binding, Greater', 'Summon Monster VII', 'Shout, Greater', 'Stormbolts', 'Iron Body', 'Wall of Lava', 'Incendiary Cloud', 
        'Horrid Wilting', 'Polar Ray', 'Seamantle', 'Euphoric Tranquility'],
        //level9 
        ['Gate', 'Suffocation, Mass', 'Winds of Vengeance', 'Clashing Rocks', 'World Wave', 'Fiery Body', 'Meteor Swarm', 'Tsunami', 'Tsunami', 
        'Wall of SuppressionM'],
        ],
        'divine' : [
    //divine spells contain all cleric/druid/inquisitor/paladin/ranger spells but only ONE instance at whichever LOWER spell level
    //level0 
    ['Spark', 'Brand', 'Sift'],
    //level1 
    ['Ant Haul', 'Dancing Lantern', 'Alter Winds', 'Aspect of the Falcon', 'Bristle', 'Call Animal', 'Cloak of Shade', 'Detect Aberration', 
        'Expeditious Excavation', 'Feather Step', 'Flare Burst', 'Hydraulic Push', 'Keen Senses', 'Negate Aroma', 'Stone Fist', 'Touch of the Sea', 'Burst Bonds', 
        'Tireless Pursuit', 'Wrath', 'Challenge Evil', 'Ghostbane Dirge', 'Grace', 'Hero\'s Defiance', 'Honeyed Tongue', 'Knight\'s Calling', 'Rally Point', 
        'Veil of Positive Energy', 'Glide', 'Gravity Bow', 'Hunter\'s Howl', 'Lead Blades', 'Residual Tracking'],
    //level2 
    ['Blessing of Courage and Life', 'Ghostbane Dirge', 'Grace', 'Instant Armor', 'Oracle\'s Burden', 'Share Language', 'Weapon of Awe', 
        'Accelerate Poison', 'Aspect of the Bear', 'Burning Gaze', 'Campfire Wall', 'Eagle Eye', 'Elemental Speech', 'Feast of Ashes', 'Glide', 'Lockjaw', 
        'Natural Rhythm', 'Pox Pustules', 'Scent Trail', 'Slipstream', 'Stone Call', 'Bloodhound', 'Castigate', 'Confess', 'Corruption Resistance', 
        'Flames of the Faithful', 'Follow Aura', 'Honeyed Tongue', 'Perceive Cues', 'Sacred Bond', 'Aura of Greater Courage', 'Bestow Grace', 'Fire of Entanglement', 
        'Light Lance', 'Paladin\'s Sacrifice', 'Righteous Vigor', 'Saddle Surge', 'Wake of Light', 'Allfood', 'Arrow Eruption', 'Chameleon Stride', 
        'Create Treasure Map', 'Guiding Star', 'Hide Campsite', 'Hunter\'s Eye', 'Protective Spirit', 'Versatile Weapon'],
        //level3 
        ['Blood Biography', 'Borrow Fortune', 'Elemental Speech', 'Enter Image', 'Guiding Star', 'Nap Stack', 'Sacred Bond', 'Wrathful Mantle', 
        'Aqueous Orb', 'Cloak of Winds', 'Create Treasure Map', 'Cup of Dust', 'Feather Step, Mass', 'Hide Campsite', 'Hydraulic Torrent', 'Lily Pad Stride', 
        'Nature\'s Exile', 'Shifting Sand', 'Banish Seeming', 'Cast Out', 'Coordinated Effort', 'Fester', 'Hidden Speech', 'Hunter\'s Eye', 'Retribution', 
        'Righteous Vigor', 'Seek Thoughts', 'Ward the Faithful', 'Divine Transfer', 'Fire of Judgment', 'Ghostbane Dirge, Mass', 'Holy Whisper', 
        'Marks of Forbiddance', 'Sanctify Armor', 'Aspect of the Stag', 'Bloody Claws', 'Instant Enemy', 'Life Bubble', 'Strong Jaw', 'Tireless Pursuers', 
        'Venomous Bolt'],
        //level4 
        ['Blessing of Fervor', 'Planar Adaptation', 'Rest Eternal', 'Spiritual Ally', 'Aspect of the Stag', 'Ball Lightning', 'Bloody Claws', 
        'Geyser', 'Grove of Respite', 'Life Bubble', 'Moonstruck', 'River of Wind', 'Strong Jaw', 'Thorn Body', 'True Form', 'Brand, Greater', 'Coward\'s Lament', 
        'Defile Armor', 'Denounce', 'Forced Repentance', 'Rebuke', 'Sanctify Armor', 'Shared Wrath', 'Sleepwalk', 'Tireless Pursuers', 'Blaze of Glory', 
        'Fire of Vengeance', 'King\'s Castle', 'Oath of Peace', 'Resounding Blow', 'Sacrificial Oath', 'Stay the Hand', 'Aspect of the Wolf', 
        'Blessing of the Salamander', 'Bow Spirit'],
        //level5 
        ['Cleanse', 'Ghostbane Dirge, Mass', 'Life Bubble', 'Pillar of Life', 'Snake Staff', 'Treasure Stitching', 'Aspect of the Wolf', 
        'Blessing of the Salamander', 'Fire Snake', 'Rest Eternal', 'Threefold Aspect', 'Castigate, Mass', 'Resounding Blow', 'Unwilling Shield'],
        //level6 
        ['Planar Adaptation, Mass', 'Sirocco', 'Swarm Skin', 'Cleanse', 'Fester, Mass'],
        //level7 
        ['Rampart', 'Vortex'],
        //level8 
        ['Divine Vessel', 'Euphoric Tranquility', 'Stormbolts', 'Seamantle', 'Wall of Lava'],
        //level9 
        ['Winds of Vengeance', 'Clashing Rocks', 'Tsunami', 'World Wave'],
        ]
    },
    {
        'name': 'Ultimate Magic',
        'shortName': 'UM',
        'baseUrl': '',
        'arcane': [
        //arcane spells contain all Wizard/Sorcerer/Bard/Magus/Summoner/Witch spells.
        //level0
        [],
        //level1
        ['Anticipate Peril', 'Chord of Shards', 'Delusional Pride', 'Ear-Piercing Scream', 'Forced Quiet', 'Fumbletongue', 'Horn of Pursuit', 'Ki Arrow', 'Play Instrument', 'Summon Minor Monster', 'Unnatural Lust', 'Unprepared Combatant', 'Vocal Alteration', 'Youthful Appearance', 'Corrosive Touch', 'Frostbite', 'Bungle', 'Decompose Corpse', 'Icicle Dagger', 'Interrogation', 'Polypurpose Panacea', 'Ray of Sickening', 'Restore Corpse', 'Shadow Weapon', 'Snapdragon Fireworks', 'Diagnose Disease', 'Hex Ward', 'Remove Sickness', 'Sanctify Corpse'],
        //level2
        ['Acute Senses', 'Allegro', 'Boiling Blood', 'Compassionate Ally', 'Delay Pain', 'Disguise Other', 'Distracting Cacophony', 'Distressing Tone', 'Ghostly Disguise', 'Haunting Mists', 'Mad Hallucination', 'Masterwork Transformation', 'Miserable Pity', 'Oppressive Boredom', 'Piercing Shriek', 'Reckless Infatuation', 'Share Memory', 'Silk to Steel', 'Snapdragon Fireworks', 'Steal Voice', 'Unadulterated Loathing', 'Wartrain Mount', 'Blood Transcription', 'Defensive Shock', 'Frigid Touch', 'Badger\'s Ferocity', 'Cushioning Bands', 'Disfiguring Touch ', 'Pernicious Poison', 'Protective Penumbra', 'Sculpt Simulacrum', 'Silk To Steel', 'Skinsend', 'Symbol of Mirroring', 'Unnatural Lust', 'Unshakable Chill', 'Web Shelter', 'Restore Eidolon, Lesser'],
        //level3
        ['Control Summoned Creature', 'Curse of Disgust', 'Exquisite Accompaniment', 'Rain of Frogs', 'Haunting Choir', 'Mad Monkeys', 'Malicious Spite', 'Overwhelming Grief', 'Smug Narcissism', 'Terrible Remorse', 'Vision of Hell', 'Witness', 'Force Hook Charge', 'Force Punch', 'Monstrous Physique I', 'Undead Anatomy I', 'Animate Dead, Lesser', 'Anthropomorphic Animal', 'Ash Storm', 'Burrow', 'Countless Eyes', 'Distracting Cacophony', 'Eldritch Fever', 'Eruptive Pustules', 'Excruciating Deformation', 'Howling Agony', 'Ki Leech', 'Loathsome Veil', 'Marionette Possession', 'Reckless Infatuation', 'Sands of Time', 'Strangling Hair', 'Toxic Gift', 'Unadulterated Loathing', 'Agonize', 'Restore Eidolon', 'Cackling Skull', 'Spit Venom', 'Vermin Shape I'],
        //level4
        ['Dance of a Hundred Cuts', 'Daze, Mass', 'Echolocation', 'Envious Urge', 'Primal Scream', 'Serenity', 'Shadow Step', 'Sonic Thrust', 'Utter Contempt', 'Virtuoso Performance', 'Wall of Sound', 'Arcana Theft', 'Monstrous Physique II', 'Vermin Shape I', 'Age Resistance, Lesser', 'Agonize', 'Control Summoned Creature', 'Curse of Magic Negation', 'Darkvision, Greater', 'False Life, Greater', 'Familiar Melding', 'Fleshworm Infestation', 'Malfunction', 'Malicious Spite', 'Overwhelming Grief', 'Ride the Waves', 'Simulacrum, Lesser', 'Symbol of Revelation', 'Symbol of Slowing', 'Terrible Remorse', 'Touch of Slime', 'Vitriolic Mist', 'Volcanic Storm', 'Cape of Wasps', 'Symbol of Healing', 'Vermin Shape II'],
        //level5
        ['Joyful Rapture', 'Ki Shout', 'Resonating Word', 'Shadowbard', 'Vengeful Outrage', 'Acidic Spray', 'Corrosive Consumption', 'Monstrous Physique III', 'Undead Anatomy II', 'Vermin Shape II', 'Astral Projection, Lesser', 'Curse of Disgust', 'Echolocation', 'Fickle Winds', 'Icy Prison', 'Lightning Arc', 'Plague Carrier', 'Possess Object', 'Rapid Repair', 'Smug Narcissism', 'Sonic Thrust', 'Soothe Construct', 'Symbol of Scrying', 'Unbreakable Construct', 'Wall of Sound', 'Conjure Black Pudding', 'Create Demiplane, Lesser', 'Ice Crystal Teleport', 'Contagion, Greater', 'Curse, Major'],
        //level6
        ['Dance of a Thousand Cuts', 'Overwhelming Presence', 'Waves of Ecstasy', 'Monstrous Physique IV', 'Undead Anatomy III', 'Age Resistance', 'Battlemind Link', 'Cold Ice Strike', 'Conjure Black Pudding', 'Contagion, Greater', 'Curse, Major', 'Envious Urge', 'Ice Crystal Teleport', 'Leashed Shackles ', 'Serenity', 'Symbol of Sealing', 'Utter Contempt', 'Vengeful Outrage', 'Create Demiplane', 'Eagle Aerie', 'Epidemic', 'Plague Storm'],
        //level7
        ['Age Resistance, Greater', 'Caustic Eruption', 'Circle of Clarity', 'Control Construct', 'Create Demiplane, Lesser', 'Epidemic', 'Ice Body', 'Joyful Rapture', 'Ki Shout', 'Lunar Veil', 'Plague Storm', 'Resonating Word', 'Scouring Winds', 'Temporary Resurrection', 'Waves of Ecstasy', 'Waves of Ecstasy'],
        //level8
        ['Call Construct', 'Create Demiplane', 'Orb of the Void', 'Prediction of Failure', 'Undead Anatomy IV'],
        //level9
        ['Create Demiplane, Greater', 'Cursed Earth', 'Icy Prison, Mass', 'Interplanetary Teleport', 'Overwhelming Presence', 'Ride the Lightning', 'Symbol of Strife', 'Symbol of Vulnerability', 'Transmute Blood to Acid', 'Wooden Phalanx', 'Polar Midnight',],
        ],

        'divine': [
        //divine spells contain all cleric/druid/inquisitor/paladin/ranger spells but only ONE instance at whichever LOWER spell level
        //level0
        [],
        //level1
        ['Decompose Corpse', 'Diagnose Disease', 'Forbid Action', 'Know the Enemy', 'Murderous Command', 'Ray of Sickening', 'Remove Sickness', 'Restore Corpse', 'Sanctify Corpse', 'Summon Minor Monster', 'Frostbite', 'Summon Minor Ally', 'Ear-Piercing Scream', 'Forced Quiet', 'Hex Ward', 'Horn of Pursuit', 'Interrogation', 'Lend Judgment', 'Persuasive Goad', 'Vocal Alteration', 'Wartrain Mount', 'Wartrain Mount', 'Word of Resolve', 'Anticipate Peril'],
        //level2
        ['Animate Dead, Lesser', 'Arrow of Law', 'Boiling Blood', 'Compassionate Ally', 'Delay Pain', 'Disfiguring Touch', 'Dread Bolt', 'Imbue with Aura', 'Masterwork Transformation', 'Protective Penumbra', 'Shard of Chaos', 'Spear of Purity', 'Surmount Affliction', 'Web Shelter', 'Frigid Touch', 'Pernicious Poison', 'Tar Ball', 'Unshakable Chill', 'Wartrain Mount', 'Acute Senses', 'Disguise Other', 'Distressing Tone', 'Ghostly Disguise', 'Howling Agony', 'Holy Shield', 'Vestment of the Champion', 'Badger\'s Ferocity'],
        //level3
        ['Agonize', 'Archon\'s Aura', 'Badger\'s Ferocity', 'Blessing of the Mole', 'Ki Leech', 'Sands of Time', 'Symbol of Healing', 'Vision of Hell', 'Anthropomorphic Animal', 'Ash Storm', 'Burrow', 'Burst of Nettles', 'Fungal Infestation', 'Mad Monkeys', 'Rain of Frogs', 'Spit Venom', 'Vermin Shape I', 'Countless Eyes', 'Eldritch Fever', 'Terrible Remorse', 'Witness', 'Blade of Bright Victory', 'Fickle Winds'],
        //level4
        ['Aura of Doom', 'Blood Crow Strike', 'Control Summoned Creature', 'Fleshworm Infestation', 'Oracle\'s Vessel', 'Plague Carrier', 'Ride the Waves', 'Soothe Construct', 'Spit Venom', 'Symbol of Revelation', 'Symbol of Slowing', 'Terrible Remorse', 'Age Resistance, Lesser', 'Arboreal Hammer', 'Atavism', 'Cape of Wasps', 'Echolocation', 'Touch of Slime', 'Vermin Shape II', 'Volcanic Storm', 'Battlemind Link', 'Curse of Magic Negation', 'Daze, Mass', 'Interrogation, Greater', 'Leashed Shackles ', 'Reprobation', 'Bestow Grace of the Champion', 'Raise Animal Companion', 'Symbol of Healing', 'Darkvision, Greater'],
        //level5
        ['Astral Projection, Lesser', 'Contagion, Greater', 'Curse of Magic Negation', 'Curse, Major', 'Fickle Winds', 'Forbid Action, Greater', 'Holy Ice', 'Rapid Repair', 'Reprobation', 'Serenity', 'Symbol of Scrying', 'Unholy Ice', 'Raise Animal Companion', 'Divine Pursuit', 'Lend Greater Judgment'],
        //level6
        ['Cold Ice Strike', 'Epidemic', 'Joyful Rapture', 'Plague Storm', 'Symbol of Sealing', 'Age Resistance', 'Eagle Aerie', 'Overwhelming Presence'],
        //level7
        ['Bestow Grace of the Champion', 'Circle of Clarity', 'Create Demiplane, Lesser', 'Lunar Veil', 'Waves of Ecstasy', 'Call Construct', 'Create Demiplane', 'Orb of the Void', 'Age Resistance, Greater', 'Scouring Winds'],
        //level8
        ['Atavism, Mass', 'Blood Mist'],
        //level9
        ['Create Demiplane, Greater', 'Cursed Earth', 'Interplanetary Teleport', 'Overwhelming Presence', 'Polar Midnight', 'Symbol of Strife', 'Symbol of Vulnerability', 'Wooden Phalanx', 'Summon Elder Worm', 'Summon Froghemoth'],
        ]
    },
        {
        'name': 'Ultimate Combat',
        'shortName': 'UC',
        'baseUrl': '',
        'arcane': [
        //level0
        ['Haunted Fey Aspect', ],
        //level1
        ['Adjuring Step', 'Abundant Ammunition', 'Adoration', 'Compel Hostility', 'Deadeye\'s Lore', 'Jury-Rig', 'Liberating Command', 'Lock Gaze', 'Moment of Greatness', 'Negative Reaction', 'See Alignment', 'Illusion of Calm', 'Longshot', 'Mirror Strike', 'Reinforce Armaments', 'Returning Weapon', 'Shock Shield', 'Unerring Weapon', 'Warding Weapon', 'Air Bubble', 'Damp Powder', 'Fabricate Bullets', 'Peacebond', 'Weaken Powder', 'Life Conduit', ],
        //level2
        ['Blistering Invective', 'Discovery Torch', 'Pilfering Hand', 'Qualm', 'Returning Weapon', 'Share Language, Communal', 'Tactical Acumen', 'Thunder Fire', 'Adoration', 'Animal Aspect', 'Ant Haul, Communal', 'Bestow Weapon Proficiency', 'Brow Gasher', 'Bullet Shield', 'Certain Grip', 'Destabilize Powder', 'Endure Elements, Communal', 'Fiery Shuriken', 'Frost Fall', 'Kinetic Reverberation', 'Magic Siege Engine', 'Mount, Communal', 'Reloading Hands', 'Protection from Chaos, Communal', 'Protection from Evil, Communal', 'Protection from Good, Communal', 'Protection from Law, Communal', 'Recoil Fire', 'Reinforce Armaments, Communal', 'Ricochet Shot', 'Spontaneous Immolation', 'Stabilize Powder', 'Telekinetic Assembly', 'Twisted Space', 'Warding Weapon', 'Ablative Barrier', 'Mask Dweomer, Communal', ],
        //level3
        ['Delay Poison, Communal', 'Phantom Driver', 'Returning Weapon, Communal', 'Tongues, Communal', 'Ablative Barrier', 'Animal Aspect', 'Bestow Weapon Proficiency', 'Brow Gasher', 'Effortless Armor', 'Mount, Communal', 'Pilfering Hand', 'Reloading Hands', 'Reinforce Armaments, Communal', 'Tactical Acumen', 'Telekinetic Assembly', 'Twisted Space', 'Animal Aspect, Greater', 'Burst of Speed', 'Locate Weakness', 'Chain of Perdition', 'Darkvision, Communal', 'Flash Fire', 'Healing Thief', 'Hostile Levitation', 'Pellet Blast', 'Protection from Arrows, Communal', 'Pup Shape', 'Resinous Skin', 'Resist Energy, Communal', 'Share Language, Communal', 'Spider Climb, Communal', 'Touch Injection', 'Life Conduit, Improved', 'Obsidian Flow', 'Phantom Chariot', 'Phantom Steed, Communal', ],
        //level4
        ['Phantom Steed, Communal', 'Shocking Image', 'Pellet Blast', 'Wreath of Blades', 'Animal Aspect, Greater', 'Magic Siege Engine, Greater', 'Named Bullet', 'Nondetection, Communal', 'Obsidian Flow', 'Phantom Chariot', 'Protection from Energy, Communal', 'Telekinetic Charge', 'Tongues, Communal', 'Hostile Juxtaposition', 'Stoneskin, Communal', 'Summoner Conduit', 'Absorb Toxicity', 'Debilitating Portent', ],
        //level5
        ['Symbol of Striking', 'Absorb Toxicity', 'Energy Siege Shot', 'Hostile Juxtaposition', 'Stoneskin, Communal', 'Summoner Conduit', 'Wreath of Blades', 'Life Conduit, Greater', 'Tar Pool', ],
        //level6
        ['Walk through Space', 'Energy Siege Shot, Greater', 'Named Bullet, Greater', 'Tar Pool', 'Hostile Juxtaposition, Greater', 'Dust Form', ],
        //level7
        ['Arcane Cannon', 'Hostile Juxtaposition, Greater', 'Walk through Space', 'Walk through Space', ],
        //level8
        ['Frightful Aspect', ],
        //level9
        ['Heroic Invocation', 'Mind Blank, Communal',],
        ],
        'divine': [
        //divine spells contain all cleric/druid/inquisitor/paladin/ranger spells but only ONE instance at whichever LOWER spell level
        //level0
        [],
        //level1
        ['Abundant Ammunition', 'Air Bubble', 'Compel Hostility', 'Deadeye\'s Lore', 'Liberating Command', 'Moment of Greatness', 'Reinforce Armaments', 'Sun Metal', 'Damp Powder', 'Weaken Powder', 'Bowstaff', 'Litany of Sloth', 'Litany of Weakness', 'Lock Gaze', 'Longshot', 'Peacebond', 'Returning Weapon', 'Unerring Weapon', 'Tactical Acumen', ],
        //level2
        ['Ant Haul, Communal', 'Bestow Weapon Proficiency', 'Effortless Armor', 'Endure Elements, Communal', 'Instrument of Agony', 'Magic Siege Engine', 'Pilfering Hand', 'Protection from Chaos, Communal', 'Protection from Evil, Communal', 'Protection from Good, Communal', 'Protection from Law, Communal', 'Reinforce Armaments, Communal', 'Returning Weapon', 'Animal Aspect', 'Certain Grip', 'Forest Friend', 'Frost Fall', 'Wilderness Soldiers', 'Blistering Invective', 'Brow Gasher', 'Discovery Torch', 'Litany of Defense', 'Qualm', 'Returning Weapon, Communal', 'Tactical Acumen', 'Divine Arrow', 'Litany of Eloquence', 'Litany of Entanglement', 'Litany of Righteousness', 'Litany of Warding', 'Locate Weakness', 'Reloading Hands', 'Ricochet Shot', ],
        //level3
        ['Chain of Perdition', 'Daybreak Arrow', 'Deadly Juggernaut', 'Delay Poison, Communal', 'Discovery Torch', 'Resist Energy, Communal', 'Returning Weapon, Communal', 'Share Language, Communal', 'Animal Aspect, Greater', 'Companion Mind Link', 'Pup Shape', 'Resinous Skin', 'Spider Climb, Communal', 'Burst of Speed', 'Litany of Eloquence', 'Litany of Entanglement', 'Litany of Righteousness', 'Litany of Warding', 'Locate Weakness', 'Litany of Escape', 'Litany of Sight', 'Named Bullet', 'Protection from Energy, Communal', ],
        //level4
        ['Debilitating Portent', 'Protection from Energy, Communal', 'Summoner Conduit', 'Water Walk, Communal', 'Absorb Toxicity', 'Obsidian Flow', 'Find Quarry', 'Judgment Light', 'Litany of Escape', 'Litany of Sight', 'Magic Siege Engine, Greater', 'Named Bullet', 'Litany of Thunder', 'Litany of Vengeance', 'Darkvision, Communal', 'Named Bullet, Greater', 'Terrain Bond'],
        //level5
        ['Air Walk, Communal', 'Magic Siege Engine, Greater', 'Spell Immunity, Communal', 'Symbol of Striking', 'Tongues, Communal', 'Litany of Thunder', 'Litany of Vengeance', 'Stoneskin, Communal', ],
        //level6
        ['Dust Form', 'Stoneskin, Communal', 'Tar Pool', 'Litany of Madness', 'Named Bullet, Greater'],
        //level7
        ['Jolting Portent', 'Siege of Trees', ],
        //level8
        ['Frightful Aspect', ],
        //level9
        ['Spell Immunity, Greater Communal', 'Siege of Trees, Greater'],
        ]
    }
    ]; //end return
};

Spells.getLevelSpell = function(level, type, source) {
    if(type === undefined) type = _.random(0,1) ? 'arcane' : 'divine';
    //valid values CRB, APG, UM, UC
    var sourceSpells = [];
    var spell = '';

    if(source === undefined) {
        _.forEach(Spells.getSpells(), function(s) {
            sourceSpells = _(sourceSpells).concat(s[type][level]).value();
        });
        spell = _.sample(sourceSpells);
    }
    else {
        sourceSpells = _.findWhere(Spells.getSpells(), function(s) {
            return s.shortName == source.toUpperCase();
        });
        spell = _.sample(sourceSpells[type][level]);
    }
    return {'name': spell, 'level': level, 'type': type, 'source': ''};
};