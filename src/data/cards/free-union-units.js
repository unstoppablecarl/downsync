import {
    ADVANCED_MG,
    ADVANCED_RPG,
    AI_HACK,
    CM_HACK,
    CYBER_KILL,
    DOUBLE_CANNON,
    HACK,
    MEDIUM_CANNON,
    SHOCK_AUTOCANNON,
    SMALL_ARMS,
    SMART_RPG,
} from '../cards-data/weapons.js'
import { FREE_UNION_FACTION_NAME, FREE_UNION_FACTION_SLUG, SIZE_LARGE, SIZE_MEDIUM, SIZE_SMALL } from '../constants.js'

import {
    ALL_TERRAIN,
    BREACH_LINK,
    BULLET_SPONGE_AURA,
    FREE_UNION_TRANSPORT,
    HIT_AND_RUN,
    HITCH_HIKER,
    MOUNTED_INFANTRY,
    SMALL_DECOY_PING,
    STEALTHY_INFANTRY,
} from '../cards-data/unit-traits.js'

import { SCAN, SCRAMBLE } from '../cards-data/actions.js'
import { makeUnit, modifyAction } from '../support/factories.js'
import { NOTE_BREACH_COUNTER } from '../definitions.js'
import { TAKE_UP } from '../cards-data/weapon-traits.js'

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
    squad_size: 4,
    speed: 4,
    scan: 7,
    targeting: 5,
    defense: 13,
    actions: [
        modifyAction(SMALL_ARMS, { team: '1-3' }),
        modifyAction(HACK, { team: '1-3' }),
        modifyAction(ADVANCED_RPG, { team: '4' }, [TAKE_UP]),
    ],
    traits: [
        STEALTHY_INFANTRY,
        HITCH_HIKER,
        ALL_TERRAIN,
    ],
    notes: [
        NOTE_BREACH_COUNTER,
    ],
})

export const TECHNICAL = make({
    slug: 'technical',
    name: 'Technical',
    img: null,
    signature: SIZE_SMALL,
    type: 'Light Vehicle',
    speed: 8,
    targeting: 5,
    defense: 14,
    scan: 7,
    cm: 1,
    actions: [
        SCAN(2, 12),
        SHOCK_AUTOCANNON,
        CM_HACK,
    ],
    traits: [
        SMALL_DECOY_PING,
        FREE_UNION_TRANSPORT,
    ],
    notes: [],
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
        DOUBLE_CANNON,
        SCRAMBLE,
    ],
    traits: [
        FREE_UNION_TRANSPORT,
    ],
    notes: [],
})

export const DRONE_WRANGLER_TEAM = make({
    slug: 'drone-wrangler',
    img: null,
    name: 'Drone Wrangler Team',
    signature: SIZE_MEDIUM,
    type: 'Human & Robotic Infantry Squad',
    squad_size: 3,
    speed: 5,
    targeting: 5,
    defense: 13,
    cm: 1,
    actions: [
        modifyAction(ADVANCED_MG, { team: '1' }),
        modifyAction(ADVANCED_RPG, { team: '2-3' }),
    ],
    traits: [
        BREACH_LINK,
        HITCH_HIKER,
        ALL_TERRAIN,
    ],
    notes: [],
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
        BREACH_LINK,
        ALL_TERRAIN,
    ],
})

export const WARDRIVER = make({
    slug: 'wardriver',
    name: 'Wardriver',
    img: null,
    signature: SIZE_MEDIUM,
    type: 'Medium Vehicle',
    speed: 7,
    scan: 8,
    targeting: null,
    defense: 13,
    cm: 2,
    actions: [
        SCAN(1, 12),
        AI_HACK,
        CYBER_KILL,
    ],
    traits: [
        ALL_TERRAIN,
    ],
    notes: [
        NOTE_BREACH_COUNTER,
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
        BREACH_LINK,
        ALL_TERRAIN,
        MOUNTED_INFANTRY,
    ],
})

export const BULLET_SPONGE = make({
    slug: 'bullet-sponge',
    name: 'Tortoise',
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
        BREACH_LINK,
        BULLET_SPONGE_AURA,
    ],
})

export const FREE_UNION_UNITS = [
    INFANTRY_SQUAD,
    TECHNICAL,
    SCRAMBLER,
    DRONE_WRANGLER_TEAM,
    MED_TANK,
    WARDRIVER,
    TANK_HUNTERS,
    BULLET_SPONGE,
]

function make(unit) {
    unit = Object.assign({}, FREE_UNION_DEFAULTS, unit)

    return makeUnit(unit)
}
