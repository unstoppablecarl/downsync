import {
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
    SMART_MED_CANNON,
    SMART_SMALL_ARMS,
    TAG_CANNON,
    TARGET_LOCK,
} from '../cards-data/weapons.js'
import { SIZE_LARGE, SIZE_MEDIUM, SIZE_SMALL, TYPE_VEHICLE } from '../constants.js'

import {
    ADAPTIVE_CAMO,
    ALL_TERRAIN,
    AMBUSH,
    CLEAR_THE_WAY,
    DEFENSE_AURA,
    GO_DARK_ON_REFRESH,
    REVEAL_AND_DEPLOY,
    SENTRY,
} from '../cards-data/unit-traits.js'

import { NOTE_STEALTH_TOKEN, SHROUD_TEMPLATE } from '../definitions.js'
import { BASIC_SCAN, GO_DARK, PATROL, SCAN, SHROUD, SPOTTER } from '../cards-data/actions.js'
import { makeUnit } from '../support/factories.js'

export const COALITION_CARD_DEFAULTS = {
    faction: 'Coalition',
    icon: 'factions/icon-coalition.svg',
}

export const RECON_SCOUT = make({
    slug: 'scout',
    name: 'Widow Scout',
    bg: 'scout.png',
    signature: SIZE_SMALL,
    type: 'Light Recon ' + TYPE_VEHICLE,
    speed: 8,
    targeting: 5,
    defense: 14,
    scan: 7,
    cm: 1,
    cm_regen: 1,
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
    bg: 'sentinel-tagger.png',
    signature: SIZE_SMALL,
    type: 'Light ' + TYPE_VEHICLE,
    speed: 8,
    targeting: 6,
    defense: 14,
    scan: null,
    cm: 1,
    cm_regen: 1,
    actions: [
        TAG_CANNON,
    ],
    traits: [],
})

export const SENTINEL_HUNTER = make({
    slug: 'sentinel_hunter',
    name: 'Sentinel',
    variant_name: 'Hunter',
    bg: 'sentinel-hunter.png',
    signature: SIZE_SMALL,
    type: 'Light ' + TYPE_VEHICLE,
    speed: 8,
    targeting: 7,
    defense: 14,
    scan: 7,
    cm: 1,
    cm_regen: 1,
    actions: [
        BASIC_SCAN,
        FUSION_CANNON,
    ],
    traits: [],
})

export const VIRAGO_TANK = make({
    slug: 'virago',
    name: 'Virago',
    bg: 'virago.png',
    signature: SIZE_MEDIUM,
    type: 'Medium Tank',
    speed: 6,
    targeting: 6,
    defense: 13,
    scan: 6,
    cm: 2,
    cm_regen: 2,
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
    bg: 'aurora.png',
    signature: SIZE_MEDIUM,
    type: 'Ground Support ' + TYPE_VEHICLE,
    speed: 6,
    targeting: 7,
    defense: 13,
    scan: 6,
    cm: 1,
    cm_regen: 1,
    actions: [
        BASIC_SCAN,
        CANNON,
        SHROUD(12, 1),
    ],
    traits: [
        ADAPTIVE_CAMO,
        DEFENSE_AURA,
    ],
    definitions: [
        SHROUD_TEMPLATE,
    ],
})

export const PHANTOM = make({
    slug: 'gsv_phantom',
    name: 'GSV',
    variant_name: 'Phantom',
    bg: 'phantom.png',
    signature: SIZE_MEDIUM,
    type: 'Ground Support ' + TYPE_VEHICLE,
    speed: 6,
    targeting: 5,
    defense: 13,
    scan: 6,
    cm: 1,
    cm_regen: 1,
    actions: [
        BASIC_SCAN,
        DOUBLE_CANNON,
        TARGET_LOCK,
    ],
    traits: [
        ADAPTIVE_CAMO,
        AMBUSH,
        //AMBUSH_COORDINATOR,
    ],
})

export const GUARDIAN_MARKSMAN = make({
    slug: 'guardian_marksman',
    name: 'Guardian',
    variant_name: 'Marksman',
    bg: 'guardian-marksman.png',
    signature: SIZE_LARGE,
    type: 'Heavy Tank',
    speed: 4,
    targeting: 7,
    defense: 12,
    scan: null,
    cm: 3,
    cm_regen: 2,
    actions: [
        HMG,
        RAILGUN,
        SPOTTER,
    ],
    traits: [
        ALL_TERRAIN,
    ],
})

export const GUARDIAN_DESTROYER = make({
    slug: 'guardian_destroyer',
    name: 'Guardian',
    variant_name: 'Destroyer',
    bg: 'guardian-destroyer.png',
    signature: SIZE_LARGE,
    type: 'Heavy Tank',
    speed: 4,
    targeting: 6,
    defense: 13,
    scan: null,
    cm: 3,
    cm_regen: 3,
    actions: [
        HMG,
        SMART_MED_CANNON,
    ],
    traits: [
        SENTRY,
        ALL_TERRAIN,
    ],
})

export const SPIDER_DRONE_ASSASSIN = make({
    slug: 'spider_drone_pack',
    name: 'Spider Drone',
    bg: 'spider-drone.png',
    signature: SIZE_SMALL,
    type: 'Robotic Infantry',
    speed: 6,
    targeting: 6,
    defense: 14,
    scan: null,
    actions: [
        CLAWS,
        GO_DARK,
    ],
    traits: [
        GO_DARK_ON_REFRESH,
        ALL_TERRAIN,
    ],
    definitions: [
        NOTE_STEALTH_TOKEN,
    ],
})

export const RNR_INFANTRY = make({
    slug: 'rnr_team',
    name: 'R&R Team',
    signature: SIZE_SMALL,
    type: 'Rench & Rifle Infantry x 3',
    speed: 4,
    targeting: 7,
    defense: 14,
    scan: null,
    actions: [
        SMART_SMALL_ARMS,
        REPAIR_RENCH,
    ],
    traits: [
        CLEAR_THE_WAY,
        REVEAL_AND_DEPLOY(3, 'R&R Infantry'),
        ALL_TERRAIN,
    ],
})

export const COALITION_UNITS = [
    RECON_SCOUT,
    SENTINEL_TAGGER,
    SENTINEL_HUNTER,
    VIRAGO_TANK,
    AURORA,
    PHANTOM,
    GUARDIAN_DESTROYER,
    GUARDIAN_MARKSMAN,
    SPIDER_DRONE_ASSASSIN,
    RNR_INFANTRY,
]

export const COALITION_DEMO_UNITS = [
    RECON_SCOUT,
    SENTINEL_TAGGER,
    VIRAGO_TANK,
    PHANTOM,
    GUARDIAN_DESTROYER,
    SPIDER_DRONE_ASSASSIN,
]

function make(unit) {
    unit = Object.assign({}, COALITION_CARD_DEFAULTS, unit)

    return makeUnit(unit)
}
