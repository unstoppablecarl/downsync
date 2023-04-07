import { keywordFormat } from './support/text-formatters.js'

export const STUN = make({
    name: 'Stun',
    desc: 'Stun Effects cannot be negated by countermeasures. Stunned Units may only perform a move or action when they activate and use the lowest of 2d6 for reactions. A Stun effect becomes a Kill effect against a target that is already stunned. Removed after performing an activation or reaction.',
})

export const NOTE_STEALTH_TOKEN = make({
    name: 'Stealth Token',
    desc: 'A Unit with a Stealth Token cannot be targeted by enemy actions. A Unit looses the token when it makes an attack or an enemy Unit successful scans it or an enemy Unit is within 2" after any Unit ends a move. A Unit cannot gain a Stealth Token if an enemy Unit is within 2" and cannot have more than 1.',
})

export const NOTE_BREACH_COUNTER = make({
    name: 'BREACH',
    desc: 'A Unit suffering the BREACH effect gains 1 Breach Counter (A Unit may have multiple). All Counters are removed at the end of each Taskforce Activation.',
})

function make(ability) {
    ability.desc = keywordFormat(ability.desc)

    return ability
}
