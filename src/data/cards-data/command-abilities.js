import { makeCommandAbility, makeTrait, makeWeapon } from '../support/factories.js'
import { COST_COMMAND } from '../constants.js'
import { TRAIT_CLUSTERED } from './weapon-traits.js'

export const OFF_BOARD_ASSET = makeTrait({
    name: 'Off Board Asset',
    desc: 'Ignores short/long range modifiers.',
})

export const TRAIT_DISTRIBUTED = makeTrait({
    name: 'Split',
    desc: 'Each attack from this action must have a different target.',
})

export const TRAIT_GRANTED_SCAN_STAT = makeTrait({
    name: 'Granted',
    note: 'SCAN',
    desc: `Units with a SCAN stat may use this action.`,
})

export const REPOSITION_INFANTRY = makeCommandAbility({
    name: 'Reposition Infantry',
    desc: 'Select a friendly Infantry Unit. Place its Infantry Bases within 3" of their current position.',
    traits: [
        {
            name: 'Phase',
            desc: 'Before movement phase or immediately after a Disembark action.',
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
    rof: 2,
    effect: 'STUN',
    traits: [
        TRAIT_GRANTED_SCAN_STAT,
        TRAIT_CLUSTERED(3),
        TRAIT_DISTRIBUTED,
        OFF_BOARD_ASSET,
    ],
})

export const ADVISOR_NAV_HACK = makeWeapon({
    name: 'Nav Hack',
    cost: COST_COMMAND,
    stat: 'SCAN',
    range: 16,
    rof: 1,
    effect: '&starf;',
    traits: [
        TRAIT_GRANTED_SCAN_STAT,
        PLACE_EFFECT(3),
    ],
})

function PLACE_EFFECT(distance) {
    return makeTrait({
        name: 'Place Effect',
        note: `Place ${distance}"`,
        desc: `Target Unit is placed by attacker completely within ${distance}" of its current location.`,
    })
}

