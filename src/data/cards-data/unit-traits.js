import { COST_COMMAND, TYPE_INFANTRY } from '../constants.js'
import { makeTrait } from '../support/factories.js'

const UPKEEP_COMMAND_POINT_TEXT = 'This Unit gains the Command Point Token spent to indicate this ability is active. It is returned immediately before this Unit is Refreshed or Destroyed.'

export const STEALTHY_INFANTRY = make({
    name: 'Stealthy',
    desc: `Each each Infantry Base in this Unit begins the game with a Stealth Token.`,
})

export const CLEAR_THE_WAY = make({
    name: 'Clear The Way',
    note: `COST: ${COST_COMMAND}, Movement phase`,
    desc: 'While within 8" of an Infantry Base in this Unit, other Units in the same Taskforce gain All Terrain.',
})

export const SMALL_DECOY_PING = make({
    name: 'Decoy',
    note: 'Small',
    desc: 'When this unit is added to your Force, the force gains one Small Decoy Ping.',
})

export const COUNTERMEASURE_DEFEND = (type, typePlural) => {
    typePlural = typePlural || type
    return make({
        name: 'Defend',
        note: `${type}, 4"`,
        desc: `${typePlural} within 4" can spend this Unit's Countermeasure Tokens.`,
    })
}

export const BULLET_SPONGE_AURA = make({
    name: 'Interference Field',
    note: `2", COST: ${COST_COMMAND}, Refresh phase`,
    desc: `Friendly Units within 2" can spend this Unit's Countermeasure Tokens. ${UPKEEP_COMMAND_POINT_TEXT}`,
})

export const FINISHER = make({
    name: 'Finisher',
    note: `+1 TARG vs zero CM`,
    desc: `This Unit gains +1 TARG against targets that currently have zero Countermeasures.`,
})

export const DEFENSE_NET = (type) => {
    return make({
        name: 'Defense Net',
        note: `${type}, 4"`,
        desc: `When resolving an attack against an Infantry Base in this Unit, it may spent up to 1 Countermeasure token controlled by a friendly Infantry Base in this Unit within 4" in addition to its own Countermeasure tokens.`,
    })
}

export const DEFENSE_AURA = make({
    name: 'Defense Aura',
    note: `COST: ${COST_COMMAND}, Refresh phase`,
    desc: 'Friendly Units within 4" gain +1 to Countermeasure rolls. ' + UPKEEP_COMMAND_POINT_TEXT,
})

export const SHROUD_AURA = make({
    name: 'Shroud Aura',
    note: '4" concealment',
    desc: 'Friendly Units within 4" gain concealment.',
})

export const ADAPTIVE_CAMO = make({
    name: 'Adaptive Camo',
    note: '+1 DEF',
    desc: 'When concealed this Unit gains an additional +1 DEF.',
})

export const AMBUSH = make({
    name: 'Ambush',
    desc: `When declaring participating Units of a Reaction Engagement, select a Ping matching this Unit's SIG. This Unit is immediately revealed using the selected Ping and becomes a participating Unit in the Reaction Engagement. If the selected Ping has an Activated Token it is immediately removed.`,
})

export const MECHANIZED_INFANTRY = make({
    name: 'Mechanized',
    desc: 'This Unit may begin the game mounted in a Courier transport. If it does its Ping is not used for the game.',
})

export const PREDATOR = make({
    name: 'Predator',
    note: '+2 TARG',
    desc: 'This Unit gains +2 TARG against Stunned Units.',
})

export const SENTRY = make({
    name: 'Sentry',
    desc: 'This Unit gains +1 to reaction rolls.',
})

export const ALL_TERRAIN = make({
    name: 'All Terrain',
    desc: 'This Unit ignores terrain movement penalties.',
})

export const DRONE_CONTROLLER = make({
    name: 'Drone Controller',
    desc: 'If Team 1 is destroyed remove this Unit from the game.',
})

export const PERSONAL_CM = make({
    name: 'Personal CM',
    desc: 'Team 1 has and regenerates 1 CM.',
})

export const WIDOW_SCOUT_CARRIED = make({
    name: 'Packaged',
    note: 'Widow Scout',
    desc: 'This Unit cannot be added directly to a Force. It is automatically included with a Widow Scout Unit.',
})

export const SPIDER_DRONE_INFILTRATOR_CARRIER = make({
    name: 'Carrier',
    note: 'Spider Drone: Infiltrator',
    desc: 'When this Unit is added to a Force one Spider Drone: Infiltrator Unit is automatically included.',
})

export const INFANTRY_TRANSPORT = make({
    name: 'Transport',
    note: `Small SIG ${TYPE_INFANTRY}`,
    desc: `This Unit may be designated the dedicated transport of a small SIG Infantry Unit from your force with the Mechanized trait.`,
    desc_keywords: ['Mechanized'],
})

export const HARDENED_CM = make({
    name: 'Hardened CM',
    note: '+1',
    desc: `This Unit begins the game with 1 Hardened Countermeasure Token (indicated as +1 under CM). Hardened CMs automatically succeed and do not regenerate.`,
})

export const PATROL = make({
    name: 'Patrol',
    desc: 'This Unit gains an Overwatch Token after resolving a second move as its action.',
})

export const CLOSE_AND_PERSONAL = make({
    name: 'Close and Personal',
    note: '+1 TARG',
    desc: 'This Unit gains an additional +1 TARG against targets within short range.',
})

export const HIT_AND_RUN = make({
    name: 'Hit and Run',
    note: `2" place`,
    desc: `After this Unit resolves a combat action is may be placed within 2".`,
})

function make(trait) {
    return makeTrait(trait)
}
