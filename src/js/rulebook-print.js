import { Previewer } from 'pagedjs'

let paged = new Previewer()

const btnPrintContainer = document.querySelector('.btn-print-container')
btnPrintContainer.remove()

const title = document.querySelector('h1')
const generated = document.querySelector('h1 + p')
const titleContainer = document.querySelector('#title-container')

titleContainer.prepend(generated)
titleContainer.prepend(title)

let content = undefined
let stylesheets = undefined
let renderTo = undefined

paged.preview(content, stylesheets, renderTo)
    .then((flow) => {

        /*
        pagedjs will remove any print hidden elements from the view.
        This allows the print btn to be displayed but not printed after pagedjs is run.
         */
        addStyle(`
@media print {
    .btn-print-container {
        display: none !important;
    }
}
`)

        document.body.prepend(btnPrintContainer)

        console.log('Rendered', flow.total, 'pages')
    })

function addStyle(styleString) {
    const style = document.createElement('style')
    style.textContent = styleString
    document.head.append(style)
}


