import { cardsToPages } from './support/page-card-data.js'
import { COALITION_DEMO_UNITS } from '../../data/cards/coalition-units.js'
import { REPUBLIC_DEMO_UNITS } from '../../data/cards/republic-units.js'

let units = [].concat(COALITION_DEMO_UNITS, REPUBLIC_DEMO_UNITS)

console.log(units)
export const cardPages = cardsToPages(units, 6)
