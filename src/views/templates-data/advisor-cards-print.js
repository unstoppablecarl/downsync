import { cardsToPages, FACTION_ADVISORS } from './support/page-card-data.js'

export const factionCards = FACTION_ADVISORS.flatMap((faction) => {
    let UNITS = faction.factionCards

    faction.cardPages = cardsToPages(UNITS, 9)
    return faction
})
export const pageTitle = 'Advisor Cards Print'
