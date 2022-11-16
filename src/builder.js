import { generateArmyListPages, generateCardPrintPages, generateCards, generateIndex } from './generate-pages.js'
import { getTimestamp } from './util.js'
import { COALITION_UNITS } from '../data/cards/coalition-units.js'
import { REPUBLIC_UNITS } from '../data/cards/republic-units.js'
import { armyLists } from '../data/army-lists.js'
import { CARDS_VERSION } from './versioning.js'
import { MERCENARY_UNITS } from '../data/cards/mercenary-units.js'
import { COALITION_ADVISORS } from '../data/cards/coalition-advisors.js'
import { REPUBLIC_ADVISORS } from '../data/cards/republic-advisors.js'

const TIMESTAMP = getTimestamp()

let factionUnits = [
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

let allUnits = factionUnits.flatMap((faction) => faction.factionCards)

let factionAdvisors = [
    {
        faction: 'Coalition',
        factionCards: prepareCards(COALITION_ADVISORS),
    },
    {
        faction: 'Republic of Man',
        factionCards: prepareCards(REPUBLIC_ADVISORS),
    },
]

let allAdvisors = factionAdvisors.flatMap((faction) => faction.factionCards)

export default function () {

    generateIndex({
        template: 'page-index',
        dest: './public/index.html',
        pageTitle: 'Downsync',
    })

    generateCards({
        template: 'page-cards',
        dest: './public/unit-cards.html',
        pageTitle: 'Unit Cards',
        cardData: factionUnits,
    })

    generateCards({
        template: 'page-cards',
        dest: './public/advisor-cards.html',
        pageTitle: 'Advisor Cards',
        cardData: factionAdvisors,
    })

    generateCardPrintPages({
        template: 'page-cards-print',
        dest: './public/unit-cards-print.html',
        pageTitle: 'Unit Cards',
        cardData: allUnits,
    })

    generateCardPrintPages({
        template: 'page-cards-print',
        dest: './public/advisor-cards-print.html',
        pageTitle: 'Advisor Cards',
        cardData: allAdvisors,
    })

    generateArmyListPages({
        dest: './public/army-lists.html',
        armyListData: {
            armyLists,
        },
    })
}


function prepareCard(card) {
    card.timestamp = TIMESTAMP
    card.cardsVersion = CARDS_VERSION
    return card
}

function prepareCards(cards) {
    return cards.map(prepareCard)
}
