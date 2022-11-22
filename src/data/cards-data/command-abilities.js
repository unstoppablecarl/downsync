import { makeCommandAbility } from '../support/factories.js'
import { COST_COMMAND } from '../constants.js'
import { makeWeapon } from './weapons.js'
import {
    EXTREME_RANGE,
    PLACE_EFFECT,
    TRAIT_CLUSTERED,
    TRAIT_DISTRIBUTED,
    TRAIT_GRANTED_SCAN_STAT,
} from './weapon-traits.js'

export const REPOSITION_INFANTRY = makeCommandAbility({
    name: 'Reposition Infantry',
    desc: 'Place up to 4 infantry Taskforce units within 3" of their current position (Placements cannot be reacted to).',
    traits: [
        {
            name: 'Phase',
            desc: 'Before movement phase or immediately after a disembark action.',
        },
    ],
})

export const ENHANCED_STUN = makeCommandAbility({
    name: 'Enhanced Stun',
    desc: 'Target Unit gains +2 TARG for a single attack roll with the STUN effect.',
})

export const FOCUS_FIRE = makeCommandAbility({
    name: 'Focus Fire',
    desc: 'This combat action gains +1 ROF but all attacks must target the same unit.',
})

export const ENHANCED_SCAN = makeCommandAbility({
    name: 'Enhanced Scan',
    cost: COST_COMMAND,
    desc: 'Target Unit gains +2 SCAN for a single detection roll.',
    traits: [],
})

export const BRACE = makeCommandAbility({
    name: 'Brace',
    cost: COST_COMMAND,
    desc: 'Allocate 2 Countermeasure tokens to one or more Units in the Taskforce (can exceed max CM). They are removed at the end of the Taskforce Activation.',
    traits: [
        {
            name: 'Phase',
            desc: 'Taskforce designation or before rolling reaction dice in a Reaction Engagement.',
        },
    ],
})

export const ADVISOR_ARTILLERY_STRIKE = makeWeapon({
    name: 'Artillery Strike',
    cost: COST_COMMAND,
    stat: 'SCAN',
    target: 'Unit',
    rof: 2,
    effect: 'STUN',
    traits: [
        TRAIT_GRANTED_SCAN_STAT,
        TRAIT_CLUSTERED(3),
        TRAIT_DISTRIBUTED,
        EXTREME_RANGE,
    ],
})

export const ADVISOR_NAV_HACK = makeWeapon({
    name: 'Nav Hack',
    cost: COST_COMMAND,
    stat: 'SCAN',
    target: 'Unit',
    range: 16,
    rof: 1,
    effect: '&starf;',
    traits: [
        TRAIT_GRANTED_SCAN_STAT,
        PLACE_EFFECT(3),
    ],
})
