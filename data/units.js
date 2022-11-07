export function makeUnit(unit) {

    const defaults = {
        template: 'unit-card',
        actions: [],
        traits: [],
        weapons: [],
    }

    unit = Object.assign({}, defaults, unit)

    let prevWeaponTraits = []
    unit.actions = unit.actions.map((action) => {
        action = Object.assign({}, action)


        if (!action.traits) {
            return action
        }
        action.traits = action.traits.map((trait) => {

            trait = Object.assign({}, trait)
            let isPrevTrait = prevWeaponTraits.includes(trait.name)

            if (!isPrevTrait) {
                prevWeaponTraits.push(trait.name)
            } else {
                trait.desc = '*'
            }

            return trait
        })

        return action
    })

    return unit
}
