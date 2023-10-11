import { FACTION_DEMO_UNITS, factionCardsToPrintPages } from './support/page-card-data.js'
import { STARTER_SET_LISTS } from '../../data/army-lists.js'
import { FACTIONS } from '../../data/constants.js'

export const factionCards = factionCardsToPrintPages(FACTION_DEMO_UNITS, 9)

export const armyLists = STARTER_SET_LISTS
export const filterFactions = FACTIONS