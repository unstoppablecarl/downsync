import { COALITION_ADVISORS } from '../../data/cards/coalition-advisors.js'
import { COALITION_FACTION_SLUG, FACTIONS, REPUBLIC_FACTION_SLUG } from '../../data/constants.js'
import { REPUBLIC_ADVISORS } from '../../data/cards/republic-advisors.js'

const map = {
    [COALITION_FACTION_SLUG]: COALITION_ADVISORS,
    [REPUBLIC_FACTION_SLUG]: REPUBLIC_ADVISORS,
}

const factionAdvisors = FACTIONS.map((item) => {
    return Object.assign({}, item, {
        factionCards: map[item.faction_slug],
    })
})

export const cardData = factionAdvisors



