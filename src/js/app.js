import { createApp } from 'vue'

import './app/table-of-contents.js'

import CardFactionFilter from './components/card-faction-filter.vue'
import { FACTIONS } from '../data/constants.js'

const SVG_SPRITE_PATH = __SVG_SPRITE_PATH__

elementExists('vue-card-filter', (el) => {

    let props = {
        factions: FACTIONS,
    }

    const app = createApp(CardFactionFilter, props).provide('SVG_SPRITE_PATH', SVG_SPRITE_PATH)
    app.mount(el)
})

function elementExists(id, callback) {
    let el = document.getElementById(id)

    if (el) {
        callback(el)
    }
}

//import { formatDiff } from './app/diff-format.js'
//import { bindTooltips } from './app/tooltips.js'

//formatDiff();
//bindTooltips();
