import { ALL_UNITS, cardsToPages, prepareSplitCards } from './support/page-card-data.js'

const UNITS = prepareSplitCards(ALL_UNITS)

export const cardPages = cardsToPages(UNITS, 9)

export const pageTitle = 'Unit Cards Print'
