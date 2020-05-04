

const megaman = {
    name: 'Megaman',
    ready: true,
    diff: 6,
    cont: 6,
    block: {
        mod: 0,
        zone: 'mid',
    },
    sN: 'MM00',
    cType: 'character',
    symbols: ['all', 'good', 'order'],
    handS: 6,
    vit: 27,
    abi1: {
        desc: 'E: if this Charge, Fury, or Kick attack completely blocked, your opponent loses 1 vitality and your next attack gets + 1 damage',
        trig: function(){}
    },
    abi2: {
        desc: 'R Commit: After your opponent plays an ability on a card non-character in thier staging area, cancel it and destroy that card.',
        trig: function(){}
    }
}
const megaBuster = {
    name: 'Mega Buster',
    ready: true,
    diff: 4,
    cont: 3,
    dmg: 4,
    spd: 4,
    block: {
        mod: 1,
        zone: 'mid',
    },
    sN: 'MM01',
    cType: 'attack',
    symbols: ['all', 'good', 'order'],
    abi1: {
        desc: 'E: If this attack deals damage, draw 1 card',
        trig: function(){}
    }
}

const superFightingRobot = {
    name: 'Super Fighting Robot',
    ready: true,
    diff: 1,
    cont: 5,
    block: {
        mod: 3,
        zone: 'high',
    },
    sN: 'MM01',
    cType: 'attack',
    symbols: ['all', 'good', 'order'],
    abi1: {
        desc: 'E: If this attack deals damage, draw 1 card',
        trig: function(){}
    }
}

let m2 = superFightingRobot;