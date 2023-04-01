import { Previewer } from 'pagedjs'

let paged = new Previewer()

let content = undefined
let stylesheets = undefined
let renderTo = undefined

let btnPrint = document.querySelectorAll('.btn-print-container')[0]
btnPrint.remove()

let flow = paged.preview(content, stylesheets, renderTo)
    .then((flow) => {

        addStyle(`
  @media print {
      .btn-print-container {
            display: none;
      }
  }

  .btn-print-container {
    position: absolute:
    top: 20px;
    left: 20px;
  }
 
 html {
    background: #fff !important;
 }
`)
        document.body.prepend(btnPrint)

        console.log('Rendered', flow.total, 'pages.')
    })

function addStyle(styleString) {
    const style = document.createElement('style')
    //style.setAttribute('foo', 'zxc')
    style.textContent = styleString
    document.head.append(style)
}