import { FACTION_DEMO_UNITS } from './support/page-card-data.js'
import { COALITION_STARTER_LIST, REPUBLIC_STARTER_LIST } from '../../data/army-lists.js'

export const cardPages = FACTION_DEMO_UNITS.map((faction) => faction.factionCards)

export const armyLists = [
    COALITION_STARTER_LIST,
    REPUBLIC_STARTER_LIST,
]
