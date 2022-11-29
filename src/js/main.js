//import '../sass/main.scss'
//import '../views/templates/index.hbs'

import 'bootstrap/js/dist/dropdown.js'
import 'bootstrap/js/dist/button.js'
import 'bootstrap/js/dist/collapse.js'
import 'bootstrap/js/dist/offcanvas.js'
import Tooltip from 'bootstrap/js/dist/tooltip.js'
import './app.js'
//import 'bootstrap/js/dist/popover.js'

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new Tooltip(tooltipTriggerEl))

