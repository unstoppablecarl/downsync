import { chunk, getTimestamp } from '../../../data/support/util.js'
import { COALITION_UNITS } from '../../../data/cards/coalition-units.js'
import { REPUBLIC_UNITS } from '../../../data/cards/republic-units.js'
import { CARDS_VERSION } from '../../../versioning.js'
import { MERCENARY_UNITS } from '../../../data/cards/mercenary-units.js'

const TIMESTAMP = getTimestamp()

export const FACTION_UNITS = [
    {
        faction: 'Coalition',
        factionCards: prepareCards(COALITION_UNITS),
    },
    {
        faction: 'Republic of Man',
        factionCards: prepareCards(REPUBLIC_UNITS),
    },
    {
        faction: 'Mercenaries',
        factionCards: prepareCards(MERCENARY_UNITS),
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
