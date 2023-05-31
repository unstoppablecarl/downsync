import { keywordFormat, keywordFormatDesc, keywordFormatDesc2, keywordFormatOrDesc } from './text-formatters.js'
import { COST_ACTION, COST_COMMAND } from '../constants.js'

export function makeUnit(unit) {

    const defaults = {
        template: 'unit-card',
        actions: [],
        traits: [],
        notes: [],
    }

    unit = Object.assign(defaults, unit)

    unit.actions = prepareActions(unit.actions)

    unit.has_teams = !!unit.actions.find((action) => {
        return !!action.team
    })

    return unit
}

export function makeAdvisor(advisor) {

    const defaults = {
        img: 'advisor-placeholder.svg',
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
        return prepareDuplicateActionTraits(action, prevWeaponTraits)
    })
}

function prepareDuplicateActionTraits(action, prevWeaponTraits) {
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
}

export function makeCommandAbility(ability) {

    let defaults = {
        name: null,
        cost: COST_COMMAND,
        desc: null,
        traits: [],
    }

    let result = Object.assign(defaults, ability)
    result.traits.map((trait) => Object.assign({}, trait))

    result.desc = keywordFormatDesc(result)

    result.cost = keywordFormat(result.cost)

    if (result.cost) {
        result.desc = `${result.cost} ${result.desc}`
    }

    return result
}

export function makeTrait(trait) {

    trait.note = keywordFormat(trait.note)
    trait.desc = keywordFormatDesc(trait)
    return trait
}

export function makeAction(action) {

    let defaults = {
        cost: COST_ACTION,
        effect: null,
        traits: [],
        desc: '',
    }

    let result = Object.assign(defaults, action)

    result.traits.map((trait) => Object.assign({}, trait))

    result.desc = keywordFormatDesc(result)

    if (result.or_desc) {
        result.or_desc = keywordFormatOrDesc(result)
    }

    if (result.desc2) {
        result.desc2 = keywordFormatDesc2(result)
    }
    return result
}

export function modifyAction(action, mods, appendTraits = []) {

    action = Object.assign({}, action, mods)
    action.traits = action.traits.concat(appendTraits)

    return action
}

export function makeWeapon(weapon) {

    let defaults = {
        cost: COST_ACTION,
        effect: 'kill',
        traits: [],
        desc: '',
    }
    let result = Object.assign(defaults, weapon)

    return makeAction(result)
}