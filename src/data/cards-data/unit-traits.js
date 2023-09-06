import { COST_COMMAND, TYPE_INFANTRY } from '../constants.js'
import { makeTrait } from '../support/factories.js'

const UPKEEP_COMMAND_POINT_TEXT = 'This Unit gains the Command Point Token spent to indicate this ability is active. It is returned to its controlling player immediately before this Unit is Refreshed or Destroyed.'

export const STEALTHY = make({
    name: 'Stealthy',
    desc: `This Unit begins the game with a Stealth Token.`,
})

export const CLEAR_THE_WAY = make({
    name: 'Clear The Way',
    note: `COST: ${COST_COMMAND}, Movement phase`,
    desc: 'While within 8" of an Infantry Base in this Unit, other Units in the same Taskforce gain All Terrain.',
    desc_keywords_after: ['All Terrain'],
})

export const COUNTERMEASURE_DEFEND = (type, typePlural) => {
    typePlural = typePlural || type
    return make({
        name: 'Defend',
        note: `${type}, 4"`,
        desc: `${typePlural} within 4" can spend this Unit's Countermeasure Tokens. This may only be used by Units with a CM stat of "-".`,
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
    desc: 'When this Unit benefits from Concealment it gains an additional +1 DEF.',
})

export const AMBUSH = make({
    name: 'Ambush',
    desc: `When declaring participating Units of a Reaction Engagement, select a Ping matching this Unit's SIG. This Unit is immediately Revealed using the selected Ping and becomes a participating Unit in the Reaction Engagement. If the selected Ping has an Activated Token it is immediately removed. Ambush may only be used if this Unit has not been Revealed yet.`,
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
    desc: 'This Unit gains +1 to Reaction Priority Rolls.',
})

export const ALL_TERRAIN = make({
    name: 'All Terrain',
    desc: 'This Unit ignores terrain movement penalties.',
})

export const WIDOW_SCOUT_CARRIED = make({
    name: 'Packaged',
    note: 'Widow Scout',
    desc: 'This Unit cannot be added directly to a Force. It is automatically included with a Widow Scout Unit.',
})

export const SPIDER_DRONE_INFILTRATOR_CARRIER = make({
    name: 'Carrier',
    note: 'Spider Drone: Infiltrator',
    desc: 'When this Unit is added to a Force one Spider Drone: Infiltrator Unit is also included.',
    desc_keywords_after: ['Spider Drone: Infiltrator'],
})

export const INFANTRY_TRANSPORT = make({
    name: 'Transport',
    note: `Small SIG ${TYPE_INFANTRY}`,
    desc: `This Unit may be designated the dedicated transport of a small SIG Infantry Unit from your force with the Mechanized trait.`,
    desc_keywords: ['Mechanized'],
})

export const EMERGENCY_CM = make({
    name: 'Emergency CM',
    note: '+1',
    desc: `This Unit begins the game with 1 Emergency Countermeasure Token (indicated as +1 under CM). Emergency CMs automatically succeed and do not regenerate.`,
})

export const CLOSE_AND_PERSONAL = make({
    name: 'Close and Personal',
    note: '+1 TARG',
    desc: 'This Unit gains an additional +1 TARG against targets within short range.',
})
export const COVERT = makeTrait({
    name: 'Covert',
    desc: `When a this Unit is Revealed in your Reveal Phase, you may pay ${COST_COMMAND}, if you do it gains a Stealth Token.`,
})
export const REGROUP = makeTrait({
    name: 'Regroup',
    desc: 'When this Unit has an Overwatch Token, it may be Placed within 3" of their current position immediately after Taskforce Designation (including in Reaction Engagements).',
})

function make(trait) {
    return makeTrait(trait)
}
