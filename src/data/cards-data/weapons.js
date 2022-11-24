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
    TRAIT_TAGGED_EFFECT,
} from './weapon-traits.js'
import {
    COST_ACTION,
    COST_ACTION_AND_COMMAND,
    COST_ACTION_OR_COMMAND,
    COST_COMMAND,
    TYPE_INFANTRY,
} from '../constants.js'
import { DEADLY_VS } from './unit-traits.js'
import { keywordFormat } from '../support/text-formatters.js'
import { makeTrait } from '../support/factories.js'

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

export const DEPLOY_DRONES = make({
    name: 'Deploy Drones',
    cost: COST_COMMAND,
    range: 3,
    effect: '&starf;',
    traits: [
        makeTrait({
            name: 'Drone Carrier',
            note: 'Spider Drone x 2',
            desc: 'Place 2 Spider Drone Units within 3" of this Unit. The Spider Drones gain a Stealth Token and are not part of the current Taskforce. This action can be used once per game.',
        }),
    ],
})

export const TAG_CANNON = make({
    name: 'Tag Cannon',
    range: 16,
    rof: 2,
    effect: 'STUN',
    traits: [
        TRAIT_TAGGED_EFFECT,
    ],
})

export const TARGET_LOCK = make({
    name: 'Target Lock',
    cost: COST_COMMAND,
    rof: 1,
    effect: '&starf;',
    desc: 'Select an enemy Unit in LOS. It suffers -2 DEF until the end of this Taskforce Activation. A unit may only be Target Locked once. This action can be used once per activation.',
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

export const SHOCK_RIFLE = make({
    name: 'Shock Rifle',
    note: 'T1 and T2',
    range: 10,
    effect: 'STUN',
    rof: 1,
    traits: [
        DEADLY_VS(TYPE_INFANTRY),
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
    range: 12,
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

export const SMART_MED_CANNON = make({
    name: 'Smart Med. Cannon',
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

export const CLAWS = make({
    name: 'Claws',
    range: 1,
    rof: 1,
    traits: [
        TRAIT_SPECIALIZED_VS([TYPE_INFANTRY]),
        CLOSE_COMBAT,
    ],
})

export const GUIDED_MISSILE = make({
    name: 'Guided Missile',
    note: 'T3',
    cost: COST_ACTION_AND_COMMAND,
    range: 16,
    rof: 1,
    traits: [
        TRAIT_SMART,
    ],
})

export const MICRO_ARTILLERY = make({
    name: 'Micro Artillery',
    note: 'T3',
    range: 16,
    rof: 1,
    effect: 'KILL',
    traits: [
        TRAIT_INFANTRY_NETWORK,
    ],
})

export const SNIPER_RIFLE = make({
    name: 'Sniper Rifle',
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
        desc: 'This attack can only target an Infantry unit within 3" of your last attack target.',
    })

    return make(newWeapon)
}

function make(weapon) {

    let defaults = {
        target: 'Unit',
        effect: 'kill',
        traits: [],
        desc: '',
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

    result.desc = keywordFormat(result.desc)

    return result
}

export const makeWeapon = make
