import { keywordFormat } from '../support/text-formatters.js'
import { COST_COMMAND, TYPE_INFANTRY } from '../constants.js'

export const PATROL = make({
    name: 'Patrol',
    note: `COST: ${COST_COMMAND}, movement phase`,
    desc: 'This unit immediately gains an Overwatch Token if it is performing a double move.',
})

export const CLEAR_THE_WAY = make({
    name: 'Clear The Way',
    note: `COST: ${COST_COMMAND}, movement phase`,
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

export const ACTIVE_CAMO = make({
    name: 'Active Camo',
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

export const HIT_AND_RUN = make({
    name: 'Hit & Run',
    desc: 'After resolving an attack action, this unit may make a move up to its SPD.',
})

export const REVEAL_PLUS_2_TARG = make({
    name: 'Reveal',
    note: '+2 TARG',
    desc: 'When revealed this Unit gains +2 TARG until the end of this Taskforce Activation or Reaction Engagement.',
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
    note: `COST: ${COST_COMMAND}, before reaction roll`,
    desc: 'This unit gains +1 to reaction rolls and +1 ROF for its attacks until the end of this Reaction Engagement.',
})

export const ALL_TERRAIN = make({
    name: 'All Terrain',
    desc: 'This unit ignores terrain movement penalties.',
})

export const POOR_OPTICS = make({
    name: 'POOR OPTICS',
    note: '-2 TARG without FO',
    desc: 'This unit suffers -2 TARG when resolving attacks without a Forward Observer.',
})

export const SPEED_BOOST = make({
    name: 'Speed Boost',
    note: `COST: ${COST_COMMAND}, movement phase`,
    desc: 'Taskforce units within 6" may add any number of +1 SPD modifiers, up to a total of 6 between all units. All modifiers are removed at the end of this taskforce activation.',
})

export const DEADLY_VS = (type) => {
    return make({
        name: 'Deadly',
        note: type,
        desc: `This weapon's effect is KILL against ${type} targets.`,
    })
}

export const INFANTRY_TRANSPORT = (count) => {
    return make({
        name: 'Transport',
        note: `${TYPE_INFANTRY} x ${count}`,
    })
}

function make(ability) {
    ability.desc = keywordFormat(ability.desc)
    ability.note = keywordFormat(ability.note)

    return ability
}
