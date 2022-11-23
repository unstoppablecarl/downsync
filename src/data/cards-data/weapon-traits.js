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
        desc: `Before resolving this action, select a point within range and LOS. Only units within ${radius}" of this point may be targeted. Declare all targets before resolving attacks.`,
    })
}

export const TRAIT_GRANTED_SCAN_STAT = make({
    name: 'Granted',
    note: 'SCAN',
    desc: `Units with a SCAN stat may use this action.`,
})

export const TRAIT_DISTRIBUTED = make({
    name: 'Split',
    desc: 'Each attack from this action must have a different target.',
})

export const TRAIT_TAGGED_EFFECT = make({
    name: 'Tagged',
    desc: 'Units hit by this weapon suffer -2 DEF until the end of this Taskforce Activation. A unit can only be Tagged once.',
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

export const TRAIT_ADVANCED = makeCMMod('Advanced', '4+')
export const TRAIT_SMART = makeCMMod('Smart', '5+')
export const TRAIT_OVERKILL = makeCMMod('Overkill', '6+')

export const TRAIT_DEPLOY_SPIDER_DRONES = make({
    name: 'Drone Carrier',
    note: 'Spider Drone x 2',
    desc: 'Place 2 Spider Drone Units within 3" of this Unit. The Spider Drones gain a Stealth Token and are not part of the current Taskforce. This action can only be used once per game.',
})

function makeCMMod(name, TN) {
    return make({
        name,
        note: 'CM ' + TN,
        desc: `Countermeasure rolls attempting to negate this weapon's effect are successful on a ${TN} (instead of 3+).`,
    })
}

export const EXTREME_RANGE = make({
    name: 'Extreme Range',
    desc: 'Ignores short and long range modifiers.',
})

export const CLOSE_COMBAT = make({
    name: 'Close Combat',
    desc: 'Ignores short range modifiers and Concealment.',
})


export const TRAIT_INFANTRY_NETWORK = make({
    name: 'Infantry Network',
    desc: 'Attacks from this weapon can use the LOS of infantry bases in this unit.',
})


export const PLACE_EFFECT = (distance) => {
    return make({
        name: 'Place Effect',
        note: `Place ${distance}"`,
        desc: `Target unit is placed by attacker completely within ${distance}" of its current location.`,
    })
}


function make(trait) {
    return makeTrait(trait)
}
