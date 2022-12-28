import {
    AURORA,
    GUARDIAN_DESTROYER,
    GUARDIAN_MARKSMAN,
    PHANTOM,
    SENTINEL_HUNTER,
    SENTINEL_TAGGER,
    SPIDER_DRONE_SOLDIER,
    VIRAGO_TANK,
    WIDOW_SCOUT,
} from './cards/coalition-units.js'
import {
    COURIER_TRANSPORT,
    CRUSADER_MEDIUM_TANK,
    HARBINGER_RECON,
    MANDIBLE,
    SAMSON_HEAVY_TANK,
    SEEKER_TEAM,
    VECTOR_SQUAD,
} from './cards/republic-units.js'
import { SIZE_LARGE, SIZE_MEDIUM, SIZE_SMALL } from './constants.js'

export const COALITION_FULL_ARMY_LIST = make('Coalition', 'EX1', [
    {
        unit: WIDOW_SCOUT,
        count: 1,
    },
    {
        unit: SPIDER_DRONE_SOLDIER,
        count: 1,
    },
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
        count: 3,
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

export const REPUBLIC_FULL_ARMY_LIST = make('Republic of Man', 'EX1', [
    {
        unit: VECTOR_SQUAD,
        count: 2,
    },
    {
        unit: SEEKER_TEAM,
        count: 1,
    },
    {
        unit: HARBINGER_RECON,
        count: 1,
    },
    {
        unit: COURIER_TRANSPORT,
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

export const COALITION_STARTER_LIST = make('Coalition', 'Starter Set', [
    {
        unit: WIDOW_SCOUT,
        count: 1,
    },
    {
        unit: SENTINEL_TAGGER,
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

export const REPUBLIC_STARTER_LIST = make('Republic of Man', 'Starter Set', [
    {
        unit: HARBINGER_RECON,
        count: 1,
    },
    {
        unit: VECTOR_SQUAD,
        count: 1,
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

function make(faction, name, units) {

    const modelCount = units.reduce((total, item) => {
        return total + item.count
    }, 0)

    const smallCount = countBySignature(units, SIZE_SMALL)
    const mediumCount = countBySignature(units, SIZE_MEDIUM)
    const largeCount = countBySignature(units, SIZE_LARGE)

    return {
        faction,
        name,
        units,
        modelCount,
        smallCount,
        mediumCount,
        largeCount,
    }
}

function countBySignature(units, signature) {
    return units.reduce((total, item) => {
        let count = 0
        if (item.unit.signature == signature) {
            count = item.count
        }
        return total + count
    }, 0)
}
