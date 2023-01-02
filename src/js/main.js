//import '../sass/main.scss'
//import '../views/templates/index.hbs'

import 'bootstrap/js/dist/dropdown.js'
import 'bootstrap/js/dist/button.js'
import 'bootstrap/js/dist/collapse.js'
import 'bootstrap/js/dist/offcanvas.js'
import 'bootstrap/js/dist/tab.js'

import Tooltip from 'bootstrap/js/dist/tooltip.js'
import './app.js'
//import 'bootstrap/js/dist/popover.js'

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new Tooltip(tooltipTriggerEl))

document.querySelectorAll('del img.icon').forEach(element => element.remove())
document.querySelectorAll('del img.card-portrait').forEach(element => element.remove())

document.querySelectorAll('ins:has(img.icon)').forEach(element => {
    element.replaceWith(...element.childNodes)
})
document.querySelectorAll('ins:has(img.card-portrait)').forEach(element => {
    element.replaceWith(...element.childNodes)
})
