import {
    COST_ACTION,
    COST_ACTION_AND_COMMAND,
    COST_ACTION_OR_COMMAND,
    COST_COMMAND,
    EMPHASIS_KEYWORDS,
} from '../constants.js'

export function keywordFormat(str, extraKeywords = []) {
    if (!str) {
        return
    }

    let keywords = EMPHASIS_KEYWORDS.concat(extraKeywords)
    str = emphasisKeywordFormat(str, keywords)
    str = costKeywordFormat(str)

    return str
}

function emphasisKeywordFormat(str, keywords) {

    let regex = new RegExp(`(${keywords.join('|')})`, 'g')
    const subst = `<em class="keyword">$&</em>`

    return str.replace(regex, subst)
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

