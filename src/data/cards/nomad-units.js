import {
    CLAWS,
    CYBER_ATTACK,
    DOUBLE_CANNON,
    GUIDED_MISSILE,
    MEDIUM_CANNON,
    MG,
    RPG,
    SMALL_ARMS,
} from '../cards-data/weapons.js'
import { NOMAD_FACTION_NAME, NOMAD_FACTION_SLUG, SIZE_LARGE, SIZE_MEDIUM, SIZE_SMALL } from '../constants.js'

import {
    ALL_TERRAIN,
    BULLET_SPONGE_AURA,
    DRONE_CONTROLLER,
    HIT_AND_RUN,
    PERSONAL_CM,
    SMALL_DECOY_PING,
    STEALTHY_INFANTRY,
} from '../cards-data/unit-traits.js'

import { BASIC_SCAN, GO_DARK, SCRAMBLE } from '../cards-data/actions.js'
import { makeUnit } from '../support/factories.js'
import { NOTE_COMPROMISE_COUNTERS } from '../definitions.js'

export const NOMAD_CARD_DEFAULTS = {
    faction: NOMAD_FACTION_NAME,
    faction_slug: NOMAD_FACTION_SLUG,
    icon: null,
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
        Object.assign({}, SMALL_ARMS, { note: 'Teams 1-2, vs inf. only' }),
        Object.assign({}, RPG, { note: 'Team 3, vs veh. only' }),
    ],
    traits: [
        ALL_TERRAIN,
    ],
    notes: [],
})

export const SPIDER_DRONE_WRANGLER = make({
    slug: 'spider-drone-wrangler',
    img: null,
    name: 'Spider Drone Wrangler',
    signature: SIZE_SMALL,
    type: 'Human & Robotic Infantry Squad',
    squad_size: 3,
    speed: 5,
    targeting: 6,
    defense: 13,
    actions: [
        Object.assign({}, CLAWS, { note: 'Teams 2-3' }),
        Object.assign({}, RPG, { note: 'Teams 2-3, vs veh. only' }),
    ],
    traits: [
        ALL_TERRAIN,
        DRONE_CONTROLLER,
        PERSONAL_CM,
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
    speed: 7,
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
    speed: 4,
    targeting: 6,
    defense: 13,
    cm: 2,
    actions: [
        MEDIUM_CANNON,
    ],
    traits: [
        HIT_AND_RUN,
    ],
})

export const TANK_HUNTERS = make({
    slug: 'tank-hunters',
    name: 'Tank Hunters',
    img: null,
    signature: SIZE_MEDIUM,
    type: 'Human Infantry Squad',
    squad_size: 2,
    speed: 4,
    targeting: 6,
    defense: 13,
    cm: null,
    actions: [
        GUIDED_MISSILE,
        GO_DARK,
    ],
    traits: [
        ALL_TERRAIN,
        STEALTHY_INFANTRY,
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

export const NOMAD_UNITS = [
    INFANTRY_SQUAD,
    SPIDER_DRONE_WRANGLER,
    TECHNICAL,
    SCRAMBLER,
    MED_TANK,
    TANK_HUNTERS,
    BULLET_SPONGE,
]

function make(unit) {
    unit = Object.assign({}, NOMAD_CARD_DEFAULTS, unit)

    return makeUnit(unit)
}
