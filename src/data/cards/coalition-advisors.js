import { makeAdvisor } from '../support/factories.js'
import { COALITION_CARD_DEFAULTS } from './coalition-units.js'
import { ADVISOR_ARTILLERY_STRIKE, ADVISOR_NAV_HACK, ENHANCED_SCAN } from '../cards-data/command-abilities.js'

export const WOLF_AI_ADVISOR = make({
    name: 'Wolf AI',
    slug: 'wolf_ai',
    type: 'Machine Intelligence Advisor',
    command_points: 7,
    command_abilities: [
        ENHANCED_SCAN,
    ],
    actions: [
        ADVISOR_ARTILLERY_STRIKE,
        ADVISOR_NAV_HACK,
    ],
})


export const COALITION_ADVISORS = [
    WOLF_AI_ADVISOR,
]

function make(unit) {

    unit = Object.assign({}, COALITION_CARD_DEFAULTS, unit)

    return makeAdvisor(unit)
}



