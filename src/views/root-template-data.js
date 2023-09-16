import { FACTIONS } from '../data/constants.js'
import { FEATURE_ADVISOR_CARD } from '../versioning.js'

const staticRootData = {
    facebook_group_url: 'https://www.facebook.com/groups/downsync',
    gallery_url: 'https://photos.app.goo.gl/gW8XUbxJD7g9WXQNA',
    discord_url: 'https://discord.gg/efeB5a92cn',
    factions: FACTIONS,
    FEATURE_ADVISOR_CARD,
}

export async function buildRootData() {
    return staticRootData
}
