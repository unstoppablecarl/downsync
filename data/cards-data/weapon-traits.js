import { keywordFormat } from '../support/text-formatters.js'
import { joinTypes } from '../../src/util.js'

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

export const EXTREME_RANGE = make({
    name: 'Extreme Range',
    desc: 'Ignores short and long range modifiers.',
})

export const CLOSE_COMBAT = make({
    name: 'Close Combat',
    desc: 'Ignores short range modifiers.',
})


export const TRAIT_INFANTRY_NETWORK = make({
    name: 'Infantry Network',
    desc: 'Attacks from this weapon can use the LOS of infantry units in the same Taskforce.',
})


export const PLACE_EFFECT = (distance) => {
    return make({
        name: 'Place Effect',
        note: `Place ${distance}"`,
        desc: `Target unit is placed by attacker completely within ${distance}" of its current location.`,
    })
}


function make(trait) {
    trait.note = keywordFormat(trait.note)
    trait.desc = keywordFormat(trait.desc)
    return trait
}
