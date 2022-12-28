import {
    ADVANCED_CHARGES,
    CANNON,
    CLAWS,
    DEPLOY_DRONES,
    DOUBLE_CANNON,
    FUSION_CANNON,
    HMG,
    MEDIUM_CANNON,
    MG,
    RAILGUN,
    REPAIR_RENCH,
    SHOCK_RIFLE,
    SMART_MED_CANNON,
    TAG_CANNON,
    TARGET_LOCK,
} from '../cards-data/weapons.js'
import { SIZE_LARGE, SIZE_MEDIUM, SIZE_SMALL } from '../constants.js'

import {
    ADAPTIVE_CAMO,
    ALL_TERRAIN,
    AMBUSH,
    CLEAR_THE_WAY,
    DEFENSE_AURA,
    HARDENED_CM,
    SENTRY,
    STEALTHY_INFANTRY,
} from '../cards-data/unit-traits.js'

import { NOTE_STEALTH_TOKEN } from '../definitions.js'
import { BASIC_SCAN, GO_DARK, PATROL, SCAN, SHROUD } from '../cards-data/actions.js'
import { makeUnit } from '../support/factories.js'

export const COALITION_CARD_DEFAULTS = {
    faction: 'Coalition',
    icon: 'factions/icon-coalition.svg',
}

export const WIDOW_SCOUT = make({
    slug: 'scout',
    name: 'Widow Scout',
    img: 'scout.png',
    signature: SIZE_SMALL,
    type: 'Light Vehicle',
    speed: 8,
    targeting: 5,
    defense: 14,
    scan: 7,
    cm: 1,
    actions: [
        SCAN(3, 14),
        MG,
        DEPLOY_DRONES,
    ],
    traits: [],
})

export const SENTINEL_TAGGER = make({
    slug: 'sentinel_tagger',
    name: 'Sentinel',
    variant_name: 'Tagger',
    img: 'sentinel-tagger.png',
    signature: SIZE_SMALL,
    type: 'Light Vehicle',
    speed: 8,
    targeting: 6,
    defense: 14,
    scan: null,
    cm: 1,
    actions: [
        TAG_CANNON,
    ],
    traits: [],
})

export const SENTINEL_HUNTER = make({
    slug: 'sentinel_hunter',
    name: 'Sentinel',
    variant_name: 'Hunter',
    img: 'sentinel-hunter.png',
    signature: SIZE_SMALL,
    type: 'Light Vehicle',
    speed: 8,
    targeting: 6,
    defense: 14,
    scan: null,
    cm: 1,
    actions: [
        BASIC_SCAN,
        FUSION_CANNON,
    ],
    traits: [],
})

export const VIRAGO_TANK = make({
    slug: 'virago',
    name: 'Virago',
    img: 'virago.png',
    signature: SIZE_MEDIUM,
    type: 'Medium Vehicle',
    speed: 6,
    targeting: 6,
    defense: 13,
    scan: 6,
    cm: 2,
    actions: [
        BASIC_SCAN,
        MEDIUM_CANNON,
        PATROL,
    ],
    traits: [],
})

export const AURORA = make({
    slug: 'gsv_aurora',
    name: 'GSV',
    variant_name: 'Aurora',
    img: 'aurora.png',
    signature: SIZE_MEDIUM,
    type: 'Ground Support Vehicle',
    speed: 6,
    targeting: 5,
    defense: 13,
    scan: 6,
    cm: 1,
    actions: [
        BASIC_SCAN,
        CANNON,
        SHROUD,
    ],
    traits: [
        ADAPTIVE_CAMO,
        DEFENSE_AURA,
    ],
})

export const PHANTOM = make({
    slug: 'gsv_phantom',
    name: 'GSV',
    variant_name: 'Phantom',
    img: 'phantom.png',
    signature: SIZE_MEDIUM,
    type: 'Ground Support Vehicle',
    speed: 6,
    targeting: 5,
    defense: 13,
    scan: 6,
    cm: 1,
    actions: [
        BASIC_SCAN,
        DOUBLE_CANNON,
        TARGET_LOCK,
    ],
    traits: [
        ADAPTIVE_CAMO,
        AMBUSH,
    ],
})

