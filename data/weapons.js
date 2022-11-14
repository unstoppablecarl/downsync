import {
    CLOSE_COMBAT,
    EXTREME_RANGE,
    TRAIT_ADVANCED,
    TRAIT_CLUSTERED,
    TRAIT_FIRE_SUPPORT,
    TRAIT_INFANTRY_NETWORK,
    TRAIT_OVERKILL,
    TRAIT_SMART,
    TRAIT_SPECIALIZED_VS,
    TRAIT_TARGET_LOCK_EFFECT,
} from './weapon-traits.js'
import { TYPE_INFANTRY } from './constants.js'
import { COST_ACTION, COST_ACTION_AND_COMMAND, COST_ACTION_OR_COMMAND, COST_COMMAND } from './costs.js'
import { DEADLY_VS } from './traits.js'

export const CANNON = make({
    name: 'Cannon',
    range: 16,
    rof: 1,
})

export const DOUBLE_CANNON = make({
    name: 'Double Cannon',
    range: 16,
    rof: 2,
})

export const MEDIUM_CANNON = make({
    name: 'Medium Cannon',
    range: 24,
    rof: 2,
    traits: [],
})

export const TAGGING_AUTOCANNON = make({
    name: 'Tagging Autocannon',
    cost: COST_ACTION_OR_COMMAND,
    range: 16,
    rof: 3,
    effect: 'lock',
    traits: [
        TRAIT_TARGET_LOCK_EFFECT,
    ],
})

export const LMG = make({
    name: 'LMG',
    note: 'VS Infantry only',
    cost: COST_ACTION,
    range: 12,
    rof: 1,
    traits: [],
})


export const MG = make({
    name: 'MG',
    note: 'VS Infantry only',
    cost: COST_ACTION,
    range: 12,
    rof: 2,
    traits: [],
})

export const HMG = make({
    name: 'HMG',
    note: 'VS Infantry only',
    range: 12,
    rof: 3,
    traits: [],
})

export const SMALL_ARMS = make({
    name: 'Small Arms',
    range: 6,
    rof: 2,
})

export const ADVANCED_SMALL_ARMS = make({
    name: 'Adv. Small Arms',
    range: 6,
    rof: 2,
    traits: [
        TRAIT_ADVANCED,
    ],
})

export const SMART_SMALL_ARMS = make({
    name: 'Smart Small Arms',
    range: 6,
    rof: 2,
    traits: [
        TRAIT_SMART,
    ],
})

export const ADVANCED_CANNON = make({
    name: 'Advanced Cannon',
    range: 16,
    rof: 1,
    traits: [
        TRAIT_ADVANCED,
    ],
})

export const SHOCK_AUTOCANNON = make({
    name: 'Shock Autocannon',
    range: 16,
    rof: 2,
    effect: 'STUN',
    traits: [
        DEADLY_VS(TYPE_INFANTRY),
    ],
})

export const FUSION_CANNON = make({
    name: 'Fusion Cannon',
    range: 10,
    rof: 1,
    traits: [
        TRAIT_SMART,
    ],
})

export const HEAVY_ARTILLERY = make({
    name: 'Heavy Artillery',
    cost: COST_ACTION_AND_COMMAND,
    range: null,
    rof: 3,
    traits: [
        TRAIT_FIRE_SUPPORT,
        EXTREME_RANGE,
        TRAIT_CLUSTERED(3),
    ],
})


export const CONCUSSION_ARTILLERY = make({
    name: 'Concussion Artillery',
    range: null,
    rof: 4,
    effect: 'STUN',
    traits: [
        TRAIT_FIRE_SUPPORT,
        EXTREME_RANGE,
        TRAIT_CLUSTERED(6),
    ],
})

export const REPAIR_RENCH = make({
    name: 'Repair Rench',
    cost: COST_ACTION_OR_COMMAND,
    range: 4,
    effect: '&starf;',
    desc: 'Remove a STUN Token from a friendly Unit within 4".',
})

export const RAILGUN = make({
    name: 'Railgun',
    range: null,
    rof: 1,
    traits: [
        TRAIT_OVERKILL,
        EXTREME_RANGE,
    ],
})

export const TANK_DESTROYER_CANNON = make({
    name: 'Smart Medium Cannon',
    range: 24,
    rof: 2,
    traits: [
        TRAIT_SMART,
    ],
})

export const INFANTRY_PARTICLE_RIFLE = make({
    name: 'Particle Rifle',
    range: 12,
    rof: 2,
    effect: 'Kill',
    traits: [
        TRAIT_SMART,
    ],
})

export const HEAVY_AUTO_CANNON = make({
    name: 'Heavy Auto Cannon',
    range: 24,
    rof: 3,
    traits: [
        TRAIT_ADVANCED,
    ],
})

export const POWER_TOOLS = make({
    name: 'Power Tools',
    range: 1,
    rof: 1,
    traits: [
        TRAIT_SMART,
        TRAIT_SPECIALIZED_VS([TYPE_INFANTRY]),
        CLOSE_COMBAT,
    ],
})

export const INFANTRY_GUIDED_MISSILE = make({
    name: 'Guided Missile',
    cost: COST_ACTION_AND_COMMAND,
    range: 16,
    rof: 1,
    traits: [
        TRAIT_SMART,
    ],
})

export const MICRO_ARTILLERY = make({
    name: 'Shock Micro Artillery',
    range: 16,
    rof: 2,
    effect: 'STUN',
    traits: [
        DEADLY_VS('Infantry'),
        TRAIT_INFANTRY_NETWORK,
    ],
})


export const SHOCK_RIFLE = make({
    name: 'Shock Rifle',
    range: 24,
    rof: 2,
    effect: 'STUN',
    traits: [
        DEADLY_VS('Infantry'),
    ],
})


export function SNAP_FIRE(weapon) {

    let newWeapon = Object.assign({}, weapon, {
        name: 'Snap Fire',
        cost: COST_COMMAND,
        rof: 1,
    })

    return make(newWeapon)
}

function make(weapon) {

    let defaults = {
        target: 'Unit',
        effect: 'kill',
        traits: [],
    }

    let result = Object.assign(defaults, weapon)

    if (!result.cost) {
        result.cost = {
            [COST_ACTION]: true,
        }
    } else {
        result.cost = {
            [result.cost]: true,
        }
    }

    result.traits.map((trait) => Object.assign({}, trait))

    return result
}
