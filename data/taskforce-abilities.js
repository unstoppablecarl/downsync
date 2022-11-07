import { keywordFormat } from './keywords.js'

//
//
//export const GUARD = make({
//    name: 'Guard',
//    note: '6"',
//    desc: 'Target unit in this Taskforce within 6" gains a Countermeasure Token.',
//});


export const COORDINATE_ACTION = (action) => {
    return make({
        name: 'Coordinate',
        note: action,
        desc: `One unit in this taskforce may perform a free ${action} action during its activation.`,
    })
}

export const SHROUD_ROUNDS = (count) => {
    return make({
        name: 'Shroud Rounds',
        note: `place x ${count}`,
        desc: `Place ${count} Shroud Templates anywhere in LOS of any taskforce unit. Removed when this unit is Refreshed or destroyed.`,
    })
}
export const DEPLOY_GLIDER_TEAM = make({
    name: 'Deploy Glider Team',
    desc: 'This unit may use the Glider Team action during its activation.',
})

function make(taskforceAbility) {
    taskforceAbility.desc = keywordFormat(taskforceAbility.desc)

    return taskforceAbility
}
