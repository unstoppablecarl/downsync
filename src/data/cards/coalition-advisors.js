import { makeAction, makeAdvisor, makeTrait } from '../support/factories.js'
import { COALITION_CARD_DEFAULTS } from './coalition-units.js'
import { ADVISOR_ARTILLERY_STRIKE } from '../cards-data/command-abilities.js'

export const WOLF_AI_ADVISOR = make({
    name: 'Wolf AI',
    slug: 'wolf_ai',
    type: 'Combined Arms Specialist',
    command_points: 7,
    command_abilities: [],
    actions: [
        ADVISOR_ARTILLERY_STRIKE,
    ],
    command_passive_abilities: [
        makeAction({
            name: 'Unit Upgrades',
            desc: 'Spider Drone Solider Units in this Force gain Regroup.',
            desc_keywords_after: ['Regroup'],
            traits: [
                makeTrait({
                    name: 'Regroup',
                    desc: 'Taskforce Units with an Overwatch Token, may be Placed within 3" of their current position immediately after Taskforce Designation (including in Reaction Engagements).',
                }),
            ],
        }),
    ],
})

export const COALITION_ADVISORS = [
    WOLF_AI_ADVISOR,
]

function make(unit) {

    unit = Object.assign({}, COALITION_CARD_DEFAULTS, unit)

    return makeAdvisor(unit)
}



