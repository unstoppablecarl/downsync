import { COST_COMMAND } from '../../constants.js'
import { oncePerActivation } from '../actions.js'
import { makeAction } from '../../support/factories.js'

export const STEALTHIFY = makeAction({
    name: 'Stealthify',
    note: 'Once per Activation',
    cost: COST_COMMAND,
    range: 6,
    effect: '&starf;',
    desc: `Select another friendly Unit within 6", it gains a Stealth Token. ${oncePerActivation}`,
})