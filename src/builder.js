import { generateArmyListPages, generateCardPrintPages, generateCards } from './generate-pages.js'
import { getTimestamp } from './util.js'
import { COALITION_UNITS } from '../data/cards/coalition-units.js'
import { REPUBLIC_UNITS } from '../data/cards/republic-units.js'
import { armyLists } from '../data/army-lists.js'
import { CARDS_VERSION } from './versioning.js'
import { MERCENARY_UNITS } from '../data/cards/mercenary-units.js'

let coalitionUnits = prepareUnits(COALITION_UNITS)
let republicUnits = prepareUnits(REPUBLIC_UNITS)
let mercenaryUnits = prepareUnits(MERCENARY_UNITS)

export default function () {

    let cardData = [].concat(
        coalitionUnits,
        republicUnits,
        mercenaryUnits,
    )

    generateCards({
        template: 'page-cards',
        dest: './public/cards.html',
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
        cardData,
    })

    generateArmyListPages({
        armyListData: {
            armyLists,
        },
    })
}

function prepareUnits(units) {
    return units.map((unit) => {
        unit.timestamp = getTimestamp()
        unit.cardsVersion = CARDS_VERSION
        return unit
    })
}
