import { keywordFormat } from '../support/text-formatters.js'
import { COST_ACTION_OR_COMMAND, COST_COMMAND } from '../constants.js'
import { SHROUD_TEMPLATE } from '../definitions.js'
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

export const PATROL = make({
    name: 'Patrol',
    cost: COST_COMMAND,
    target: 'Self',
    effect: '&starf;',
    desc: 'This Unit gains an Overwatch Token. This must be the last action this Unit performs in an activation.',
})

export const SHROUD = make({
    name: 'Shroud',
    cost: COST_ACTION_OR_COMMAND,
    range: 4,
    rof: null,
    target: '-',
    effect: '&starf;',
    desc: `Place the center of 1 Shroud Template within 4" of this Unit. Shroud Templates are removed when this Unit is Refreshed or destroyed. This action can be used once per activation.`,
    traits: [
        SHROUD_TEMPLATE,
    ],
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
