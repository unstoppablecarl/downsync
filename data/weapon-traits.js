import { keywordFormat } from './keywords.js'
import { joinTypes } from '../src/util.js'

export const TRAIT_FIRE_SUPPORT = make({
    name: 'Fire Support',
    desc: 'Eligible for the Forward Observe action.',
})

export const TRAIT_INDIRECT = make({
    name: 'Indirect',
    desc: 'Ignores LOS when used by Forward Observe.',
})

export const TRAIT_CLUSTERED = (radius) => {
    return make({
        name: 'Clustered',
        note: `${radius}"`,
        desc: `Before resolving this action, select a point within range and LOS. Only units within ${radius}" of this point may be targeted. Declare all targets before resolving attacks.`,
    })
}

export const TRAIT_TARGET_LOCK_EFFECT = make({
    name: 'Target Lock',
    desc: 'Units hit by this weapon suffer the LOCK effect (-2 DEF until the end of this Taskforce Activation or Reaction Engagement). A unit can only be target locked once.',
})

export const TRAIT_LIMITED_VS = (types) => {
    return make({
        name: 'Limited',
        note: '-2 TARG',
        desc: `vs ${joinTypes(types)}.`,
    })
}

export const TRAIT_SPECIALIZED_VS = (types) => {
    return make({
        name: 'Specialized',
        note: '+2 TARG',
        desc: `vs ${joinTypes(types)}.`,
    })
}

export const TRAIT_SMART = make({
    name: 'Smart',
    desc: 'Countermeasure rolls attempting to negate this weapon\'s effect are successful on a 5+ (instead of 3+).',
})

export const TRAIT_ADVANCED = make({
    name: 'Advanced',
    desc: 'The first Countermeasure roll attempting to negate the effect of an attack from this weapon is successful on a 5+ (instead of 3+).',
})

export const EXTREME_RANGE = make({
    name: 'Extreme Range',
    desc: 'Ignores short and long range modifiers.',
})

export const CLOSE_COMBAT = make({
    name: 'Close Combat',
    desc: 'Ignores short range modifiers.',
})

export const TRAIT_UNSTOPPABLE = make({
    name: 'Unstoppable',
    desc: 'Attacks from this weapon ignore all countermeasures.',
})

export const TRAIT_INFANTRY_NETWORK = make({
    name: 'Infantry Network',
    desc: 'Attacks from this weapon can use the LOS of infantry units in the same Taskforce.',
})

function make(trait) {
    trait.desc = keywordFormat(trait.desc)
    return trait
}
