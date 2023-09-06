import Handlebars from 'handlebars'
import helpers from './views/helpers/handlebars-helpers.js'
import layouts from 'handlebars-layouts'

Handlebars.registerHelper(helpers)
Handlebars.registerHelper(layouts(Handlebars))

export default Handlebars