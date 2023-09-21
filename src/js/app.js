import { createApp } from 'vue'

import CardFactionFilter from './components/card-faction-filter.vue'

const SVG_SPRITE_PATH = __SVG_SPRITE_PATH__

elementExists('vue-card-filter', (el) => {

    let props = parseInjectedProps({ ...el.dataset })

    const app = createApp(CardFactionFilter, props).provide('SVG_SPRITE_PATH', SVG_SPRITE_PATH)
    app.mount(el)
})

function elementExists(id, callback) {
    let el = document.getElementById(id)

    if (el) {
        callback(el)
    }
}

function parseInjectedProps(injectedProps) {

    let parsedProps = {}
    Object.keys(injectedProps).forEach((key) => {
        let val = injectedProps[key]

        let newKey = key
        if (key.startsWith('json_')) {
            newKey = key.substring('json_'.length)

            val = JSON.parse(val)
        }
        parsedProps[newKey] = val
    })

    return parsedProps
}

//import { formatDiff } from './app/diff-format.js'
//import { bindTooltips } from './app/tooltips.js'

//formatDiff();
//bindTooltips();
