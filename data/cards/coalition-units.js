import {
    CANNON,
    DOUBLE_CANNON,
    FUSION_CANNON,
    HMG,
    MEDIUM_CANNON,
    MG,
    POWER_TOOLS,
    RAILGUN,
    REPAIR_RENCH,
    SMART_SMALL_ARMS,
    TAGGING_AUTOCANNON,
    TANK_DESTROYER_CANNON,
} from '../weapons.js'
import { SIZE_LARGE, SIZE_MEDIUM, SIZE_SMALL, TYPE_VEHICLE } from '../constants.js'

import {
    ACTIVE_CAMO,
    ALL_TERRAIN,
    AMBUSH,
    AMBUSH_COORDINATOR,
    CLEAR_THE_WAY,
    DEFENSE_AURA,
    PATROL,
    REVEAL_AND_DEPLOY,
    RUSH,
    SCATTER,
    SENTRY,
} from '../traits.js'

import { SHROUD_TEMPLATE } from '../definitions.js'
import { BASIC_SCAN, SCAN, SHROUD, SPOTTER } from '../actions.js'
import { makeUnit } from '../units.js'

export const RECON_SCOUT = make({
    slug: 'scout',
    name: 'Scout',
    bg: 'scout.png',
    signature: SIZE_SMALL,
    type: 'Light Recon ' + TYPE_VEHICLE,
    speed: 8,
    targeting: 7,
    defense: 14,
    scan: 8,
    cm: 1,
    actions: [
        SCAN(3, 12),
        MG,
    ],
    traits: [],
})

export const SENTINEL_TAGGER = make({
    slug: 'sentinel_tagger',
    name: 'Sentinel: Tagger',
    bg: 'sentinel-tagger.png',
    signature: SIZE_SMALL,
    type: 'Light ' + TYPE_VEHICLE,
    speed: 8,
    targeting: 7,
    defense: 14,
    scan: 7,
    cm: 1,
    actions: [
        BASIC_SCAN,
        CANNON,
        TAGGING_AUTOCANNON,
    ],
    traits: [],
})

export const SENTINEL_HUNTER = make({
    slug: 'sentinel_hunter',
    name: 'Sentinel: Hunter',
    bg: 'sentinel-hunter.png',
    signature: SIZE_SMALL,
    type: 'Light ' + TYPE_VEHICLE,
    speed: 8,
    targeting: 7,
    defense: 14,
    scan: 7,
    cm: 1,
    actions: [
        BASIC_SCAN,
        FUSION_CANNON,
    ],
    traits: [
        //SPEED_BOOST,
    ],
})

export const VIRAGO_TANK = make({
    slug: 'virago',
    name: 'Virago',
    bg: 'virago.png',
    signature: SIZE_MEDIUM,
    type: 'Medium Tank',
    speed: 6,
    targeting: 7,
    defense: 13,
    scan: 6,
    cm: 2,
    cm_regen: 1,
    actions: [
        BASIC_SCAN,
        MEDIUM_CANNON,
    ],
    traits: [
        PATROL,
    ],
})

export const AURORA = make({
    slug: 'gsv_aurora',
    name: 'GSV: Aurora',
    bg: 'aurora.png',
    signature: SIZE_MEDIUM,
    type: 'Support ' + TYPE_VEHICLE,
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
        DEFENSE_AURA,
        ACTIVE_CAMO,
    ],
    definitions: [
        SHROUD_TEMPLATE,
    ],
})

export const PHANTOM = make({
    slug: 'gsv_phantom',
    name: 'GSV: Phantom',
    bg: 'phantom.png',
    signature: SIZE_MEDIUM,
    type: 'Stealth Support ' + TYPE_VEHICLE,
    speed: 6,
    targeting: 7,
    defense: 13,
    scan: 6,
    cm: 1,
    cm_regen: 1,
    actions: [
        BASIC_SCAN,
        DOUBLE_CANNON,
    ],
    traits: [
        ACTIVE_CAMO,
        AMBUSH,
        AMBUSH_COORDINATOR,
    ],
})

export const GUARDIAN_MARKSMAN = make({
    slug: 'guardian_marksman',
    name: 'Guardian: Marksman',
    bg: 'guardian-marksman.png',
    signature: SIZE_LARGE,
    type: 'Heavy Tank',
    speed: 4,
    targeting: 7,
    defense: 12,
    scan: null,
    cm: 3,
    cm_regen: 1,
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
    name: 'Guardian: Destroyer',
    bg: 'guardian-destroyer.png',
    signature: SIZE_LARGE,
    type: 'Heavy Tank',
    speed: 4,
    targeting: 7,
    defense: 12,
    scan: null,
    cm: 3,
    cm_regen: 1,
    actions: [
        HMG,
        TANK_DESTROYER_CANNON,
    ],
    traits: [
        SENTRY,
        ALL_TERRAIN,
    ],
})

export const SPIDER_DRONE_INFANTRY = make({
    slug: 'spider_drone_pack',
    name: 'Spider Drone Pack',
    bg: 'spider-drone.png',
    signature: SIZE_SMALL,
    type: 'Robotic Infantry x 4',
    speed: 5,
    targeting: 7,
    defense: 14,
    scan: null,
    actions: [
        POWER_TOOLS,
    ],
    traits: [
        REVEAL_AND_DEPLOY(4, 'Spider Drone'),
        SCATTER,
        RUSH,
        ALL_TERRAIN,
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
        REVEAL_AND_DEPLOY(3, 'R&R Infantry'),
        CLEAR_THE_WAY,
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
    SPIDER_DRONE_INFANTRY,
    //RNR_INFANTRY,
]

function make(unit) {
    const defaults = {
        faction: 'Coalition',
        icon: 'assets/icon-coalition.svg',
    }

    unit = Object.assign({}, defaults, unit)

    return makeUnit(unit)
}
