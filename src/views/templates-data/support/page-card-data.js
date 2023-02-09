import { chunk, getTimestamp } from '../../../data/support/util.js'
import { COALITION_DEMO_UNITS, COALITION_UNITS } from '../../../data/cards/coalition-units.js'
import { REPUBLIC_DEMO_UNITS, REPUBLIC_UNITS } from '../../../data/cards/republic-units.js'
import { CARDS_VERSION } from '../../../versioning.js'

const TIMESTAMP = getTimestamp()

export const FACTION_UNITS = [
    {
        faction: 'Coalition',
        factionCards: prepareCards(COALITION_UNITS),
    },
    {
        faction: 'Republic of Terra',
        factionCards: prepareCards(REPUBLIC_UNITS),
    },
    //{
    //    faction: 'Mercenaries',
    //    factionCards: prepareCards(MERCENARY_UNITS),
    //},
]

export const FACTION_DEMO_UNITS = [
    {
        faction: 'Coalition',
        factionCards: prepareCards(COALITION_DEMO_UNITS),
    },
    {
        faction: 'Republic of Terra',
        factionCards: prepareCards(REPUBLIC_DEMO_UNITS),
    },
]

export const ALL_UNITS = FACTION_UNITS.flatMap((faction) => faction.factionCards)

export function cardsToPages(cards, cardsPerPage) {
    return chunk(cards, cardsPerPage)
}

function prepareCards(cards) {
    return cards.map(prepareCard)
}

function prepareCard(card) {
    card.timestamp = TIMESTAMP
    card.cardsVersion = CARDS_VERSION
    return card
}
