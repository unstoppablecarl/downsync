import { FACTION_ADVISORS, factionCardsToPrintPages } from './support/page-card-data.js'
import { FACTIONS } from '../../data/constants.js'

export const factionCards = factionCardsToPrintPages(FACTION_ADVISORS, 9)
export const pageTitle = 'Advisor Cards Print'
export const filterFactions = FACTIONS