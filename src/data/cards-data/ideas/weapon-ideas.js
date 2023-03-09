import { COST_COMMAND } from '../../constants.js'
import { makeWeapon } from '../../support/factories.js'

export function SNAP_FIRE(weapon, range) {

    let newWeapon = Object.assign({}, weapon, {
        name: 'Snap Fire',
        cost: COST_COMMAND,
        rof: 1,
        range,
    })

    return makeWeapon(newWeapon)
}

