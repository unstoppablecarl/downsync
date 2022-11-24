import {
    AURORA,
    GUARDIAN_DESTROYER,
    GUARDIAN_MARKSMAN,
    PHANTOM,
    RECON_SCOUT,
    SENTINEL_HUNTER,
    SENTINEL_TAGGER,
    SPIDER_DRONE_ASSASSIN,
    VIRAGO_TANK,
} from './cards/coalition-units.js'
import {
    CLEANSER_SQUAD,
    COURIER_TRANSPORT,
    CRUSADER_MEDIUM_TANK,
    HARBINGER_MEDIUM_RECON,
    MANDIBLE,
    SAMSON_HEAVY_TANK,
} from './cards/republic-units.js'

export const coalitionArmyList = make('Coalition', [
    {
        unit: RECON_SCOUT,
        count: 1,
    },
    {
        unit: SPIDER_DRONE_ASSASSIN,
        count: 2,
    },
    {
        unit: SENTINEL_TAGGER,
        count: 2,
    },
    {
        unit: SENTINEL_HUNTER,
        count: 2,
    },
    {
        unit: VIRAGO_TANK,
        count: 4,
    },
    {
        unit: AURORA,
        count: 1,
    },
    {
        unit: PHANTOM,
        count: 1,
    },
    {
        unit: GUARDIAN_DESTROYER,
        count: 1,
    },
    {
        unit: GUARDIAN_MARKSMAN,
        count: 1,
    },
])

export const republicArmyList = make('Republic of Man', [
    {
        unit: CLEANSER_SQUAD,
        count: 2,
    },
    {
        unit: COURIER_TRANSPORT,
        count: 2,
    },
    {
        unit: HARBINGER_MEDIUM_RECON,
        count: 2,
    },
    {
        unit: CRUSADER_MEDIUM_TANK,
        count: 3,
    },
    {
        unit: MANDIBLE,
        count: 1,
    },
    {
        unit: SAMSON_HEAVY_TANK,
        count: 1,
    },
])

export const coalitionDemoList = make('Coalition Demo', [
    {
        unit: SENTINEL_TAGGER,
        count: 1,
    },
    {
        unit: SENTINEL_HUNTER,
        count: 1,
    },
    {
        unit: VIRAGO_TANK,
        count: 2,
    },
    {
        unit: PHANTOM,
        count: 1,
    },
    {
        unit: GUARDIAN_DESTROYER,
        count: 1,
    },
])

export const republicDemoList = make('Republic of Man Demo', [
    {
        unit: HARBINGER_MEDIUM_RECON,
        count: 1,
    },
    {
        unit: CLEANSER_SQUAD,
        count: 2,
    },
    {
        unit: COURIER_TRANSPORT,
        count: 1,
    },
    {
        unit: CRUSADER_MEDIUM_TANK,
        count: 2,
    },
    {
        unit: SAMSON_HEAVY_TANK,
        count: 1,
    },
])

export const armyLists = [
    coalitionDemoList,
    republicDemoList,

    coalitionArmyList,
    republicArmyList,
]

function make(name, list) {

    const modelCount = list.reduce((total, item) => {
        return total + item.count
    }, 0)

    return {
        name,
        list,
        modelCount,
    }
}