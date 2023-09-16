import { FACTION_UNITS } from './support/page-card-data.js'
import { SIZE_LARGE, SIZE_MEDIUM, SIZE_SMALL } from '../../data/constants.js'
import sortBy from 'lodash.sortby'
import countBy from 'lodash.countby'

const sizeOrder = [
    SIZE_SMALL,
    SIZE_MEDIUM,
    SIZE_LARGE,
]

export const cardListData = FACTION_UNITS.map(({
                                                   faction,
                                                   cards,
                                               }) => {
    return {
        faction,
        factionCards: sortBy(cards, sortBySize),
        counts: countBy(cards, 'signature'),
    }
})

function sortBySize(card) {
    return sizeOrder.indexOf(card.signature)
}
