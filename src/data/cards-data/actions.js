import { keywordFormat } from '../support/text-formatters.js'
import { COST_ACTION_OR_COMMAND, COST_COMMAND } from '../constants.js'
import { makeAction } from '../support/factories.js'

export const FORWARD_OBSERVE = make({
    name: 'Forward Observe',
    cost: COST_ACTION_OR_COMMAND,
    target: 'Unit',
    rof: 1,
    effect: '&starf;',
    desc: 'A Unit in the same Taskforce immediately resolves its activation with an action that has the Fire Support trait using this Unit\'s LOS.',
})

export const SCAN = (rof, range) => {
    return make({
        name: 'Scan',
        target: 'Ping',
        range: range,
        rof: rof,
        effect: 'scan',
    })
}

export const CM_AURA = make({
    name: 'CM Aura',
    cost: COST_ACTION_OR_COMMAND,
    range: 4,
    rof: null,
    target: '-',
    effect: '&starf;',
    desc: `Friendly Units within 4" gain +1 to Countermeasure rolls.`,
    traits: [],
})

export const SPOTTER = make({
    name: 'Spotter',
    cost: COST_COMMAND,
    target: 'TF Unit',
    rof: 1,
    desc: 'Target other Unit in the same Taskforce gains +2 TARG against targets in this Unit\'s LOS.',
})

export const TRANSPORT_UNLOAD = make({
    name: 'Unload',
    note: 'Free Action, 3"',
    desc: keywordFormat(`Place any carried Units within 3". They may immediately perform a move or action.`),
    no_stats: true,
})

export const TRANSPORT_LOAD = make({
    name: 'Load',
    note: 'Free Action, 3"',
    desc: keywordFormat(`Place any eligible Units within 3" in this transport up to its max capacity. Units must forfeit a move or action are eligible.`),
    no_stats: true,
})

export const GO_DARK = make({
    name: 'Go Dark',
    cost: COST_COMMAND,
    target: 'Self',
    effect: '&starf;',
    desc: 'Each Infantry Base in this Unit gains a Stealth Token.',
})

export const BASIC_SCAN = SCAN(1, 12)

function make(action) {
    return makeAction(action)
}
