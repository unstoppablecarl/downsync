import { FACTION_AND_SCENARIO_UNITS } from './support/page-card-data.js'

export const factionCards = FACTION_AND_SCENARIO_UNITS

export const filterFactions = FACTION_AND_SCENARIO_UNITS.map((item) => {
    let {
        faction,
        faction_slug,
        faction_svg_sprite,
    } = item

    return {
        faction,
        faction_slug,
        faction_svg_sprite,
    }
})
