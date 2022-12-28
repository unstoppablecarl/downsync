import { ALL_UNITS, cardsToPages } from './support/page-card-data.js'
import { SENTINEL_HUNTER, SENTINEL_TAGGER } from '../../data/cards/coalition-units.js'


const UNITS = ALL_UNITS.filter((item) => {
    if (item.name === SENTINEL_HUNTER.name) {
        return false
    }
    if (item.name === SENTINEL_TAGGER.name) {
        return false
    }
    return true
})

UNITS.splice(1, 0, {
    template: 'unit-split-card',
    splitCards: [
        SENTINEL_TAGGER,
        SENTINEL_HUNTER,
    ],
})
export const cardPages = cardsToPages(UNITS, 9)

//export const x = 'a'

//export const cardPages = 'dsaffasd'
