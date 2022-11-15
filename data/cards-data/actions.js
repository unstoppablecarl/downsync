import { keywordFormat } from '../support/text-formatters.js'
import { TRAIT_TARGET_LOCK_EFFECT } from './weapon-traits.js'
import { COST_ACTION, COST_ACTION_OR_COMMAND, COST_COMMAND } from '../constants.js'

export const FORWARD_OBSERVE = make({
    name: 'Forward Observe',
    cost: COST_ACTION,
    target: 'Unit',
    rof: 1,
    effect: '&starf;',
    desc: 'A unit in the same Taskforce immediately resolves its activation with an action that has the Fire Support trait using this unit\'s LOS.',
})


export const FORWARD_OBSERVE_WITH_TARGET_DESIGNATOR = make(Object.assign({}, FORWARD_OBSERVE, {
    traits: [
        makeTrait({
            name: 'Target Designator',
            desc: '+2 TARG.',
        }),
    ],
}))

export const REPAIR = make({
    name: 'Repair',
    cost: COST_ACTION_OR_COMMAND,
    target: 'TF Unit',
    range: 6,
    rof: 2,
    effect: '&starf;',
    desc: 'Remove up to 2 tokens from units in this taskforce within 12".',
})

const LAUNCH_DRONE = ({
                          name,
                          note,
                          desc,
                      }) => {
    return make({
        name: 'Launch Drone',
        cost: COST_ACTION_OR_COMMAND,
        rof: 1,
        target: 'Point',
        range: 18,
        effect: 'DRONE',
        traits: [
            makeTrait({
                name: name + ' Drone',
                note,
                desc,
            }),
            makeTrait({
                name: 'Drone Bay',
                desc: `If this unit does not have a drone token when it is refreshed or destroyed, move a friendly drone token of the same type from the battlefield to this unit.`,
            }),
        ],
    })
}

export const LAUNCH_TARGETING_DRONE = LAUNCH_DRONE({
    name: 'Targeting',
    note: '+2 TARG, 3"',
    desc: 'Attacks against enemy units within 3" of a Targeting Drone gain +2 TARG.',
})
export const LAUNCH_RECON_DRONE = LAUNCH_DRONE({
    name: 'Recon',
    note: '+2 SCAN, 3"',
    desc: 'Scan Checks against enemy units/pings within 3" of a Recon Drone gain +2 SCAN.',
})

export const LAUNCH_DEFENSE_DRONE = LAUNCH_DRONE({
    name: 'Recon',
    desc: 'Friendly units/pings within 3" of a Defense Drone gain +1 DEF',
})

export const SCAN = (rof, range) => {
    return make({
        name: 'Scan',
        target: 'Ping',
        range: range,
        rof: rof,
        effect: 'scan',
    })
}
export const SCAN_WITH_TARGET_LOCK = (rof, range) => {
    return make({
        name: 'Scan',
        cost: COST_ACTION_OR_COMMAND,
        target: 'U/P',
        range: range,
        rof: rof,
        effect: 'scan',
        traits: [
            makeTrait({
                name: 'Target Lock',
                desc: 'Scanned enemy Units suffer the LOCK effect instead.',
            }),
        ],
    })
}

export const TARGET_LOCK = make({
    name: 'Scan',
    cost: COST_ACTION_OR_COMMAND,
    target: 'Unit',
    range: 16,
    rof: 1,
    effect: 'lock',
    traits: [
        makeTrait({
            name: 'Target Lock',
            desc: 'Units hit by this weapon suffer -2 DEF until the end of this Taskforce Activation. A unit can only be target locked once.',
        }),
    ],
})


export const TARGET_PAINTER = make({
    name: 'Tagging Rifle',
    cost: COST_ACTION_OR_COMMAND,
    target: 'Unit',
    range: 24,
    rof: 1,
    effect: 'lock',
    traits: [
        TRAIT_TARGET_LOCK_EFFECT,
    ],
})

export const SHROUD = (range, count) => {
    return make({
        name: 'Shroud',
        cost: COST_ACTION_OR_COMMAND,
        range: range,
        rof: count,
        effect: '&starf;',
        desc: `Place ${count} Shroud Template within ${range}" of this Unit. Shroud Templates are removed when this unit is Refreshed or destroyed.`,
    })
}

export const SPOTTER = make({
    name: 'Spotter',
    cost: COST_COMMAND,
    target: 'TF Unit',
    rof: 1,
    desc: 'Target other unit in the same Taskforce gains +2 TARG against targets in this unit\'s LOS.',
})

export const TRANSPORT_UNLOAD = make({
    name: 'Unload',
    note: 'Free Action, 3"',
    desc: keywordFormat(`Place any carried units within 3". They may immediately perform a move or action.`),
    no_stats: true,
})

export const TRANSPORT_LOAD = make({
    name: 'Load',
    note: 'Free Action, 3"',
    desc: keywordFormat(`Place any eligible units within 3" in this transport up to its max capacity. Only units that forfeit a move or action are eligible. After a Load action, this unit may immediately move up to its SPD if it has not moved this turn.`),
    no_stats: true,
})

export const BASIC_SCAN = SCAN(1, 12)

function make(action) {

    action.traits = action.traits || []

    if (!action.cost) {
        action.cost = {
            [COST_ACTION]: true,
        }
    } else if (typeof action.cost === 'string') {
        action.cost = {
            [action.cost]: true,
        }
    }

    action.desc = keywordFormat(action.desc)

    return action
}

function makeTrait(trait) {

    trait.desc = keywordFormat(trait.desc)

    return trait
}

