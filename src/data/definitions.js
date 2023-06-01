import { keywordFormat } from './support/text-formatters.js'

export const NOTE_STEALTH_TOKEN = make({
    name: 'Stealth Token',
    desc: 'A Unit with a Stealth Token can only be targeted by enemy Actions with a REVEAL effect. A Unit looses the token when it performs a Combat Action or it suffers a REVEAL effect or an enemy Unit is within 2" after any Unit ends a move. A Unit cannot gain a Stealth Token if an enemy Unit is within 2" and cannot have more than 1.',
})

function make(ability) {
    ability.desc = keywordFormat(ability.desc)

    return ability
}
