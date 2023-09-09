import {
    ADVANCED_MG,
    ADVANCED_RPG,
    CLOSE_SUPPORT_CANNON,
    CM_HACK,
    CYBER_ATTACK,
    DECOY_LAUNCHER,
    DOUBLE_CANNON,
    HMG,
    JAM_DRONE,
    MEDIUM_CANNON,
    MG,
    POSITION_HACK,
    RPG,
    SMALL_ARMS,
    SMART_BOMBS,
} from '../cards-data/weapons.js'
import { FREE_UNION_FACTION_NAME, FREE_UNION_FACTION_SLUG, SIZE_LARGE, SIZE_MEDIUM, SIZE_SMALL } from '../constants.js'

import {
    ALL_TERRAIN,
    BULLET_SPONGE_AURA,
    FREE_UNION_TAXI,
    HIT_AND_RUN,
    HITCH_HIKER,
    MOUNTED_INFANTRY,
    OBSCURED,
    QUICK,
    RESILIENT,
    SHROUD_AURA,
    SMALL_DECOY_PING,
    STEALTHY,
} from '../cards-data/unit-traits.js'

import { SCAN } from '../cards-data/actions.js'
import { makeAction, makeUnit, modifyAction } from '../support/factories.js'
import { STABILIZER, TRAIT_BREACH_EXPLOIT, TRAIT_TAKE_UP } from '../cards-data/weapon-traits.js'
import { NOTE_JAMMED } from '../definitions.js'

export const FREE_UNION_CARD_DEFAULTS = {
    faction: FREE_UNION_FACTION_NAME,
    faction_slug: FREE_UNION_FACTION_SLUG,
    faction_svg_sprite: 'faction_free_union',
}

export const INFANTRY_SQUAD = make({
    slug: 'infantry-squad',
    img: null,
    name: 'Infantry Squad',
    signature: SIZE_SMALL,
    type: 'Human Infantry Squad',
    squad_size: 3,
    speed: 4,
    scan: null,
    targeting: 5,
    defense: 13,
    actions: [
        modifyAction(SMALL_ARMS, { team: '1-2' }),
        modifyAction(RPG, {
            team: '3',
            rof: 2,
        }, [TRAIT_TAKE_UP]),
    ],
    traits: [
        STEALTHY,
        HITCH_HIKER,
        ALL_TERRAIN,
    ],
    notes: [],
})

export const DRONE_LAUNCHERS = make({
    slug: 'drone-launcher-squad',
    img: null,
    name: 'Drone Operator Team',
    signature: SIZE_SMALL,
    type: 'Human Infantry Team',
    squad_size: 1,
    speed: 4,
    scan: null,
    targeting: 6,
    defense: 13,
    actions: [
        JAM_DRONE,
    ],
    traits: [
        STEALTHY,
        HITCH_HIKER,
        ALL_TERRAIN,
    ],
    notes: [
        NOTE_JAMMED,
    ],
})

export const BANDIT = make({
    slug: 'bandit',
    name: 'Bandit',
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
        MG,
        DECOY_LAUNCHER,
    ],
    traits: [
        //SCRAMBLE_AURA,
        OBSCURED,
        FREE_UNION_TAXI,
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
    targeting: null,
    defense: 14,
    scan: 7,
    cm: 1,
    actions: [
        SCAN(2, 12),
        CYBER_ATTACK,
        POSITION_HACK,
    ],
    traits: [
        FREE_UNION_TAXI,
        SMALL_DECOY_PING,
    ],
    notes: [],
})

export const BUGGY = make({
    slug: 'buggy',
    name: 'Buggy',
    img: null,
    signature: SIZE_SMALL,
    type: 'Light Vehicle',
    speed: 8,
    targeting: 6,
    defense: 14,
    scan: 7,
    cm: 1,
    actions: [
        SCAN(2, 12),
        CM_HACK,
        ADVANCED_MG,
    ],
    traits: [
        FREE_UNION_TAXI,
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
    targeting: 6,
    defense: 13,
    cm: 1,
    actions: [
        modifyAction(ADVANCED_MG, { team: '1' }),
        modifyAction(ADVANCED_RPG, { team: '2-3' }),
    ],
    traits: [
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
        modifyAction(MEDIUM_CANNON, {
            traits: [STABILIZER],
        }),
    ],
    traits: [
        HIT_AND_RUN,
        ALL_TERRAIN,
    ],
})

export const SUPPORT_TANK = make({
    slug: 'support-tank',
    name: 'Support Tank',
    img: null,
    signature: SIZE_MEDIUM,
    type: 'Medium Vehicle',
    speed: 7,
    scan: null,
    targeting: 6,
    defense: 13,
    cm: 2,
    actions: [
        DOUBLE_CANNON,
        HMG,
        //CM_HACK,
        //HUNTER_KILLER,
    ],
    traits: [
        ALL_TERRAIN,
        SHROUD_AURA,
    ],
    notes: [],
})

export const TANK_HUNTERS = make({
    slug: 'tank-hunters',
    name: 'Tank Hunters',
    img: null,
    signature: SIZE_LARGE,
    type: 'Mounted Infantry Squad',
    squad_size: 2,
    speed: 8,
    targeting: 6,
    defense: 14,
    cm: 2,
    actions: [
        SMART_BOMBS,
    ],
    traits: [
        ALL_TERRAIN,
        MOUNTED_INFANTRY,
    ],
})

export const TORTOISE = make({
    slug: 'tortoise',
    name: 'Tortoise',
    img: null,
    signature: SIZE_LARGE,
    type: 'Heavy Vehicle',
    speed: 7,
    targeting: 6,
    defense: 13,
    cm: 4,
    actions: [
        DOUBLE_CANNON,
        HMG,
    ],
    traits: [
        BULLET_SPONGE_AURA,
    ],
})

export const HEAVY_TANK = make({
    slug: 'heavy-tank',
    name: 'Heavy Tank',
    img: null,
    signature: SIZE_LARGE,
    type: 'Heavy Vehicle',
    speed: 7,
    targeting: 6,
    defense: 13,
    cm: 3,
    actions: [
        CLOSE_SUPPORT_CANNON,
    ],
    traits: [
        RESILIENT,
        ALL_TERRAIN,
    ],
})

export const ABILITY_IDEAS = make({
    slug: 'ability-ideas',
    name: 'Ability Ideas',
    img: null,
    //signature: SIZE_SMALL,
    type: 'Idea',
    //speed: 8,
    //targeting: 5,
    //defense: 14,
    //scan: 7,
    //cm: 1,
    actions: [
        makeAction({
            name: 'something',
            traits: [
                TRAIT_BREACH_EXPLOIT,
            ],
        }),
    ],
    traits: [
        QUICK,
    ],
    notes: [],
})

export const FREE_UNION_UNITS = [
    INFANTRY_SQUAD,
    DRONE_LAUNCHERS,
    BANDIT,
    TECHNICAL,
    //BUGGY,
    DRONE_WRANGLER_TEAM,
    MED_TANK,
    SUPPORT_TANK,
    TANK_HUNTERS,
    HEAVY_TANK,
    //TORTOISE,
    //ABILITY_IDEAS,
]

function make(unit) {
    unit = Object.assign({}, FREE_UNION_CARD_DEFAULTS, unit)

    return makeUnit(unit)
}
