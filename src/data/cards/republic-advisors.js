import { makeAction, makeAdvisor } from '../support/factories.js'
import { HARBINGER_RECON } from './republic-units.js'
import { BRACE_INFANTRY, REPOSITION, UNIT_RESTRICTIONS } from '../cards-data/command-abilities.js'
import { REPUBLIC_FACTION, TYPE_INFANTRY } from '../constants.js'
import { COVERT } from '../cards-data/unit-traits.js'

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
        makeAction({
            name: 'Unit Upgrades',
            desc: 'Courier Units in this Force gain Covert.',
            desc_keywords_after: [
                'Covert',
                'Courier',
            ],
            traits: [
                COVERT,
            ],
        }),
        UNIT_RESTRICTIONS([HARBINGER_RECON.full_name]),
    ],
})

export const REPUBLIC_ADVISORS = [
    SOFIA_AVERY,
]

function make(unit) {

    unit = Object.assign({}, REPUBLIC_FACTION, unit)

    return makeAdvisor(unit)
}



