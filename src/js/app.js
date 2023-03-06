import { createApp } from 'vue'

import './app/table-of-contents.js'

import CardFilter from './components/card-filter.vue'

elementExists('vue-card-filter', (el) => {

    let factionsContent = el.dataset.factions
    let factions = JSON.parse(factionsContent)

    let props = {
        factions,
    }

    const app = createApp(CardFilter, props)
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
