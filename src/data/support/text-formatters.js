import {
    COST_ACTION,
    COST_ACTION_AND_COMMAND,
    COST_ACTION_OR_COMMAND,
    COST_COMMAND,
    COST_FREE,
    EMPHASIS_KEYWORDS,
} from '../constants.js'
import fs from 'fs'
import Handlebars from 'handlebars'

export function keywordFormatDesc({
                                      name,
                                      desc,
                                      desc_keywords_name = null,
                                      desc_keywords_before = [],
                                      desc_keywords_after = [],
                                  }) {
    let nameKeywords = [name]
    if (Array.isArray(desc_keywords_name)) {
        nameKeywords = desc_keywords_name
    }

    let before = desc_keywords_before || []
    let after = desc_keywords_after || []

    before = [].concat(before, nameKeywords)

    return keywordFormat(desc, before, after)
}

export function keywordFormatOrDesc({
                                        name,
                                        or_desc,
                                        desc_keywords_name = null,
                                        desc_keywords_before = [],
                                        desc_keywords_after = [],
                                    }) {
    return keywordFormatDesc({
        name,
        desc: or_desc,
        desc_keywords_name,
        desc_keywords_before,
        desc_keywords_after,
    })
}

export function keywordFormatDesc2({
                                       name,
                                       desc2,
                                       desc_keywords_name = null,
                                       desc_keywords_before = [],
                                       desc_keywords_after = [],
                                   }) {
    return keywordFormatDesc({
        name,
        desc: desc2,
        desc_keywords_name,
        desc_keywords_before,
        desc_keywords_after,
    })
}

export function keywordFormat(str, keywordsBefore = [], keywordsAfter = []) {
    if (!str) {
        return
    }

    let keywords = [].concat(keywordsBefore, EMPHASIS_KEYWORDS, keywordsAfter)
    str = emphasisKeywordFormat(str, keywords)
    str = costKeywordFormat(str)

    return str
}

function emphasisKeywordFormat(str, keywords) {

    let regex = new RegExp(`(${keywords.join('|')})`, 'g')
    const subst = `<em class="keyword">$&</em>`

    return str.replace(regex, subst)
}

let costTemplate

function getCostTemplate() {
    if (!costTemplate) {
        let tpl = fs.readFileSync('./src/views/partials/cost-icon.hbs', 'utf-8')
        costTemplate = Handlebars.compile(tpl)
    }

    return costTemplate
}

export function costKeywordFormat(str) {

    if (!str) {
        return
    }

    const costKeywords = [
        COST_ACTION_OR_COMMAND,
        COST_ACTION_AND_COMMAND,
        COST_ACTION,
        COST_COMMAND,
        COST_FREE,
    ]

    costKeywords.forEach((costKeyword) => {
        let template = getCostTemplate()
        let value = template({ cost: costKeyword })

        str = replace(str, costKeyword, value)
    })

    return str

    function replace(str, keyword, value) {
        let re = new RegExp(keyword, 'g')

        return str.replace(re, value)
    }
}

