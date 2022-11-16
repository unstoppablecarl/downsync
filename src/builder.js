import { generateArmyListPages, generateCardPrintPages, generateCards } from './generate-pages.js'
import { getTimestamp } from './util.js'
import { COALITION_UNITS } from '../data/cards/coalition-units.js'
import { REPUBLIC_UNITS } from '../data/cards/republic-units.js'
import { armyLists } from '../data/army-lists.js'
import { CARDS_VERSION } from './versioning.js'
import { MERCENARY_UNITS } from '../data/cards/mercenary-units.js'
import { COALITION_ADVISORS } from '../data/cards/coalition-advisors.js'
import { REPUBLIC_ADVISORS } from '../data/cards/republic-advisors.js'

const TIMESTAMP = getTimestamp()

let coalitionUnits = prepareCards(COALITION_UNITS)
let republicUnits = prepareCards(REPUBLIC_UNITS)
let mercenaryUnits = prepareCards(MERCENARY_UNITS)

export default function () {

    let unitCardData = [].concat(
        coalitionUnits,
        republicUnits,
        //mercenaryUnits,
    )

    let advisorCardData = [].concat(
        COALITION_ADVISORS,
        REPUBLIC_ADVISORS,
    ).map(prepareCard)

    generateCards({
        template: 'page-cards',
        dest: './public/cards.html',
        pageTitle: 'Unit Cards',
        cardData: [
            {
                faction: 'Coalition',
                factionCards: coalitionUnits,
            },
            {
                faction: 'Republic of Man',
                factionCards: republicUnits,
            },
            {
                faction: 'Mercenaries',
                factionCards: mercenaryUnits,
            },
        ],
    })

    generateCardPrintPages({
        template: 'page-cards-print',
        dest: './public/cards-print.html',
        cardData: unitCardData,
    })

    generateCardPrintPages({
        template: 'page-cards-print',
        dest: './public/advisor-cards-print.html',
        pageTitle: 'Advisor Cards',
        cardData: advisorCardData,
    })

    generateArmyListPages({
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
