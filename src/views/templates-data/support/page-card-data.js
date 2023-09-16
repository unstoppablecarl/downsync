import { chunk, getTimestamp } from '../../../data/support/util.js'
import {
    COALITION_DEMO_UNITS,
    COALITION_UNITS,
    SENTINEL_HUNTER,
    SENTINEL_TAGGER,
} from '../../../data/cards/coalition-units.js'
import { REPUBLIC_DEMO_UNITS, REPUBLIC_UNITS } from '../../../data/cards/republic-units.js'
import { FREE_UNION_DEMO_UNITS, FREE_UNION_UNITS } from '../../../data/cards/free-union-units.js'
import { CARDS_VERSION } from '../../../versioning.js'
import {
    COALITION_FACTION_SLUG,
    FACTIONS,
    FREE_UNION_FACTION_SLUG,
    REPUBLIC_FACTION_SLUG,
} from '../../../data/constants.js'
import { COALITION_ADVISORS } from '../../../data/cards/coalition-advisors.js'
import { REPUBLIC_ADVISORS } from '../../../data/cards/republic-advisors.js'
import { FREE_UNION_ADVISORS } from '../../../data/cards/free-union-advisors.js'

const TIMESTAMP = getTimestamp()

const FACTION_DATA = (() => {

    const FACTION_CARD_DATA = {
        [COALITION_FACTION_SLUG]: {
            units: COALITION_UNITS,
            advisors: COALITION_ADVISORS,
            demo_units: COALITION_DEMO_UNITS,
        },
        [REPUBLIC_FACTION_SLUG]: {
            units: REPUBLIC_UNITS,
            advisors: REPUBLIC_ADVISORS,
            demo_units: REPUBLIC_DEMO_UNITS,
        },
        [FREE_UNION_FACTION_SLUG]: {
            units: FREE_UNION_UNITS,
            advisors: FREE_UNION_ADVISORS,
            demo_units: FREE_UNION_DEMO_UNITS,
        },
    }

    let result = FACTIONS.map((faction) => {
        return Object.assign({ faction }, FACTION_CARD_DATA[faction.faction_slug])
    })

    return Object.freeze(result)
})()

export const FACTION_UNITS = FACTION_DATA.map(({
                                                   faction,
                                                   units,
                                               }) => {
    return {
        faction: faction.faction,
        faction_slug: faction.faction_slug,
        cards: prepareCards(units),
    }
})
export const ALL_UNITS = FACTION_UNITS.flatMap((faction) => faction.cards)
export const FACTION_DEMO_UNITS = FACTION_DATA.map(({
                                                        faction,
                                                        demo_units,
                                                    }) => {
    return {
        faction: faction.faction,
        faction_slug: faction.faction_slug,
        cards: prepareCards(demo_units),
    }
})

export const FACTION_ADVISORS = FACTION_DATA.map(({
                                                      faction,
                                                      advisors,
                                                  }) => {
    return {
        faction: faction.faction,
        faction_slug: faction.faction_slug,
        cards: prepareCards(advisors),
    }
})
export const ALL_ADVISORS = FACTION_ADVISORS.flatMap((faction) => faction.cards)

export function cardsToPages(cards, cardsPerPage) {
    return chunk(cards, cardsPerPage)
}

function prepareCards(cards) {
    return cards.map(prepareCard)
}

function prepareCard(card) {
    card.timestamp = TIMESTAMP
    card.cardsVersion = CARDS_VERSION

    let nameWithVariant = card.name

    if (card.variant_name) {
        nameWithVariant += ': ' + card.variant_name
    }
    card.name_with_variant = nameWithVariant
    return card
}

export function prepareSplitCards(targetUnits) {

    let sentinelSlugs = [
        SENTINEL_HUNTER.slug,
        SENTINEL_TAGGER.slug,
    ]

    const units = targetUnits.filter((item) => {

        return !sentinelSlugs.includes(item.slug)

    })

    units.splice(1, 0, {
        template: 'unit-split-card',
        splitCards: [
            SENTINEL_TAGGER,
            SENTINEL_HUNTER,
        ],
    })

    return units
}
