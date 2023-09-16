import { cardsToPages, FACTION_DEMO_UNITS } from './support/page-card-data.js'
import { COALITION_STARTER_LIST, REPUBLIC_STARTER_LIST } from '../../data/army-lists.js'

export const factionCards = FACTION_DEMO_UNITS.map((faction) => {
    let UNITS = faction.cards

    faction.cardPages = cardsToPages(UNITS, 9)
    return faction
})

export const armyLists = [
    COALITION_STARTER_LIST,
    REPUBLIC_STARTER_LIST,
]
