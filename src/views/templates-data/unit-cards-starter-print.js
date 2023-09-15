import { cardsToPages, FACTION_DEMO_UNITS, prepareSplitCards } from './support/page-card-data.js'
import { COALITION_STARTER_LIST, REPUBLIC_STARTER_LIST } from '../../data/army-lists.js'
import { COALITION_FACTION_SLUG } from '../../data/constants.js'

export const factionCards = FACTION_DEMO_UNITS.map((faction) => {
    let UNITS = faction.factionCards

    if (faction.faction_slug === COALITION_FACTION_SLUG) {
        UNITS = prepareSplitCards(UNITS)
    }

    faction.cardPages = cardsToPages(UNITS, 9)
    return faction
})

export const armyLists = [
    COALITION_STARTER_LIST,
    REPUBLIC_STARTER_LIST,
]
