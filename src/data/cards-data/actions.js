import { keywordFormat } from '../support/text-formatters.js'
import { COST_ACTION_OR_COMMAND, COST_COMMAND } from '../constants.js'
import { makeAction } from '../support/factories.js'

export const FORWARD_OBSERVE = make({
    name: 'Forward Observe',
    cost: COST_ACTION_OR_COMMAND,
    target: 'Unit',
    effect: '&starf;',
    desc: 'A Unit in the same Taskforce immediately resolves its activation with an action that has the Fire Support trait using this Unit\'s LOS. This action can be used once per activation.',
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

export const SCRAMBLE = make({
    name: 'Scramble',
    target: 'Unit/Ping',
    cost: COST_COMMAND,
    range: 6,
    effect: '&starf;',
    desc: 'Select another friendly Unit within 6", that Unit gains a Stealth Token',
    or_desc: 'Select an enemy Ping within 6" and LOS, That Ping may not be Revealed while within 6" of this Unit until the end of this Round.',
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
