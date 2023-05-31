import { COALITION_ADVISORS } from '../../data/cards/coalition-advisors.js'
import {
    COALITION_FACTION_SLUG,
    FACTIONS,
    FREE_UNION_FACTION_SLUG,
    REPUBLIC_FACTION_SLUG,
} from '../../data/constants.js'
import { REPUBLIC_ADVISORS } from '../../data/cards/republic-advisors.js'
import { FREE_UNION_ADVISORS } from '../../data/cards/free-union-advisors.js'

const map = {
    [COALITION_FACTION_SLUG]: COALITION_ADVISORS,
    [REPUBLIC_FACTION_SLUG]: REPUBLIC_ADVISORS,
    [FREE_UNION_FACTION_SLUG]: FREE_UNION_ADVISORS,
}

const factionAdvisors = FACTIONS.map((item) => {
    return Object.assign({}, item, {
        factionCards: map[item.faction_slug],
    })
})

export const cardData = factionAdvisors



