import { keywordFormat, keywordFormatDesc } from './text-formatters.js'
import { COST_COMMAND } from '../constants.js'

export function makeUnit(unit) {

    const defaults = {
        template: 'unit-card',
        actions: [],
        traits: [],
    }

    unit = Object.assign(defaults, unit)

    unit.actions = prepareActions(unit.actions)

    return unit
}

export function makeAdvisor(advisor) {

    const defaults = {
        bg: 'placeholders/advisor-placeholder.svg',
        template: 'advisor-card',
        actions: [],
        traits: [],
    }

    advisor = Object.assign(defaults, advisor)

    advisor.actions = prepareActions(advisor.actions)

    return advisor
}

function prepareActions(actions) {
    let prevWeaponTraits = []

    return actions.map((action) => {
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
}


export function makeCommandAbility(ability) {

    let defaults = {
        name: null,
        cost: COST_COMMAND,
        desc: null,
        traits: [],
    }

    let result = Object.assign(defaults, ability)

    result.desc = keywordFormat(result.desc)

    result.traits = result.traits.map((trait) => {
        trait = Object.assign({}, trait)
        trait.desc = keywordFormat(trait.desc)
        return trait
    })

    result.cost = keywordFormat(result.cost)

    return result
}

export function makeTrait(trait) {

    trait.note = keywordFormat(trait.note)
    trait.desc = keywordFormatDesc(trait)
    return trait
}
