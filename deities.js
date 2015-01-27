/*global _:false */
/*global Grimoire:true */
'use strict';
Grimoire.getDeities = function() {
    //list of deities and their allignments
    //dieties['lawful/neutral/chaotic']['good/neutral/evil'] = [gods]
    return {
        'lawful': {
            'good'    : ['Erastil', 'Iomedae', 'Torag'],
            'neutral' : ['Abadar', 'Irori'],
            'evil'    : ['Asmodeus', 'Zon-Kuthon']
            },
        'neutral': {
            'good'    : ['Sarenrae'],
            'neutral' : ['Gozreh', 'Pharasma', 'Nethys'],
            'evil'    : ['Urgathoa', 'Norgorber'],
            },
        'chaotic' : {
            'good'    : ['Desna', 'Cayden Cailean'],
            'neutral' : ['Gorum', 'Calistria'],
            'evil'    : ['Lamashtu', 'Rovagug'],
            },
        };
};

Grimoire.getDeity = function(alignment1, alignment2) {
    if(alignment1 === undefined) alignment1 = _.sample(['lawful', 'neutral', 'chaotic']);
    if(alignment2 === undefined) alignment2 = _.sample(['good', 'neutral', 'evil']);
    var alignmentString = "";
    if(alignment1 === 'neutral' && alignment2 === 'neutral') {
        alignmentString = ' (true neutral)';
    }
    else {
        alignmentString = ' (' + alignment1 + ' ' + alignment2 + ')';
    }
    return _.sample(Grimoire.getDeities()[alignment1][alignment2]) + alignmentString;
};