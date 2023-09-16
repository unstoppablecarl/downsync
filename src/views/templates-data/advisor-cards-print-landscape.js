import { cardsToPages, FACTION_ADVISORS } from './support/page-card-data.js'

export const factionCards = FACTION_ADVISORS.map((faction) => {
    let UNITS = faction.cards

    faction.cardPages = cardsToPages(UNITS, 6)
    return faction
})
export const pageTitle = 'Advisor Cards Print'
