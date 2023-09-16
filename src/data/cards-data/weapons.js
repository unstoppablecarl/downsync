import {
    DEADLY_VS,
    TRAIT_ADVANCED,
    TRAIT_CLOSE_AND_PERSONAL,
    TRAIT_CLOSE_COMBAT,
    TRAIT_CLUSTERED,
    TRAIT_DOUBLE_TAP,
    TRAIT_EXPOSED,
    TRAIT_EXTREME_RANGE,
    TRAIT_FIRE_SUPPORT,
    TRAIT_INFANTRY_NETWORK,
    TRAIT_OVERKILL,
    TRAIT_SEEKER_ROUNDS,
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
import { makeTrait, makeWeapon, modifyAction } from '../support/factories.js'
import { oncePerActivation } from './actions.js'

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

export const CLOSE_MEDIUM_CANNON = modifyAction(MEDIUM_CANNON, {
    name: 'Close Medium Cannon',
    traits: [
        TRAIT_CLOSE_AND_PERSONAL,
    ],
})

export const DEPLOY_DRONES = make({
    name: 'Deploy Drones',
    cost: COST_COMMAND,
    effect: '&starf;',
    desc: 'Place the Infantry Bases of a Spider Drone: Infiltrator Unit within 3" of this Unit. They are not part of the current Taskforce. This Unit may use this Action once per game.',
    desc_keywords_after: ['Spider Drone: Infiltrator'],
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
    effect: '&starf;',
    desc: `Select an enemy Unit in LOS. It suffers -2 DEF until the end of this Taskforce Activation. A Unit can only be Target Locked once. ${oncePerActivation}`,
    desc_keywords_before: ['Target Locked'],
})

export const MG = make({
    name: 'MG',
    limitation: 'VS Infantry only',
    cost: COST_ACTION,
    range: 12,
    rof: 2,
    traits: [],
})

export const ADVANCED_MG = modifyAction(MG, {
    name: 'Adv. MG',
    traits: [TRAIT_ADVANCED],
})

export const HMG = make({
    name: 'HMG',
    limitation: 'VS Infantry only',
    range: 12,
    rof: 3,
    traits: [],
})

export const CYBER_ATTACK = make({
    name: 'Cyber Attack',
    cost: COST_ACTION,
    stat: 'SCAN',
    range: 16,
    rof: 2,
    effect: 'STUN',
    traits: [],
})

export const CM_HACK = make({
    name: 'CM Hack',
    stat: 'SCAN',
    cost: COST_ACTION_OR_COMMAND,
    range: 16,
    rof: 2,
    effect: '&starf;',
    desc: `Units hit by this weapon resolve a CM check for each CM (not Emergency CM) it has and removes a CM for each failed check. Multi-Base Units must resolve checks for each Infantry Base separately. ${oncePerActivation}`,
})

export const POSITION_HACK = make({
    name: 'Position Hack',
    limitation: 'VS Veh. Only',
    stat: 'SCAN',
    cost: COST_COMMAND,
    range: 16,
    rof: 1,
    effect: '&starf;',
    desc: `Units hit by this attack are Placed within 3" of their current position by the attacker's Controlling Player. ${oncePerActivation}`,
    traits: [],
})

export const DECOY_LAUNCHER = make({
    name: 'Decoy Launcher',
    range: 12,
    rof: 2,
    effect: 'STUN',
    traits: [
        makeTrait({
            name: 'CM Magnet',
            desc: 'Units hit by this weapon must attempt to negate the effect if possible with CM until it has no CM left or it has negated the effect. Excluding Emergency CM.',
        }),
    ],
})

export const SHOCK_RIFLE = make({
    name: 'Shock Rifle',
    range: 10,
    effect: 'STUN',
    rof: 1,
    traits: [
        DEADLY_VS(TYPE_INFANTRY),
    ],
})

export const ADVANCED_CHARGES = make({
    name: 'Adv. Charges',
    range: 6,
    rof: 1,
    traits: [
        TRAIT_ADVANCED,
    ],
})

export const SMALL_ARMS = make({
    name: 'Rifle',
    range: 12,
    limitation: 'VS Infantry only',
    rof: 1,
    traits: [],
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
    range: 8,
    rof: 1,
    traits: [
        TRAIT_SMART,
    ],
})

export const HEAVY_ARTILLERY = make({
    name: 'Heavy Artillery',
    cost: COST_ACTION_AND_COMMAND,
    range: null,
    rof: 4,
    traits: [
        TRAIT_FIRE_SUPPORT,
        TRAIT_EXTREME_RANGE,
        TRAIT_CLUSTERED(3),
    ],
})

export const SHOCK_ARTILLERY = make({
    name: 'Shock Artillery',
    range: null,
    rof: 4,
    effect: 'STUN',
    traits: [
        TRAIT_FIRE_SUPPORT,
        TRAIT_EXTREME_RANGE,
        TRAIT_CLUSTERED(6),
        DEADLY_VS(TYPE_INFANTRY),
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
        TRAIT_EXTREME_RANGE,
    ],
})

export const SMART_MED_CANNON = make({
    name: 'Smart Medium Cannon',
    range: 24,
    rof: 2,
    traits: [
        TRAIT_SMART,
    ],
})

export const INFANTRY_PARTICLE_RIFLE = make({
    name: 'Particle Rifle',
    limitation: 'VS Infantry only',
    range: 10,
    rof: 2,
    effect: 'Kill',
    traits: [
        TRAIT_SMART,
    ],
})

export const INFANTRY_PARTICLE_RIFLE_OVERCHARGE = make({
    name: 'Particle Rifle Overcharge',
    range: 10,
    rof: 1,
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
        TRAIT_CLOSE_COMBAT,
    ],
})

