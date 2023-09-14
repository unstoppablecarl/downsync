import { makeAction, makeCommandAbility, makeTrait, makeWeapon } from '../support/factories.js'
import { COST_COMMAND, TYPE_INFANTRY } from '../constants.js'
import { TRAIT_CLUSTERED, TRAIT_EXTREME_RANGE } from './weapon-traits.js'
import { oncePerActivation } from './actions.js'
import { AURORA, PHANTOM, WIDOW_SCOUT } from '../cards/coalition-units.js'

export const TRAIT_GRANTED_UNITS = (units) => makeTrait({
    name: 'Granted',
    desc: `The following Units gain this Action: ${units.join(', ')}.`,
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

export const FOCUS_FIRE = makeCommandAbility({
    name: 'Focus Fire',
    desc: 'This Combat Action gains +1 ROF but all attacks must target the same Unit.',
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
    desc: 'Immediately after a Reaction Engagement is declared and before resolving Reaction Priority Rolls, up to 3 Infantry Bases belonging to friendly Taskforce Units gain 1 Countermeasure Token. They are removed at the end of the Taskforce Activation.',
    traits: [],
})

export const ADVISOR_ARTILLERY_STRIKE = makeWeapon({
    name: 'Artillery Strike',
    cost: COST_COMMAND,
    stat: 'TARG',
    rof: 2,
    effect: 'KILL',
    desc: oncePerActivation,
    traits: [
        TRAIT_CLUSTERED(3),
        TRAIT_EXTREME_RANGE,
        TRAIT_GRANTED_UNITS([
            WIDOW_SCOUT.full_name,
            PHANTOM.full_name,
            AURORA.full_name,
        ]),
    ],
})

export const UNIT_RESTRICTIONS = (units) => {
    return makeAction({
        name: 'Unit Restrictions',
        desc: `This Force cannot include the following Units: ${units.join(', ')}.`,
        desc_keywords_after: units,
    })
}

export const PRIORITIZE = makeCommandAbility({
    name: 'Prioritize',
    cost: COST_COMMAND,
    desc: 'You may swap the Priority Rolls of 2 friendly Units participating in a Reaction Engagement immediately after all Priority Rolls are resolved. This may be used multiple times.',
})
