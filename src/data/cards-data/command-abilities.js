import { makeCommandAbility, makeTrait, makeWeapon } from '../support/factories.js'
import { COST_COMMAND, TYPE_INFANTRY } from '../constants.js'
import { TRAIT_CLUSTERED, TRAIT_EXTREME_RANGE } from './weapon-traits.js'

export const TRAIT_DISTRIBUTED = makeTrait({
    name: 'Split',
    desc: 'Each attack from this action must have a different target.',
})

export const TRAIT_GRANTED_SCAN_STAT = makeTrait({
    name: 'Granted',
    note: 'SCAN',
    desc: `Units with a SCAN stat may use this action.`,
})

export const STEALTH_UPGRADE = (type) => makeTrait({
    name: 'Stealth Upgrade',
    note: type,
    desc: `When a ${type} Unit is Revealed in your Reveal Phase, you may pay ${COST_COMMAND}, if you do it gains a Stealth Token.`,
})

export const REPOSITION = (type, count) => {
    let descPrefix = ''
    let unit = 'Unit'
    let noteCount = ''

    if (count > 1) {
        descPrefix = 'Up to '
        unit = 'Units'
        noteCount = count + ' '
    } else {
        count = 'A'
        if (type === TYPE_INFANTRY) {
            count = 'An'
        }
    }

    return makeCommandAbility({
        name: `Reposition`,
        note: `${noteCount}${type}, 3"`,
        desc: `${descPrefix} ${count} ${type} ${unit} in the current Taskforce may be Placed within 3" of their current position immediately after Taskforce Designation (including in Reaction Engagements).`,
    })
}

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

export const BRACE_INFANTRY = makeCommandAbility({
    name: 'Brace',
    cost: COST_COMMAND,
    note: `Infantry, 3 CM`,
    desc: 'Immediately after a Reaction Engagement is declared and before resolving Priority Rolls, up to 3 Infantry Bases belonging to friendly Taskforce Units gain 1 Countermeasure Token. They are removed at the end of the Taskforce Activation.',
    traits: [],
})

export const ADVISOR_ARTILLERY_STRIKE = makeWeapon({
    name: 'Artillery Strike',
    cost: COST_COMMAND,
    stat: 'TARG',
    rof: 2,
    effect: 'KILL',
    desc: 'This action may be used once per Unit Activation.',
    traits: [
        TRAIT_GRANTED_SCAN_STAT,
        TRAIT_CLUSTERED(3),
        TRAIT_EXTREME_RANGE,
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

export const PRIORITIZE = makeCommandAbility({
    name: 'Prioritize',
    cost: COST_COMMAND,
    desc: 'You may swap the Priority Rolls of 2 friendly Units participating in a Reaction Engagement immediately after all Priority Rolls are resolved.',
})

function PLACE_EFFECT(distance) {
    return makeTrait({
        name: 'Place Effect',
        note: `Place ${distance}"`,
        desc: `Target Unit is placed by attacker completely within ${distance}" of its current location.`,
    })
}

