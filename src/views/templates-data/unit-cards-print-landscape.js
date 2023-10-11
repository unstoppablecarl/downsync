import { FACTION_AND_SCENARIO_UNITS, factionCardsToPrintPages, prepareSplitCards2 } from './support/page-card-data.js'
import { filterFactions as ff } from './unit-cards.js'

let factionData = prepareSplitCards2(FACTION_AND_SCENARIO_UNITS)
export const factionCards = factionCardsToPrintPages(factionData, 6)
export const pageTitle = 'Unit Cards Print'
export const filterFactions = ff