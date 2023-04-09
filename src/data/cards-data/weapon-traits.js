import { joinTypes } from '../support/util.js'
import { makeTrait } from '../support/factories.js'

export const TRAIT_FIRE_SUPPORT = make({
    name: 'Fire Support',
    desc: 'Eligible for the Forward Observe action.',
})

export const TRAIT_CLUSTERED = (radius) => {
    return make({
        name: 'Clustered',
        note: `${radius}"`,
        desc: `Before resolving this action, select a point within range and LOS. Only Units within ${radius}" of this point may be targeted. Use the selected point as the attacks origin for determining concealment. Declare all targets before resolving attacks.`,
    })
}

export const TRAIT_TAGGED_EFFECT = make({
    name: 'Tagged',
    desc: 'Units hit by this weapon suffer -2 DEF until the end of this Taskforce Activation. A Unit can only be Tagged once.',
})

export const TRAIT_SPECIALIZED_VS = (types) => {
    return make({
        name: 'Specialized',
        desc: `+2 TARG vs ${joinTypes(types)} targets.`,
    })
}

export const TRAIT_ADVANCED = makeCMMod('Advanced', '4+')
export const TRAIT_SMART = makeCMMod('Smart', '5+')
export const TRAIT_OVERKILL = makeCMMod('Overkill', '6+')

function makeCMMod(name, TN) {
    return make({
        name,
        note: 'CM ' + TN,
        desc: `Countermeasure rolls attempting to negate this weapon's effect are successful on a ${TN} (instead of 3+).`,
    })
}

export const TRAIT_EXTREME_RANGE = make({
    name: 'Extreme Range',
    desc: 'Ignores short/long range modifiers. Min range 6". Max range unlimited.',
})

export const TRAIT_CLOSE_COMBAT = make({
    name: 'Close Combat',
    desc: 'Ignores Concealment and short range modifiers.',
})

export const TRAIT_INFANTRY_NETWORK = make({
    name: 'Infantry Network',
    desc: 'Attacks from this weapon can use the LOS of Infantry Teams in this Unit.',
})

export const TRAIT_DOUBLE_TAP = make({
    name: 'Double Tap',
    desc: `This weapon's effect is KILL for Stunned targets.`,
})

export const DEADLY_VS = (type) => {
    return make({
        name: 'Deadly',
        note: type,
        desc: `This weapon's effect is KILL for ${type} targets.`,
    })
}

export const TRAIT_CLOSE_AND_PERSONAL = makeTrait({
    name: 'Close and Personal',
    note: '+1 TARG',
    desc: 'This Action gains an additional +1 TARG against targets within short range.',
})

function make(trait) {
    return makeTrait(trait)
}
