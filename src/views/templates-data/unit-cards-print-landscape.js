import { cardsToPages, FACTION_UNITS, prepareSplitCards } from './support/page-card-data.js'
import { COALITION_FACTION_SLUG } from '../../data/constants.js'

//export const cardPages = FACTION_UNITS.flatMap((faction) => {
//    return cardsToPages(faction.factionCards, 6)
//})

export const factionCards = FACTION_UNITS.map((faction) => {
    let UNITS = faction.factionCards

    if (faction.faction_slug === COALITION_FACTION_SLUG) {
        UNITS = prepareSplitCards(UNITS)
    }

    faction.cardPages = cardsToPages(UNITS, 6)
    return faction
})
export const pageTitle = 'Unit Cards Print'
