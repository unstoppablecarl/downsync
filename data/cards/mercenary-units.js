import { INFANTRY_PARTICLE_RIFLE } from '../weapons.js'
import { SIZE_SMALL } from '../constants.js'

import { COUNTERMEASURE_DEFEND, REVEAL_AND_DEPLOY } from '../traits.js'
import { SCAN } from '../actions.js'
import { makeUnit } from '../units.js'

export const HEAVY_INFANTRY = make({
    slug: 'merc_heavy_infantry',
    name: 'Ryoshi Team',
    signature: SIZE_SMALL,
    type: 'Heavy Infantry',
    speed: 5,
    targeting: 7,
    defense: 13,
    scan: 6,
    cm: 1,
    cm_regen: 1,
    actions: [
        SCAN(1, 12),
        INFANTRY_PARTICLE_RIFLE,
    ],
    traits: [
        REVEAL_AND_DEPLOY(3, 'Ryoshi'),
        COUNTERMEASURE_DEFEND('Ryoshi Unit', 'Ryoshi Units'),
    ],
})

export const MERCENARY_UNITS = [
    HEAVY_INFANTRY,
]

function make(unit) {
    const defaults = {
        faction: 'Mercenaries',
        //icon: 'assets/icon-coalition.svg',
    }

    unit = Object.assign({}, defaults, unit)

    return makeUnit(unit)
}
