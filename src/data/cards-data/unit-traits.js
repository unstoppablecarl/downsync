import { COST_COMMAND, TYPE_INFANTRY } from '../constants.js'
import { makeTrait } from '../support/factories.js'

export const GO_DARK_ON_REFRESH = make({
    name: 'Hide',
    note: `COST: ${COST_COMMAND}, Refresh Phase`,
    desc: 'When this Unit is Refreshed it gains a Stealth Token.  This Unit cannot Hide if it is within 3" of an enemy Unit.',
})

export const CLEAR_THE_WAY = make({
    name: 'Clear The Way',
    note: `COST: ${COST_COMMAND}, Movement phase`,
    desc: 'While within 8" units in the same Taskforce gain All Terrain.',
})

export const COUNTERMEASURE_DEFEND = (type, typePlural) => {
    typePlural = typePlural || type
    return make({
        name: 'Defend',
        note: `${type}, 4"`,
        desc: `${typePlural} within 4" can spend this unit's Countermeasure Tokens.`,
    })
}

export const FINISHER = make({
    name: 'Finisher',
    note: `+1 TARG vs zero CM`,
    desc: `This Unit gains +1 TARG against targets that currently have zero Countermeasures.`,
})

export const DEFENSE_NET = (type) => {
    return make({
        name: 'Defense Net',
        note: `${type}, 4"`,
        desc: `When resolving an attack against this unit, it may spent up to 1 Countermeasure token controlled by a friendly ${type} Unit within 4" in addition to its own Countermeasure tokens.`,
    })
}

export const DEFENSE_AURA = make({
    name: 'Defense Aura',
    note: '4"',
    desc: 'Friendly Units within 4" gain +1 to Countermeasure rolls.',
})

export const ADAPTIVE_CAMO = make({
    name: 'Adaptive Camo',
    note: '+1 DEF',
    desc: 'When concealed this unit gains an additional +1 DEF.',
})

export const AMBUSH = make({
    name: 'Ambush',
    desc: `When declaring participating units of a Reaction Engagement, select a ping matching this unit's SIG. This unit is immediately revealed using the selected ping and becomes a participating unit in the Reaction Engagement. This includes pings that have an Activated Token.`,
})

export const AMBUSH_COORDINATOR = make({
    name: 'Ambush Coordinator',
    note: `COST: ${COST_COMMAND}, 4"`,
    desc: `When this unit uses Ambush, target friendly small or medium ping within 4" may also use the Ambush ability.`,
})

export const INFANTRY_SQUAD = make({
    name: 'Infantry Squad',
    desc: 'This Unit is composed of 3 Infantry teams on separate infantry bases that activate together. They are indicated as T1, T2, and T3 above.',
})

export const MECHANIZED_INFANTRY = make({
    name: 'Mechanized',
    desc: 'This Unit may begin the game mounted in a Courier transport. If this unit begins the game mounted its Ping is not used for the game.',
})

export const PREDATOR = make({
    name: 'Predator',
    note: '+2 TARG',
    desc: 'This Unit gains +2 TARG against Stunned Units.',
})

export const REVEAL_AND_DEPLOY = (count, unitName) => {
    return make({
        name: 'Reveal',
        note: `deploy ${count}, within 3"`,
        desc: `When revealed ${count} infantry based ${unitName} units are placed within 3" and the ping is removed.`,
    })
}

export const RUSH = make({
    name: 'Rush',
    note: `COST: ${COST_COMMAND}, movement phase`,
    desc: 'Up to 4 Spider Drone units in the active Taskforce may perform a double move without forfeiting their action point. A Spider Drone cannot benefit from Rush if it was affected by Scatter this round.',
})

export const SCATTER = make({
    name: 'Scatter',
    note: `COST: ${COST_COMMAND}, reveal phase`,
    desc: 'When revealed, all Spider Drone units in this pack may be placed within 8" (instead of 3").',
})

export const SENTRY = make({
    name: 'Sentry',
    desc: 'This unit gains +1 to reaction rolls.',
})

export const ALL_TERRAIN = make({
    name: 'All Terrain',
    desc: 'This unit ignores terrain movement penalties.',
})

export const DEADLY_VS = (type) => {
    return make({
        name: 'Deadly',
        note: type,
        desc: `This weapon's effect is KILL against ${type} targets.`,
    })
}

export const INFANTRY_TRANSPORT = make({
    name: 'Transport',
    note: `Small SIG ${TYPE_INFANTRY}`,
    desc: `This Unit may start the game transporting a small SIG Infantry Unit from your force. Do not deploy that unit's Ping Template at the beginning of the game.`,
})

function make(trait) {
    return makeTrait(trait)
}
