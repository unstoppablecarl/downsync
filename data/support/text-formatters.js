import {
    COST_ACTION,
    COST_ACTION_AND_COMMAND,
    COST_ACTION_OR_COMMAND,
    COST_COMMAND,
    EMPHASIS_KEYWORD_GROUPS,
    EMPHASIS_KEYWORDS,
} from '../constants.js'

export function keywordFormat(str) {
    str = emphasisKeywordFormat(str)
    str = costKeywordFormat(str)

    return str
}

function emphasisKeywordFormat(str) {
    if (!str) {
        return
    }

    str = formatEmphasisKeywords(str)
    str = formatEmphasisKeywordGroups(str)

    return str
}

function formatEmphasisKeywords(str) {
    EMPHASIS_KEYWORDS.forEach((keyword) => {

        str = wrapEmphasis(str, keyword)
    })

    return str
}

function formatEmphasisKeywordGroups(str) {
    EMPHASIS_KEYWORD_GROUPS.forEach((group) => {

        for (let i = 0; i < group.length; i++) {
            let key = group[i]

            const replaced = wrapEmphasis(str, key)
            const matchFound = str !== replaced
            // if a keyword in the group was matched stop trying to match others in the group
            if (matchFound) {
                str = replaced

                break
            }
        }
    })

    return str
}

function wrapEmphasis(str, keyword) {
    let re = new RegExp(keyword, 'g')
    let rep = `<em class="keyword">${keyword}</em>`

    return str.replace(re, rep)
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

