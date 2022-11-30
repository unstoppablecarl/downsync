import { keywordFormat } from '../support/text-formatters.js'
import { COST_ACTION, COST_ACTION_OR_COMMAND, COST_COMMAND } from '../constants.js'

export const FORWARD_OBSERVE = make({
    name: 'Forward Observe',
    cost: COST_ACTION,
    target: 'Unit',
    rof: 1,
    effect: '&starf;',
    desc: 'A unit in the same Taskforce immediately resolves its activation with an action that has the Fire Support trait using this unit\'s LOS.',
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
    desc: 'This Unit gains an Overwatch Token. This must be the last action this unit performs in an activation.',
})

export const SHROUD = (range, count) => {
    return make({
        name: 'Shroud',
        cost: COST_ACTION_OR_COMMAND,
        range: range,
        rof: count,
        effect: '&starf;',
        desc: `Place ${count} Shroud Template within ${range}" of this Unit. Shroud Templates are removed when this unit is Refreshed or destroyed.`,
    })
}

export const SPOTTER = make({
    name: 'Spotter',
    cost: COST_COMMAND,
    target: 'TF Unit',
    rof: 1,
    desc: 'Target other unit in the same Taskforce gains +2 TARG against targets in this unit\'s LOS.',
})

export const TRANSPORT_UNLOAD = make({
    name: 'Unload',
    note: 'Free Action, 3"',
    desc: keywordFormat(`Place any carried units within 3". They may immediately perform a move or action.`),
    no_stats: true,
})

export const TRANSPORT_LOAD = make({
    name: 'Load',
    note: 'Free Action, 3"',
    desc: keywordFormat(`Place any eligible units within 3" in this transport up to its max capacity. Units must forfeit a move or action are eligible.`),
    no_stats: true,
})

export const GO_DARK = make({
    name: 'Go Dark',
    cost: COST_COMMAND,
    target: 'Self',
    effect: '&starf;',
    desc: 'Each Spider Drone in this Unit gains a Stealth Token.',
})

export const BASIC_SCAN = SCAN(1, 12)

function make(action) {

    action.traits = action.traits || []

    if (!action.cost) {
        action.cost = {
            [COST_ACTION]: true,
        }
    } else if (typeof action.cost === 'string') {
        action.cost = {
            [action.cost]: true,
        }
    }

    let descKeywords = action.desc_keywords || [action.name]

    action.desc = keywordFormat(action.desc, descKeywords)

    return action
}
