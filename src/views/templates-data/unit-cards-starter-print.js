import { cardsToPages, FACTION_DEMO_UNITS } from './support/page-card-data.js'
import { STARTER_SET_LISTS } from '../../data/army-lists.js'

export const factionCards = FACTION_DEMO_UNITS.map((faction) => {
    let UNITS = faction.cards

    faction.cardPages = cardsToPages(UNITS, 9)
    return faction
})

export const armyLists = STARTER_SET_LISTS
