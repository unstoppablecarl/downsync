import { makeAdvisor } from '../support/factories.js'
import { REPUBLIC_CARD_DEFAULTS } from './republic-units.js'
import { BRACE_INFANTRY, REPOSITION, STEALTH_UPGRADE } from '../cards-data/command-abilities.js'
import { TYPE_INFANTRY } from '../constants.js'

export const SOFIA_AVERY = make({
    name: 'Sofia Avery',
    slug: 'sofia_avery',
    type: 'Infantry Specialist',
    command_points: 7,
    command_abilities: [
        REPOSITION(TYPE_INFANTRY, 2),
        BRACE_INFANTRY,
    ],
    command_passive_abilities: [
        STEALTH_UPGRADE('Courier'),
    ],
})


export const REPUBLIC_ADVISORS = [
    SOFIA_AVERY,
]

function make(unit) {

    unit = Object.assign({}, REPUBLIC_CARD_DEFAULTS, unit)

    return makeAdvisor(unit)
}



