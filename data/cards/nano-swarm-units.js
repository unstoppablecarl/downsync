import { SIZE_LARGE, SIZE_MEDIUM, SIZE_SMALL, TYPE_INFANTRY } from '../constants.js'
import { ALL_TERRAIN } from '../traits.js'
import { MEDIUM_CANNON, SMALL_AUTOCANNON } from '../weapons.js'
import { SCAN } from '../actions.js'
import { TRAIT_SMART, TRAIT_SPECIALIZED_VS } from '../weapon-traits.js'
import { keywordFormat } from '../keywords.js'
import { makeUnit } from '../units.js'

const NANOBOT_STRUCTURE = {
    name: 'Swarm Structure',
    desc: keywordFormat(`When this unit is Refreshed it may be replaced by a swarm unit of the same size. If replaced it gains all tokens on this unit.`),
    traits: [
        {
            name: 'Constructed',
            desc: 'This unit does not add a ping to your force.',
        },
    ],
}

export const SWARM = make({
    name: 'Swarm',
    signature: 'S,M,L',
    type: 'Nanobot Swarm',
    speed: 6,
    targeting: 7,
    defense: 13,
    scan: null,
    cm: '1,2,4',
    cm_regen: 1,
    actions: [
        {
            name: 'Disassembler',
            note: 'S,M,L',
            target: 'Unit',
            range: 1,
            rof: '1,2,4',
            effect: 'Kill',
            traits: [
                TRAIT_SMART,
                TRAIT_SPECIALIZED_VS([TYPE_INFANTRY]),
            ],
        },
        {
            name: 'Split',
            target: 'Self',
            range: 3,
            effect: '&starf;',
            desc: keywordFormat('Remove this unit and place 2 swarm units one size smaller within 3". Each token on this unit must be moved to one of the placed units chosen by the controlling player.'),
        },
        {
            name: 'Construct',
            target: 'Self',
            effect: '&starf;',
            desc: keywordFormat(`Replace this unit with a Nanobot Structure of equal size. It gains all tokens on this unit.`),
        },
    ],
    traits: [
        ALL_TERRAIN,
        {
            name: 'Swarm',
            desc: keywordFormat('This unit begins with a large SIG. When killed, this unit immediately resolves a Split action.'),
        },
        {
            name: 'Rapid Build',
            desc: keywordFormat('When Refreshed this unit may spend one CM Token to immediately resolve a free Construct Action.'),
        },

    ],
    taskforce_ability: null,
})

export const SMALL_SWARM2 = make({
    name: 'Small ?',
    signature: SIZE_SMALL,
    type: 'Small Nanobot Structure',
    speed: 6,
    targeting: 6,
    defense: 13,
    scan: null,
    cm: 1,
    cm_regen: 1,
    actions: [],
    traits: [],
    taskforce_ability: null,
})

export const SMALL_SWARM3 = make({
    name: 'Small ?',
    signature: SIZE_SMALL,
    type: 'Small Nanobot Structure',
    speed: 6,
    targeting: 6,
    defense: 13,
    scan: null,
    cm: 1,
    cm_regen: 1,
    actions: [],
    traits: [],
    taskforce_ability: null,
})

export const MEDIUM1 = make({
    name: 'Medium ?',
    signature: SIZE_MEDIUM,
    type: 'Medium Nanobot Structure',
    speed: null,
    targeting: 7,
    defense: 13,
    scan: null,
    actions: [],
    traits: [
        NANOBOT_STRUCTURE,
    ],
    taskforce_ability: null,
})

export const MEDIUM2 = make({
    name: 'Medium ?',
    signature: SIZE_MEDIUM,
    type: 'Medium Nanobot Structure',
    speed: null,
    targeting: 7,
    defense: 13,
    scan: null,
    actions: [],
    traits: [
        NANOBOT_STRUCTURE,
    ],
    taskforce_ability: null,
})

export const MEDIUM3 = make({
    name: 'Medium ?',
    signature: SIZE_MEDIUM,
    type: 'Medium Nanobot Structure',
    speed: null,
    targeting: 7,
    defense: 13,
    scan: null,
    actions: [],
    traits: [
        NANOBOT_STRUCTURE,
    ],
    taskforce_ability: null,
})

export const LARGE_BATTERY = make({
    name: 'BATTERY',
    signature: SIZE_LARGE,
    type: 'Large Nanobot Structure, Vehicle',
    speed: 6,
    targeting: 6,
    defense: 13,
    scan: null,
    cm: '6*',
    cm_regen: 3,
    actions: [
        ,
    ],
    traits: [
        NANOBOT_STRUCTURE,
        {
            name: 'Countermeasure Factory',
            desc: keywordFormat('This unit can have up to 6 CM Tokens, but when constructed it only gains tokens from the swarm that constructed it.'),
        },
    ],
    taskforce_ability: {
        name: 'Charge',
        target: 'TF Unit',
        range: 16,
        rof: 3,
        effect: '&starf;',
        desc: keywordFormat('Move one Countermeasure Token on this unit to up to 3 Nanobot Swarm units within 12". (should it only be TF units?)'),
    },
})

export const LARGE_BUNKER = make({
    name: 'Bunker',
    signature: SIZE_LARGE,
    type: 'Large Nanobot Structure',
    speed: 6,
    targeting: 6,
    defense: 13,
    scan: null,
    actions: [
        SCAN(2, 24),
        {
            name: 'Large Cannon',
            target: 'Unit',
            range: null,
            rof: 1,
            effect: 'kill',
        },
        MEDIUM_CANNON,
        SMALL_AUTOCANNON,
    ],
    traits: [
        NANOBOT_STRUCTURE,
        {
            name: 'Watcher',
            desc: 'At the end of this unit\'s activation it gains one Overwatch token.',
        },
    ],
    taskforce_ability: null,
})

export const LARGE3 = make({
    name: 'Large ?',
    signature: SIZE_LARGE,
    type: 'Large Nanobot Structure',
    speed: 6,
    targeting: 6,
    defense: 13,
    scan: null,
    actions: [],
    traits: [],
    taskforce_ability: null,
})

export const NANO_SWARM_UNITS = [
    SWARM,
    SMALL_SWARM2,
    SMALL_SWARM3,
    MEDIUM1,
    MEDIUM2,
    MEDIUM3,
    LARGE_BATTERY,
    LARGE_BUNKER,
    LARGE3,
]

function make(unit) {
    const defaults = {
        faction: 'Swarm',
        icon: 'assets/icon-nano-swarm.svg',
    }


    unit = Object.assign({}, defaults, unit)

    return makeUnit(unit)
}
