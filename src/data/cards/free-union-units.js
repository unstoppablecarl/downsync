import {
    CLAWS,
    CYBER_ATTACK,
    DOUBLE_CANNON,
    MEDIUM_CANNON,
    MG,
    RPG,
    SMALL_ARMS,
    SMART_RPG,
} from '../cards-data/weapons.js'
import { FREE_UNION_FACTION_NAME, FREE_UNION_FACTION_SLUG, SIZE_LARGE, SIZE_MEDIUM, SIZE_SMALL } from '../constants.js'

import {
    ALL_TERRAIN,
    BULLET_SPONGE_AURA,
    HIT_AND_RUN,
    MOUNTED_INFANTRY,
    SMALL_DECOY_PING,
} from '../cards-data/unit-traits.js'

import { BASIC_SCAN, SCRAMBLE } from '../cards-data/actions.js'
import { makeUnit } from '../support/factories.js'
import { NOTE_COMPROMISE_COUNTERS } from '../definitions.js'

export const FREE_UNION_DEFAULTS = {
    faction: FREE_UNION_FACTION_NAME,
    faction_slug: FREE_UNION_FACTION_SLUG,
    icon: 'factions/icon-free-union.svg',
}

export const INFANTRY_SQUAD = make({
    slug: 'infantry-squad',
    img: null,
    name: 'Infantry Squad',
    signature: SIZE_SMALL,
    type: 'Human Infantry Squad',
    squad_size: 3,
    speed: 4,
    targeting: 5,
    defense: 13,
    actions: [
        SMALL_ARMS,
        RPG,
    ],
    traits: [
        ALL_TERRAIN,
    ],
    notes: [],
})

export const SPIDER_DRONE_WRANGLER = make({
    slug: 'drone-wrangler',
    img: null,
    name: 'Drone Wrangler',
    signature: SIZE_MEDIUM,
    type: 'Human & Robotic Infantry Squad',
    squad_size: 3,
    speed: 5,
    targeting: 7,
    defense: 13,
    cm: 1,
    actions: [
        Object.assign({}, SMALL_ARMS, { note: 'Team 1, ' + SMALL_ARMS.note }),
        Object.assign({}, CLAWS, { note: 'Teams 2-3' }),
        Object.assign({}, RPG, { note: 'Teams 2-3' }),
    ],
    traits: [
        ALL_TERRAIN,
    ],
    notes: [],
})

export const TECHNICAL = make({
    slug: 'technical',
    name: 'Technical',
    img: null,
    signature: SIZE_SMALL,
    type: 'Light Vehicle',
    speed: 8,
    targeting: 6,
    defense: 14,
    scan: 6,
    cm: 1,
    actions: [
        BASIC_SCAN,
        MG,
        CYBER_ATTACK,
    ],
    traits: [
        SMALL_DECOY_PING,
    ],
    notes: [
        NOTE_COMPROMISE_COUNTERS,
    ],
})

export const SCRAMBLER = make({
    slug: 'scrambler',
    name: 'Scrambler',
    img: null,
    signature: SIZE_SMALL,
    type: 'Light Support Vehicle',
    speed: 8,
    targeting: 6,
    defense: 14,
    scan: null,
    cm: 1,
    actions: [
        MG,
        CYBER_ATTACK,
        SCRAMBLE,
    ],
    traits: [],
    notes: [
        NOTE_COMPROMISE_COUNTERS,
    ],
})

export const MED_TANK = make({
    slug: 'med-tank',
    name: 'Med Tank',
    img: null,
    signature: SIZE_MEDIUM,
    type: 'Medium Vehicle',
    speed: 7,
    targeting: 6,
    defense: 13,
    cm: 2,
    actions: [
        MEDIUM_CANNON,
    ],
    traits: [
        HIT_AND_RUN,
        ALL_TERRAIN,
    ],
})

export const TANK_HUNTERS = make({
    slug: 'tank-hunters',
    name: 'Tank Hunters',
    img: null,
    signature: SIZE_LARGE,
    type: 'Mounted Infantry Squad',
    squad_size: 3,
    speed: 8,
    targeting: 6,
    defense: 13,
    cm: 2,
    actions: [
        SMART_RPG,
    ],
    traits: [
        ALL_TERRAIN,
        //STEALTHY_INFANTRY,
        MOUNTED_INFANTRY,
    ],
})

export const BULLET_SPONGE = make({
    slug: 'bullet-sponge',
    name: 'Bullet Sponge',
    img: null,
    signature: SIZE_LARGE,
    type: 'Heavy Vehicle',
    speed: 6,
    targeting: 6,
    defense: 13,
    cm: 4,
    actions: [
        DOUBLE_CANNON,
    ],
    traits: [
        BULLET_SPONGE_AURA,
    ],
})

export const FREE_UNION_UNITS = [
    INFANTRY_SQUAD,
    TECHNICAL,
    SCRAMBLER,
    SPIDER_DRONE_WRANGLER,
    MED_TANK,
    TANK_HUNTERS,
    BULLET_SPONGE,
]

function make(unit) {
    unit = Object.assign({}, FREE_UNION_DEFAULTS, unit)

    return makeUnit(unit)
}