export const GUARDIAN_MARKSMAN = make({
    slug: 'guardian_marksman',
    name: 'Guardian',
    variant_name: 'Marksman',
    img: 'guardian-marksman.png',
    signature: SIZE_LARGE,
    type: 'Heavy Vehicle',
    speed: 4,
    targeting: 6,
    defense: 13,
    scan: null,
    cm: '3+1',
    actions: [
        HMG,
        RAILGUN,
    ],
    traits: [
        HARDENED_CM,
        ALL_TERRAIN,
    ],
})

export const GUARDIAN_DESTROYER = make({
    slug: 'guardian_destroyer',
    name: 'Guardian',
    variant_name: 'Destroyer',
    img: 'guardian-destroyer.png',
    signature: SIZE_LARGE,
    type: 'Heavy Vehicle',
    speed: 4,
    targeting: 6,
    defense: 13,
    scan: null,
    cm: '3+1',
    actions: [
        HMG,
        SMART_MED_CANNON,
    ],
    traits: [
        SENTRY,
        HARDENED_CM,
        ALL_TERRAIN,
    ],
})

export const SPIDER_DRONE_INFILTRATOR = make({
    slug: 'spider_drone_pack',
    name: 'Spider Drone',
    variant_name: 'Infiltrator',
    squad_size: 2,
    img: 'spider-drone.png',
    signature: null,
    type: 'Robotic Infantry Squad',
    speed: 6,
    targeting: 6,
    defense: 14,
    scan: null,
    actions: [
        CLAWS,
        GO_DARK,
    ],
    traits: [
        STEALTHY_INFANTRY,
        ALL_TERRAIN,
    ],
    definitions: [
        NOTE_STEALTH_TOKEN,
    ],
})


export const SPIDER_DRONE_SOLDIER = make({
    slug: 'spider_drone_soldier',
    name: 'Spider Drone',
    variant_name: 'Solder',
    squad_size: 4,
    img: 'spider-drone.png',
    signature: SIZE_SMALL,
    type: 'Robotic Infantry Squad',
    speed: 6,
    targeting: 6,
    defense: 14,
    scan: null,
    actions: [
        CLAWS,
    ],
    traits: [
        ALL_TERRAIN,
    ],
    definitions: [],
})

export const RNR_INFANTRY = make({
    slug: 'rnr_team',
    name: 'R&R Team',
    signature: SIZE_SMALL,
    type: 'Human Infantry Squad',
    squad_size: 2,
    speed: 4,
    targeting: 7,
    defense: 14,
    scan: null,
    actions: [

        Object.assign({}, SHOCK_RIFLE, { note: null }),
        ADVANCED_CHARGES,
        REPAIR_RENCH,
    ],
    traits: [
        CLEAR_THE_WAY,
        ALL_TERRAIN,
    ],
})

export const COALITION_UNITS = [
    WIDOW_SCOUT,
    SENTINEL_TAGGER,
    SENTINEL_HUNTER,
    SPIDER_DRONE_INFILTRATOR,
    SPIDER_DRONE_SOLDIER,
    //RNR_INFANTRY,
    VIRAGO_TANK,
    AURORA,
    PHANTOM,
    GUARDIAN_DESTROYER,
    GUARDIAN_MARKSMAN,
]

export const COALITION_DEMO_UNITS = [
    WIDOW_SCOUT,
    SENTINEL_TAGGER,
    VIRAGO_TANK,
    PHANTOM,
    GUARDIAN_DESTROYER,
    SPIDER_DRONE_INFILTRATOR,
]

function make(unit) {
    unit = Object.assign({}, COALITION_CARD_DEFAULTS, unit)

    return makeUnit(unit)
}
