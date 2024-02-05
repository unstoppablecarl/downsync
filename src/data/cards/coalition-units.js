import {
    ADVANCED_CHARGES,
    CANNON,
    CLAWS,
    CLOSE_MEDIUM_CANNON,
    DEPLOY_DRONES,
    DOUBLE_CANNON,
    FUSION_CANNON,
    HMG,
    MG,
    RAILGUN,
    REPAIR_RENCH,
    SHOCK_RIFLE,
    SMART_MED_CANNON,
    TAG_CANNON,
    TARGET_LOCK,
} from '../cards-data/weapons.js'
import {
    COALITION_FACTION,
    COALITION_FACTION_NAME,
    COALITION_FACTION_SLUG,
    COALITION_FACTION_SVG_SPRITE,
    SIZE_LARGE,
    SIZE_MEDIUM,
    SIZE_SMALL,
} from '../constants.js'

import {
    ADAPTIVE_CAMO,
    ALL_TERRAIN,
    AMBUSH,
    CLEAR_THE_WAY,
    DEFENSE_AURA,
    EMERGENCY_CM,
    SENTRY,
    SHROUD_AURA,
    SPIDER_DRONE_INFILTRATOR_CARRIER,
    STEALTHY,
    WIDOW_SCOUT_CARRIED,
} from '../cards-data/unit-traits.js'

import { NOTE_STEALTH_TOKEN } from '../definitions.js'
import { BASIC_SCAN, GO_DARK, SCAN, SPRINT } from '../cards-data/actions.js'
import { makeUnit } from '../support/factories.js'

export const COALITION_CARD_DEFAULTS = {
    faction: COALITION_FACTION_NAME,
    faction_slug: COALITION_FACTION_SLUG,
    faction_svg_sprite: COALITION_FACTION_SVG_SPRITE,
}

export const WIDOW_SCOUT = make({
    slug: 'widow-scout',
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
    traits: [
        SPIDER_DRONE_INFILTRATOR_CARRIER,
    ],
})

export const SENTINEL_TAGGER = make({
    slug: 'sentinel-tagger',
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
    slug: 'sentinel-hunter',
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
    cm: 2,
    actions: [
        CLOSE_MEDIUM_CANNON,
    ],
    traits: [],
})

export const AURORA = make({
    slug: 'gsv-aurora',
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
        //CM_AURA,
    ],
    traits: [
        ADAPTIVE_CAMO,
        SHROUD_AURA,
        DEFENSE_AURA,
    ],
})

export const PHANTOM = make({
    slug: 'gsv-phantom',
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
    slug: 'guardian-marksman',
    name: 'Guardian',
    variant_name: 'Marksman',
    img: 'guardian-marksman.png',
    signature: SIZE_LARGE,
    type: 'Heavy Vehicle',
    speed: 5,
    targeting: 6,
    defense: 13,
    scan: null,
    cm: '3+1',
    actions: [
        HMG,
        RAILGUN,
    ],
    traits: [
        SENTRY,
        EMERGENCY_CM,
        ALL_TERRAIN,
    ],
})

export const GUARDIAN_DESTROYER = make({
    slug: 'guardian-destroyer',
    name: 'Guardian',
    variant_name: 'Destroyer',
    img: 'guardian-destroyer.png',
    signature: SIZE_LARGE,
    type: 'Heavy Vehicle',
    speed: 5,
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
        EMERGENCY_CM,
        ALL_TERRAIN,
    ],
})

export const SPIDER_DRONE_INFILTRATOR = make({
    slug: 'spider-drone-infiltrator',
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
        STEALTHY,
        ALL_TERRAIN,
        WIDOW_SCOUT_CARRIED,
    ],
    notes: [
        NOTE_STEALTH_TOKEN,
    ],
})

export const SPIDER_DRONE_SOLDIER = make({
    slug: 'spider-drone-soldier',
    name: 'Spider Drone',
    variant_name: 'Soldier',
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
        SPRINT,
    ],
    traits: [
        ALL_TERRAIN,
    ],
})

export const RNR_INFANTRY = make({
    slug: 'rnr-team',
    name: 'R&R Team',
    signature: SIZE_SMALL,
    type: 'Human Infantry Squad',
    squad_size: 2,
    speed: 4,
    targeting: 7,
    defense: 14,
    scan: null,
    actions: [
        SHOCK_RIFLE,
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
    unit = Object.assign({}, COALITION_FACTION, unit)

    return makeUnit(unit)
}
