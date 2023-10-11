import { chunk, getTimestamp } from '../../../data/support/util.js'
import {
    COALITION_DEMO_UNITS,
    COALITION_UNITS,
    SENTINEL_HUNTER,
    SENTINEL_TAGGER,
} from '../../../data/cards/coalition-units.js'
import { REPUBLIC_DEMO_UNITS, REPUBLIC_UNITS } from '../../../data/cards/republic-units.js'
import { FREE_UNION_DEMO_UNITS, FREE_UNION_UNITS } from '../../../data/cards/free-union-units.js'
import { CARDS_VERSION, FEATURE_SCENARIO_UNITS } from '../../../versioning.js'
import {
    COALITION_FACTION_SLUG,
    FACTIONS,
    FREE_UNION_FACTION_SLUG,
    REPUBLIC_FACTION_SLUG,
    SCENARIO_FACTION,
} from '../../../data/constants.js'
import { COALITION_ADVISORS } from '../../../data/cards/coalition-advisors.js'
import { REPUBLIC_ADVISORS } from '../../../data/cards/republic-advisors.js'
import { FREE_UNION_ADVISORS } from '../../../data/cards/free-union-advisors.js'
import { SCENARIO_UNITS } from '../../../data/cards/scenario-units.js'

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
        Object.freeze(faction)
        return Object.assign({ faction }, FACTION_CARD_DATA[faction.faction_slug])
    })

    return Object.freeze(result)
})()

export const FACTION_UNITS = FACTION_DATA.map(({
                                                   faction,
                                                   units,
                                               }) => {
    return Object.freeze({
        faction_name: faction.faction_name,
        faction_slug: faction.faction_slug,
        faction_svg_sprite: faction.faction_svg_sprite,
        cards: prepareCards(units),
    })
})

let _FACTION_AND_SCENARIO_UNITS = [].concat(FACTION_UNITS)

if (FEATURE_SCENARIO_UNITS) {
    _FACTION_AND_SCENARIO_UNITS.push(Object.assign({}, SCENARIO_FACTION, {
        cards: prepareCards(SCENARIO_UNITS),
    }))
}

export const FACTION_AND_SCENARIO_UNITS = _FACTION_AND_SCENARIO_UNITS
export const ALL_UNITS = FACTION_UNITS.flatMap((faction) => faction.cards)
export const FACTION_DEMO_UNITS = FACTION_DATA.map(({
                                                        faction,
                                                        demo_units,
                                                    }) => {
    return {
        faction_name: faction.faction_name,
        faction_slug: faction.faction_slug,
        faction_svg_sprite: faction.faction_svg_sprite,
        cards: prepareCards(demo_units),
    }
})

export const FACTION_ADVISORS = FACTION_DATA.map(({
                                                      faction,
                                                      advisors,
                                                  }) => {
    return {
        faction_name: faction.faction_name,
        faction_slug: faction.faction_slug,
        faction_svg_sprite: faction.faction_svg_sprite,
        cards: prepareCards(advisors),
    }
})

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
        faction: SENTINEL_TAGGER.faction,
        splitCards: [
            SENTINEL_TAGGER,
            SENTINEL_HUNTER,
        ],
    })

    return units
}

export function prepareSplitCards2(factionData) {

    return factionData.map(({
                                faction_name,
                                faction_slug,
                                faction_svg_sprite,
                                cards,
                            }) => {
        let UNITS = cards

        if (faction_slug === COALITION_FACTION_SLUG) {
            UNITS = prepareSplitCards(UNITS)
        }

        return {
            faction_name,
            faction_slug,
            faction_svg_sprite,
            cards: UNITS,
        }
    })
}

export function factionCardsToPrintPages(factionData, cardsPerPage) {
    return factionData.map(({
                                faction_name,
                                faction_slug,
                                faction_svg_sprite,
                                cards,
                            }) => {
        return {
            faction_name,
            faction_slug,
            faction_svg_sprite,
            cardPages: cardsToPages(cards, cardsPerPage),
        }
    })
}
