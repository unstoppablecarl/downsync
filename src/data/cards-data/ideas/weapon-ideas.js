import { COST_COMMAND } from '../../constants.js'
import { makeTrait, makeWeapon } from '../../support/factories.js'

export function SNAP_FIRE(weapon, range) {

    let newWeapon = Object.assign({}, weapon, {
        name: 'Snap Fire',
        cost: COST_COMMAND,
        rof: 1,
        range,
    })

    return makeWeapon(newWeapon)
}

export const HUNTER_KILLER = makeWeapon({
    name: 'Hunter Killer Drone',
    range: 16,
    rof: 3,
    effect: 'KILL',
    traits: [
        makeTrait({
            name: 'Target Analysis',
            desc: 'This Action gains +3 TARG against Units hit by a REVEAL effect while already Revealed during this Taskforce Activation.',
        }),
    ],
})