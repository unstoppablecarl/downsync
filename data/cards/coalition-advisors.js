import { makeAdvisor } from 'data/support/factories.js'
import { COALITION_CARD_DEFAULTS } from 'data/cards/coalition-units.js'

export const WOLF_AI_ADVISOR = {}


function make(unit) {

    unit = Object.assign({}, COALITION_CARD_DEFAULTS, unit)

    return makeAdvisor(unit)
}
