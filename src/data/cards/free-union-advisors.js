import { makeAdvisor } from '../support/factories.js'
import { PRIORITIZE } from '../cards-data/command-abilities.js'
import { FREE_UNION_FACTION } from '../constants.js'

export const FU_ADVISOR_1 = make({
    slug: 'fu-advisor-1',
    name: 'FU Advisor 1',
    type: 'Human Advisor',
    command_points: 7,
    command_abilities: [
        PRIORITIZE,
    ],
    actions: [],
})

export const FREE_UNION_ADVISORS = [
    FU_ADVISOR_1,
]

function make(unit) {

    unit = Object.assign({}, FREE_UNION_FACTION, unit)

    return makeAdvisor(unit)
}



