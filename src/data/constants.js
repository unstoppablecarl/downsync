import { FEATURE_FREE_UNION } from '../versioning.js'

export const SIZE_SMALL = 'Small'
export const SIZE_MEDIUM = 'Medium'
export const SIZE_LARGE = 'Large'

export const TYPE_VEHICLE = 'Vehicle'
export const TYPE_INFANTRY = 'Infantry'

export const COST_ACTION = 'COST_ACTION'
export const COST_ACTION_OR_COMMAND = 'COST_ACTION_OR_COMMAND'
export const COST_ACTION_AND_COMMAND = 'COST_ACTION_AND_COMMAND'
export const COST_COMMAND = 'COST_COMMAND'
export const COST_FREE = 'COST_FREE'
export const COST_COMMAND_X2 = 'COST_COMMAND_X2'

export const COALITION_FACTION_NAME = 'Coalition'
export const COALITION_FACTION_SLUG = 'coalition'
export const COALITION_FACTION_SVG_SPRITE = 'faction_' + COALITION_FACTION_SLUG
export const COALITION_FACTION = {
    faction: COALITION_FACTION_NAME,
    faction_slug: COALITION_FACTION_SLUG,
    faction_svg_sprite: COALITION_FACTION_SVG_SPRITE,
}

export const REPUBLIC_FACTION_NAME = 'Republic of Terra'
export const REPUBLIC_FACTION_SLUG = 'republic-of-terra'
export const REPUBLIC_FACTION_SVG_SPRITE = 'faction_' + REPUBLIC_FACTION_SLUG
export const REPUBLIC_FACTION = {
    faction: REPUBLIC_FACTION_NAME,
    faction_slug: REPUBLIC_FACTION_SLUG,
    faction_svg_sprite: COALITION_FACTION_SVG_SPRITE,
}

export const FREE_UNION_FACTION_NAME = 'Free Union'
export const FREE_UNION_FACTION_SLUG = 'free-union'
export const FREE_UNION_FACTION_SVG_SPRITE = 'faction_' + FREE_UNION_FACTION_SLUG
export const FREE_UNION_FACTION = {
    faction: FREE_UNION_FACTION_NAME,
    faction_slug: FREE_UNION_FACTION_SLUG,
    faction_svg_sprite: FREE_UNION_FACTION_SVG_SPRITE,
}

export const FACTIONS = [
    COALITION_FACTION,
    REPUBLIC_FACTION,

]

if (FEATURE_FREE_UNION) {
    FACTIONS.push(FREE_UNION_FACTION)
}
export const EMPHASIS_KEYWORDS = [

    // unit stats
    'SIG',
    'SPD',
    'SCAN',
    'TARG',
    'DEF',
    'CM',

    // action effects
    'KILL',
    'STUN',
    'REVEAL',

    // abbreviations
    'LOS',

    // phases
    'Taskforce Activation',
    'Taskforce Designation',
    'Reveal Phase',
    'Refresh Phase',
    'Movement Phase',
    'Unit Activation',

    'Refreshed',
    'Revealed',

    // tokens
    'Stealth Token',
    'Command Point Tokens',
    'Command Point Token',

    'Command Points',
    'Command Point',

    'Activated Tokens',
    'Activated Token',

    'Overwatch Tokens',
    'Overwatch Token',

    'Emergency Countermeasure Tokens',
    'Emergency Countermeasure Token',

    'Countermeasure Tokens',
    'Countermeasure Token',

    // keywords

    'Placed',

    'Concealment',
    'Concealed',

    'Force',

    'Taskforce',

    'Reaction Priority Rolls',
    'Reaction Priority Roll',

    'Reaction Engagements',
    'Reaction Engagement',
]
