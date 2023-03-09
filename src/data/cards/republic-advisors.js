import { makeAdvisor } from '../support/factories.js'
import { REPUBLIC_CARD_DEFAULTS } from './republic-units.js'
import { BRACE, ENHANCED_STUN, FOCUS_FIRE, REPOSITION_INFANTRY } from '../cards-data/command-abilities.js'

export const SOFIA_AVERY = make({
    name: 'Sofia Avery',
    slug: 'sofia_avery',
    type: 'Human Military Advisor',
    command_points: 7,

    command_abilities: [
        REPOSITION_INFANTRY,
        ENHANCED_STUN,
        FOCUS_FIRE,
        BRACE,
    ],
})


export const REPUBLIC_ADVISORS = [
    SOFIA_AVERY,
]

function make(unit) {

    unit = Object.assign({}, REPUBLIC_CARD_DEFAULTS, unit)

    return makeAdvisor(unit)
}



