import { generateArmyListPages, generateCardPages } from './generate-pages.js'
import { getTimestamp } from './util.js'
import { COALITION_UNITS } from '../data/cards/coalition-units.js'
import { REPUBLIC_UNITS } from '../data/cards/republic-units.js'
import { armyLists } from '../data/army-lists.js'

let units = [].concat(
    COALITION_UNITS,
    REPUBLIC_UNITS,
)

export default function () {

    let cardData = units.map((unit) => {
        unit.timestamp = getTimestamp()

        return unit
    })

    generateCardPages({
        cardData,
    })

    generateArmyListPages({
        armyListData: {
            armyLists,
        },
    })
}
