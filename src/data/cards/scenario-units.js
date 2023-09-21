import { SCENARIO_FACTION, SIZE_SMALL } from '../constants.js'

import { MOTORIZED_INFANTRY, STEALTHY } from '../cards-data/unit-traits.js'
import { GO_DARK } from '../cards-data/actions.js'
import { makeAction, makeUnit } from '../support/factories.js'

export const ENGINEER_TEAM = make({
    slug: 'engineer-team',
    name: 'Engineer Team',
    //img: '',
    img_svg: 'engineer_unit',
    signature: SIZE_SMALL,
    type: 'Light Motorized Infantry',
    speed: 6,
    targeting: null,
    defense: 14,
    scan: null,
    cm: 1,
    actions: [
        makeAction({
            name: 'Engineer',
            desc: 'Perform a scenario action on target objective.',
            effect: '&starf;',
            range: 2,
            rof: 1,
        }),
        GO_DARK,
    ],
    traits: [
        STEALTHY,
        MOTORIZED_INFANTRY,
    ],
})

export const SCENARIO_UNITS = [
    ENGINEER_TEAM,
]

function make(unit) {
    unit = Object.assign({}, SCENARIO_FACTION, unit)

    return makeUnit(unit)
}
