import { makeAction, makeAdvisor } from '../support/factories.js'
import { COALITION_CARD_DEFAULTS, SENTINEL_HUNTER, SENTINEL_TAGGER } from './coalition-units.js'
import { ADVISOR_ARTILLERY_STRIKE, UNIT_RESTRICTIONS } from '../cards-data/command-abilities.js'
import { REGROUP } from '../cards-data/unit-traits.js'

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
            desc: 'Spider Drone: Solider Units in this Force gain Regroup.',
            desc_keywords_after: [
                'Regroup',
                'Spider Drone: Solider',
            ],
            traits: [
                REGROUP,
            ],
        }),
        UNIT_RESTRICTIONS([
            SENTINEL_TAGGER.full_name,
            SENTINEL_HUNTER.full_name,
        ]),
    ],
})

export const COALITION_ADVISORS = [
    WOLF_AI_ADVISOR,
]

function make(unit) {

    unit = Object.assign({}, COALITION_CARD_DEFAULTS, unit)

    return makeAdvisor(unit)
}



