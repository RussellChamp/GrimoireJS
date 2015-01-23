/*global _:false */
/*global Grimoire:true */
'use strict';
Grimoire.getEnergyResistance = function() {
    return _.sample(['acid', 'cold', 'electricity', 'fire', 'sonic']);
};