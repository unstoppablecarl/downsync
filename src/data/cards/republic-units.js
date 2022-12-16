import { SIZE_LARGE, SIZE_MEDIUM, SIZE_SMALL, TYPE_INFANTRY } from '../constants.js'
import {
    ADVANCED_CANNON,
    CANNON,
    CONCUSSION_ARTILLERY,
    GUIDED_MISSILE,
    HEAVY_ARTILLERY,
    MEDIUM_CANNON,
    MG,
    MICRO_ARTILLERY,
    SHOCK_AUTOCANNON,
    SHOCK_RIFLE,
    SHOCK_SNIPER_RIFLE,
    SMART_MED_CANNON,
    SNAP_FIRE,
} from '../cards-data/weapons.js'
import {
    ADAPTIVE_CAMO,
    ALL_TERRAIN,
    COUNTERMEASURE_DEFEND,
    FINISHER,
    HARDENED_CM,
    INFANTRY_TRANSPORT,
    MECHANIZED_INFANTRY,
    PREDATOR,
} from '../cards-data/unit-traits.js'
import { FORWARD_OBSERVE, SCAN, TRANSPORT_LOAD, TRANSPORT_UNLOAD } from '../cards-data/actions.js'
import { makeUnit } from '../support/factories.js'

export const REPUBLIC_CARD_DEFAULTS = {
    faction: 'Republic of Man',
    icon: 'factions/icon-republic.svg',
}

export const CLEANSER_SQUAD = make({
    slug: 'cleanser_team',
    img: 'cleanser-squad.png',
    name: 'Cleanser Squad',
    signature: SIZE_SMALL,
    type: 'Human Infantry Squad',
    squad_size: 3,
    speed: 4,
    targeting: 6,
    defense: 12,
    actions: [
        SHOCK_RIFLE,
        GUIDED_MISSILE,
    ],
    traits: [
        ADAPTIVE_CAMO,
        ALL_TERRAIN,
        MECHANIZED_INFANTRY,
    ],
})

export const VECTOR_SQUAD = make({
    slug: 'vector_team',
    img: 'cleanser-squad.png',
    name: 'Vector Squad',
    signature: SIZE_SMALL,
    type: 'Human Infantry Squad',
    squad_size: 3,
    speed: 4,
    targeting: 6,
    defense: 12,
    actions: [
        SHOCK_RIFLE,
        MICRO_ARTILLERY,
    ],
    traits: [
        ADAPTIVE_CAMO,
        ALL_TERRAIN,
        MECHANIZED_INFANTRY,
    ],
    definitions: [],
})

export const SEEKER_TEAM = make({
    name: 'Seeker Team',
    signature: SIZE_SMALL,
    type: 'Human Infantry Squad',
    squad_size: 1,
    speed: 4,
    targeting: 7,
    scan: 7,
    defense: 12,
    actions: [
        SCAN(2, 12),
        SHOCK_SNIPER_RIFLE,
    ],
    traits: [
        ADAPTIVE_CAMO,
        ALL_TERRAIN,
        PREDATOR,
    ],
    definitions: [],
})

export const COURIER_TRANSPORT = make({
    slug: 'courier',
    name: 'Courier',
    img: 'courier.png',
    signature: SIZE_MEDIUM,
    type: 'Medium Transport',
    speed: 6,
    targeting: 6,
    defense: 13,
    scan: 6,
    cm: 2,
    actions: [
        SCAN(1, 10),
        CANNON,
        TRANSPORT_UNLOAD,
        TRANSPORT_LOAD,
    ],
    traits: [
        COUNTERMEASURE_DEFEND(TYPE_INFANTRY),
        INFANTRY_TRANSPORT,
    ],
})

export const HARBINGER_RECON = make({
    slug: 'harbinger',
    name: 'Harbinger',
    img: 'scorpion.png',
    signature: SIZE_SMALL,
    type: 'Light Recon Vehicle',
    speed: 7,
    targeting: 6,
    defense: 14,
    scan: 7,
    cm: 1,
    actions: [
        SCAN(2, 12),
        SHOCK_AUTOCANNON,
        FORWARD_OBSERVE,
    ],
    traits: [],
    definitions: [],
})

export const CRUSADER_MEDIUM_TANK = make({
    slug: 'crusader',
    name: 'Crusader',
    img: 'crusader.png',
    signature: SIZE_MEDIUM,
    type: 'Medium Tank',
    speed: 7,
    targeting: 7,
    defense: 13,
    scan: null,
    cm: 2,
    actions: [
        MEDIUM_CANNON,
    ],
    traits: [
        FINISHER,
        COUNTERMEASURE_DEFEND(TYPE_INFANTRY),
    ],
})

export const MANDIBLE = make({
    slug: 'mandible',
    name: 'Mandible',
    img: 'mandible.png',
    signature: SIZE_LARGE,
    type: 'Heavy Artillery',
    speed: 5,
    targeting: 6,
    defense: 11,
    scan: null,
    actions: [
        CONCUSSION_ARTILLERY,
        HEAVY_ARTILLERY,
    ],
    traits: [],
    definitions: [],
})

export const SAMSON_HEAVY_TANK = make({
    slug: 'samson',
    name: 'Samson',
    img: 'samson.png',
    signature: SIZE_LARGE,
    type: 'Heavy Tank',
    speed: 5,
    targeting: 7,
    defense: 12,
    scan: null,
    cm: '3+1',
    actions: [
        SMART_MED_CANNON,
        SNAP_FIRE(SMART_MED_CANNON),
    ],
    traits: [
        PREDATOR,
        HARDENED_CM,
        ALL_TERRAIN,
    ],
    definitions: [],
})

export const GOLIATHS = make({
    slug: 'goliath_squad',
    name: 'Goliath Squad',
    img: 'goliath-squad.png',
    signature: SIZE_MEDIUM,
    type: 'Human Infantry Squad',
    squad_size: 3,
    speed: 5,
    targeting: 6,
    defense: 13,
    scan: null,
    cm: 1,
    actions: [
        MG,
        ADVANCED_CANNON,
    ],
    traits: [
        ALL_TERRAIN,
        PREDATOR,
    ],
    definitions: [],
})

export const REPUBLIC_UNITS = [
    CLEANSER_SQUAD,
    VECTOR_SQUAD,
    SEEKER_TEAM,
    GOLIATHS,
    COURIER_TRANSPORT,
    HARBINGER_RECON,
    CRUSADER_MEDIUM_TANK,
    MANDIBLE,
    SAMSON_HEAVY_TANK,
]

export const REPUBLIC_DEMO_UNITS = [
    HARBINGER_RECON,
    VECTOR_SQUAD,
    COURIER_TRANSPORT,
    CRUSADER_MEDIUM_TANK,
    SAMSON_HEAVY_TANK,
]

export function make(unit) {

    unit = Object.assign({}, REPUBLIC_CARD_DEFAULTS, unit)

    return makeUnit(unit)
}
