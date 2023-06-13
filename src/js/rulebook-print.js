import { pagedPreview } from './support/pagedjs-helper.js'

const btnPrintContainer = document.querySelector('.btn-print-container')
btnPrintContainer.remove()

const title = document.querySelector('h1')
const generated = document.querySelector('h1 + p')
const titleContainer = document.querySelector('#title-container')

titleContainer.prepend(generated)
titleContainer.prepend(title)

pagedPreview(btnPrintContainer)


