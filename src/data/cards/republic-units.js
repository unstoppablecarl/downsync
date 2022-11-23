import { SIZE_LARGE, SIZE_MEDIUM, SIZE_SMALL, TYPE_INFANTRY } from '../constants.js'
import {
    ADVANCED_CANNON,
    CANNON,
    CONCUSSION_ARTILLERY,
    HEAVY_ARTILLERY,
    MEDIUM_CANNON,
    MG,
    MICRO_ARTILLERY,
    SHOCK_AUTOCANNON,
    SHOCK_RIFLE,
    SMART_MED_CANNON,
    SNAP_FIRE,
    SNIPER_RIFLE,
} from '../cards-data/weapons.js'
import {
    ADAPTIVE_CAMO,
    ALL_TERRAIN,
    COUNTERMEASURE_DEFEND,
    FINISHER,
    INFANTRY_SQUAD,
    INFANTRY_TRANSPORT,
    PREDATOR,
    REVEAL_AND_DEPLOY,
} from '../cards-data/unit-traits.js'
import { FORWARD_OBSERVE, SCAN, TRANSPORT_LOAD, TRANSPORT_UNLOAD } from '../cards-data/actions.js'
import { makeUnit } from '../support/factories.js'

export const REPUBLIC_CARD_DEFAULTS = {
    faction: 'Republic of Man',
    icon: 'factions/icon-republic.svg',
}

export const CLEANSER_TEAM = make({
    slug: 'cleanser_team',
    name: 'Cleanser Squad',
    signature: null,
    type: 'Infantry Team x 3',
    speed: 4,
    targeting: 6,
    defense: 13,
    actions: [
        SHOCK_RIFLE,
        MICRO_ARTILLERY,
    ],
    traits: [
        ADAPTIVE_CAMO,
        ALL_TERRAIN,
        INFANTRY_SQUAD,
    ],
})


//export const CLEANSER_TEAM = make({
//    slug: 'cleanser_team',
//    name: 'Cleanser Team',
//    signature: null,
//    type: 'Infantry Fire Team',
//    speed: 4,
//    targeting: 6,
//    defense: 13,
//    actions: [
//        SHOCK_RIFLE,
//        //FORWARD_OBSERVE,
//        //INFANTRY_GUIDED_MISSILE,
//    ],
//    traits: [
//        ACTIVE_CAMO,
//        ALL_TERRAIN,
//    ],
//})

export const VECTOR_TEAM = make({
    slug: 'vector_team',
    name: 'Vector Team',
    signature: null,
    type: 'Infantry Micro Artillery Team',
    speed: 4,
    targeting: 6,
    defense: 13,
    actions: [
        MICRO_ARTILLERY,
    ],
    traits: [
        ADAPTIVE_CAMO,
        ALL_TERRAIN,
    ],
    definitions: [],
})

export const SEEKER_TEAM = make({
    name: 'Seeker Team',
    signature: SIZE_MEDIUM,
    type: 'Infantry Sniper Team',
    speed: 4,
    targeting: 7,
    scan: 7,
    defense: 13,
    actions: [
        SCAN(2, 12),
        SNIPER_RIFLE,
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
    bg: 'courier.png',
    signature: SIZE_MEDIUM,
    type: 'Medium Infantry Transport',
    speed: 6,
    targeting: 6,
    defense: 13,
    scan: 6,
    cm: 2,
    cm_regen: 2,
    actions: [
        SCAN(1, 10),
        CANNON,
        TRANSPORT_UNLOAD,
        TRANSPORT_LOAD,
    ],
    traits: [
        INFANTRY_TRANSPORT,
        COUNTERMEASURE_DEFEND(TYPE_INFANTRY),
    ],
})

export const HARBINGER_MEDIUM_RECON = make({
    slug: 'harbinger',
    name: 'Harbinger',
    bg: 'scorpion.png',
    signature: SIZE_SMALL,
    type: 'Medium Recon Vehicle',
    speed: 7,
    targeting: 6,
    defense: 14,
    scan: 7,
    cm: 1,
    cm_regen: 1,
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
    bg: 'crusader.png',
    signature: SIZE_MEDIUM,
    type: 'Medium Tank',
    speed: 7,
    targeting: 7,
    defense: 13,
    scan: null,
    cm: 2,
    cm_regen: 2,
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
    bg: 'mule.png',
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
    bg: 'samson.png',
    signature: SIZE_LARGE,
    type: 'Heavy Tank',
    speed: 5,
    targeting: 7,
    defense: 12,
    scan: null,
    cm: 3,
    cm_regen: 3,
    actions: [
        SMART_MED_CANNON,
        SNAP_FIRE(SMART_MED_CANNON),
    ],
    traits: [
        PREDATOR,
        ALL_TERRAIN,
    ],
    definitions: [],
})

export const GOLIATHS = make({
    slug: 'goliath_squad',
    name: 'Goliath Squad',
    bg: 'goliath-squad.png',
    signature: SIZE_MEDIUM,
    type: 'Power Armored Infantry x 3',
    speed: 5,
    targeting: 6,
    defense: 13,
    scan: null,
    cm: 1,
    cm_regen: 1,
    actions: [
        MG,
        ADVANCED_CANNON,
    ],
    traits: [
        REVEAL_AND_DEPLOY(3, 'Goliath'),
        ALL_TERRAIN,
        PREDATOR,
    ],
    definitions: [],
})

export const REPUBLIC_UNITS = [
    CLEANSER_TEAM,
    VECTOR_TEAM,
    SEEKER_TEAM,
    GOLIATHS,
    COURIER_TRANSPORT,
    HARBINGER_MEDIUM_RECON,
    CRUSADER_MEDIUM_TANK,
    MANDIBLE,
    SAMSON_HEAVY_TANK,
]


export const REPUBLIC_DEMO_UNITS = [
    CLEANSER_TEAM,
    VECTOR_TEAM,
    COURIER_TRANSPORT,
    HARBINGER_MEDIUM_RECON,
    CRUSADER_MEDIUM_TANK,
    SAMSON_HEAVY_TANK,
]

export function make(unit) {

    unit = Object.assign({}, REPUBLIC_CARD_DEFAULTS, unit)

    return makeUnit(unit)
}
