import { keywordFormat } from './support/text-formatters.js'

export const SHROUD_TEMPLATE = make({
    name: 'Shroud Template',
    desc: `3" diameter, grants concealment to units within, does not block LOS.`,
})

export const STUN = make({
    name: 'Stun',
    desc: 'Stun Effects cannot be negated by countermeasures. Stunned Units may only perform a move or action when they activate and use the lowest of 2d6 for reactions. A Stun effect becomes a Kill effect against a target that is already stunned. Removed after performing an activation or reaction.',
})

function make(ability) {
    ability.desc = keywordFormat(ability.desc)

    return ability
}
