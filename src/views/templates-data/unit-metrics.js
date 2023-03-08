import { FACTION_UNITS } from './support/page-card-data.js'
import { SIZE_LARGE, SIZE_MEDIUM, SIZE_SMALL } from '../../data/constants.js'
import sortBy from 'lodash.sortBy'
import countBy from 'lodash.countBy'

const sizeOrder = [
    SIZE_SMALL,
    SIZE_MEDIUM,
    SIZE_LARGE,
]

export const cardListData = FACTION_UNITS.map(({
                                                   faction,
                                                   factionCards,
                                               }) => {
    return {
        faction,
        factionCards: sortBy(factionCards, sortBySize),
        counts: countBy(factionCards, 'signature'),
    }
})

function sortBySize(card) {
    return sizeOrder.indexOf(card.signature)
}
