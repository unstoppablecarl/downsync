import { joinTypes } from '../../support/util.js'
import { makeTrait } from '../../support/factories.js'

export const TRAIT_LIMITED_VS = (types) => {
    return makeTrait({
        name: 'Limited',
        note: '-2 TARG',
        desc: `vs ${joinTypes(types)}.`,
    })
}
