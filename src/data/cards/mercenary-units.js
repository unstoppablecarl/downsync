import { INFANTRY_PARTICLE_RIFLE } from '../cards-data/weapons.js'
import { SIZE_MEDIUM } from '../constants.js'

import { DEFENSE_NET } from '../cards-data/unit-traits.js'
import { SCAN } from '../cards-data/actions.js'
import { makeUnit } from '../support/factories.js'

export const HEAVY_INFANTRY = make({
    slug: 'merc_heavy_infantry',
    name: 'Ryoshi Team',
    signature: SIZE_MEDIUM,
    type: 'Human Infantry Squad',
    squad_size: 3,
    speed: 5,
    targeting: 7,
    defense: 13,
    scan: 6,
    cm: 1,
    actions: [
        SCAN(1, 12),
        INFANTRY_PARTICLE_RIFLE,
    ],
    traits: [
        DEFENSE_NET('Ryoshi'),
    ],
})

export const MERCENARY_UNITS = [
    HEAVY_INFANTRY,
]

function make(unit) {
    const defaults = {
        faction: 'Mercenaries',
        icon: 'factions/icon-merc.svg',
    }

    unit = Object.assign({}, defaults, unit)

    return makeUnit(unit)
}
