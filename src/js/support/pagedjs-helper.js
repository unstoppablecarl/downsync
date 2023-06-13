import { Previewer } from 'pagedjs'

export function pagedPreview(prependContent, content = undefined, stylesheets = undefined, renderTo = undefined) {
    let paged = new Previewer()

    return paged.preview(content, stylesheets, renderTo)
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

            console.log(prependContent)
            document.body.prepend(prependContent)

            console.log('Rendered', flow.total, 'pages')

            return flow
        })

}

function addStyle(styleString) {
    const style = document.createElement('style')
    style.textContent = styleString
    document.head.append(style)
}
