import { makeAction, makeAdvisor } from '../support/factories.js'
import { ADVISOR_ARTILLERY_STRIKE, UNIT_RESTRICTIONS } from '../cards-data/command-abilities.js'
import { REGROUP } from '../cards-data/unit-traits.js'
import { COALITION_FACTION } from '../constants.js'

export const HAWK_AI_ADVISOR = make({
    name: 'Hawk AI',
    slug: 'hawk_ai',
    type: 'Support Specialist',
    command_points: 7,
    command_abilities: [],
    actions: [
        ADVISOR_ARTILLERY_STRIKE,
    ],
    command_passive_abilities: [],
})

export const WOLF_AI_ADVISOR = make({
    name: 'Wolf AI',
    slug: 'wolf_ai',
    type: 'Infantry Specialist',
    command_points: 7,
    command_abilities: [],
    actions: [],
    command_passive_abilities: [
        makeAction({
            name: 'Unit Upgrades',
            desc: 'Spider Drone: Solider Units in this Force gain Regroup.',
            desc_keywords_after: [
                'Regroup',
                'Spider Drone: Solider',
            ],
            traits: [
                REGROUP,
            ],
        }),
        UNIT_RESTRICTIONS([]),
    ],
})

export const COALITION_ADVISORS = [
    HAWK_AI_ADVISOR,
    WOLF_AI_ADVISOR,
]

function make(unit) {

    unit = Object.assign({}, COALITION_FACTION, unit)

    return makeAdvisor(unit)
}



