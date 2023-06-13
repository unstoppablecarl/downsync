import { COST_COMMAND, TYPE_INFANTRY } from '../constants.js'
import { makeTrait } from '../support/factories.js'

const UPKEEP_COMMAND_POINT_TEXT = 'This Unit gains the Command Point Token spent to indicate this ability is active. It is returned to its controlling player immediately before this Unit is Refreshed or Destroyed.'

export const STEALTHY = make({
    name: 'Stealthy',
    desc: `This Unit begins the game with a Stealth Token.`,
})

export const MOUNTED_INFANTRY = make({
    name: 'Mounted Infantry',
    desc: `Infantry Bases in this Unit may not enter buildings.`,
})

export const CLEAR_THE_WAY = make({
    name: 'Clear The Way',
    note: `COST: ${COST_COMMAND}, Movement phase`,
    desc: 'While within 8" of an Infantry Base in this Unit, other Units in the same Taskforce gain All Terrain.',
    desc_keywords_after: ['All Terrain'],
})

export const SMALL_DECOY_PING = make({
    name: 'Decoy',
    note: 'Small',
    desc: 'When this Unit is added to your Force, the Force gains one Small Decoy Ping.',
})

export const COUNTERMEASURE_DEFEND = (type, typePlural) => {
    typePlural = typePlural || type
    return make({
        name: 'Defend',
        note: `${type}, 4"`,
        desc: `${typePlural} within 4" can spend this Unit's Countermeasure Tokens. This may only be used by Units with a CM stat of "-".`,
    })
}

export const BULLET_SPONGE_AURA = make({
    name: 'Defender Aura',
    note: `4", COST: ${COST_COMMAND}, Refresh phase`,
    desc: `Friendly Units within 4" and LOS can spend this Unit's Countermeasure Tokens. ${UPKEEP_COMMAND_POINT_TEXT}`,
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


export const HIT_AND_RUN = make({
    name: 'Hit and Run',
    note: `2" Place`,
    desc: `After this Unit resolves a combat action it may be Placed within 2".`,
})

export const HITCH_HIKER = make({
    name: 'Hitch Hiker',
    desc: `When this Unit is Revealed in the Reveal Phase it may be Placed within 3" of a friendly Unit in this Taskforce with the Taxi trait that was Revealed in a previous Turn.`,
    desc_keywords_before: ['Taxi'],
})

export const FREE_UNION_TAXI = make({
    name: 'Taxi',
    desc: `This Unit may be targeted by the Hitch Hiker trait once per Taskforce Activation.`,
    desc_keywords_name: ['Hitch Hiker'],
})

export const RESILIENT = make({
    name: 'Resilient',
    desc: `When this Unit suffers a KILL effect, when not already Stunned, it suffers a STUN effect instead.`,
})

export const SCRAMBLE_AURA = make({
    name: 'Scramble Aura',
    note: `6", COST: ${COST_COMMAND}, Refresh phase`,
    desc: `While within 6" and LOS of this Unit, enemy Units suffer -2 TARG and enemy Pings may not be Revealed in the Reveal Phase. ${UPKEEP_COMMAND_POINT_TEXT}`,
    desc_keywords_name: ['Hitch Hiker'],
})

export const QUICK = make({
    name: 'Quick',
    desc: 'After all Priority Rolls are resolved in a Reaction Engagement, This Unit may swap the results of its Priority Roll with any other Unit participating in the Reaction Engagement.',
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
