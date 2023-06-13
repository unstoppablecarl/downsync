import { pagedPreview } from './support/pagedjs-helper.js'

const btnPrintContainer = document.querySelector('.btn-print-container')
btnPrintContainer.remove()

pagedPreview(btnPrintContainer)