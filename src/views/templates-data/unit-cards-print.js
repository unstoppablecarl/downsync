import { cardsToPages, FACTION_AND_SCENARIO_UNITS, prepareSplitCards } from './support/page-card-data.js'
import { COALITION_FACTION_SLUG } from '../../data/constants.js'
import { filterFactions as ff } from './unit-cards.js'

export const factionCards = FACTION_AND_SCENARIO_UNITS.map((faction) => {
    let UNITS = faction.cards

    if (faction.faction_slug === COALITION_FACTION_SLUG) {
        UNITS = prepareSplitCards(UNITS)
    }

    faction.cardPages = cardsToPages(UNITS, 9)
    return faction
})

export const pageTitle = 'Unit Cards Print'

export const filterFactions = ff