export const AT_CHARGES = make({
    name: 'AT Charges',
    limitation: 'VS Vehicles only',
    range: 6,
    rof: 1,
    traits: [
        TRAIT_ADVANCED,
        TRAIT_CLOSE_COMBAT,
    ],
})

export const MICRO_ARTILLERY = make({
    name: 'Micro Artillery',
    range: 16,
    rof: 1,
    effect: 'KILL',
    traits: [
        TRAIT_INFANTRY_NETWORK,
        TRAIT_ADVANCED,
    ],
})

export const JAM_DRONE = make({
    name: 'Launch Jam Drone',
    //stat: 'SCAN',
    range: 16,
    rof: 2,
    effect: 'JAM',
    traits: [
        TRAIT_EXPOSED,
    ],
})

export const RPG = make({
    name: 'RPG',
    range: 10,
    rof: 1,
    effect: 'KILL',
    traits: [
        TRAIT_CLOSE_AND_PERSONAL,
    ],
})

export const ADVANCED_RPG = modifyAction(RPG, {
    name: 'Adv. RPG',
}, [
    TRAIT_ADVANCED,
])

export const SHOCK_SNIPER_RIFLE = make({
    name: 'Shock Sniper Rifle',
    range: 24,
    rof: 2,
    effect: 'STUN',
    traits: [
        DEADLY_VS('Infantry'),
        TRAIT_DOUBLE_TAP,
    ],
})

export const SMART_BOMBS = make({
    name: 'Smart Bombs',
    range: 10,
    rof: 1,
    effect: 'KILL',
    traits: [
        TRAIT_SMART,
    ],
})

export const CLOSE_SUPPORT_CANNON = make({
    name: 'Close Support Cannon',
    range: 16,
    rof: 3,
    effect: 'KILL',
    traits: [
        TRAIT_CLUSTERED(3),
        TRAIT_SEEKER_ROUNDS,
        TRAIT_ADVANCED,
    ],
})

function make(weapon) {

    return makeWeapon(weapon)
}
