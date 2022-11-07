import { COST_ACTION, COST_ACTION_AND_COMMAND, COST_ACTION_OR_COMMAND, COST_COMMAND } from './costs.js'

export const emphasisKeywords = [
    [
        'TARG',
        'DEF',
        'SCAN',
        'SPD',
    ],
    [
        'KILL',
        'STUN',
    ],
    [
        'Activated Tokens',
        'Activated Token',
    ],
    [
        'Overwatch Tokens',
        'Overwatch Token',
    ],
    [
        'Target Tag Tokens',
        'Target Tag Token',
    ],
    [
        'Countermeasure Tokens',
        'Countermeasure Token',
    ],
    [
        'Shroud Templates',
        'Shroud Template',
    ],
    [
        'Refreshed',
    ],
    [
        'All Terrain',
    ],
    [
        'Fire Support',
    ],
]

export function keywordFormat(str) {
    str = emphasisKeywordFormat(str)
    str = costKeywordFormat(str)

    return str
}

function emphasisKeywordFormat(str) {
    if (!str) {
        return
    }

    emphasisKeywords.forEach((group) => {

        for (let i = 0; i < group.length; i++) {
            let key = group[i]

            const replaced = replace(str, key)
            const matchFound = str !== replaced
            // if a keyword in the group was matched stop trying to match others in the group
            if (matchFound) {
                str = replaced

                break
            }
        }
    })

    return str


    function replace(str, keyword) {
        let re = new RegExp(keyword, 'g')
        let rep = `<em class="keyword">${keyword}</em>`

        return str.replace(re, rep)
    }
}


const costKeywords = {
    [COST_ACTION_OR_COMMAND]: `<span class="cost-icon-action-or-command">A/C</span>`,
    [COST_ACTION_AND_COMMAND]: ` <span class="cost-icon-action-and-command">A+C</span>`,
    [COST_ACTION]: `<span class="cost-icon-action">A</span>`,
    [COST_COMMAND]: `<span class="cost-icon-command">C</span>`,
}

export function costKeywordFormat(str) {
    if (!str) {
        return
    }

    Object.keys(costKeywords)
        .forEach((costKeyword) => {
            const value = costKeywords[costKeyword]

            str = replace(str, costKeyword, value)
        })

    return str


    function replace(str, keyword, value) {
        let re = new RegExp(keyword, 'g')

        return str.replace(re, value)
    }
}

