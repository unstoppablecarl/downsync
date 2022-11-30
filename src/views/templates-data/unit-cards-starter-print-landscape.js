import { cardsToPages } from './support/page-card-data.js'
import { COALITION_DEMO_UNITS } from '../../data/cards/coalition-units.js'
import { REPUBLIC_DEMO_UNITS } from '../../data/cards/republic-units.js'
import { COALITION_STARTER_LIST, REPUBLIC_STARTER_LIST } from '../../data/army-lists.js'

let units = [].concat(COALITION_DEMO_UNITS, REPUBLIC_DEMO_UNITS)

export const cardPages = cardsToPages(units, 6)


export const armyLists = [
    COALITION_STARTER_LIST,
    REPUBLIC_STARTER_LIST,
]
