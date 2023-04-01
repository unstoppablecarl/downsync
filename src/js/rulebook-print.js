import { Handler, Previewer, registerHandlers } from 'pagedjs'

class TocHandler extends Handler {
    constructor(chunker, polisher, caller) {
        super(chunker, polisher, caller)
    }

    beforeParsed(content) {
        createToc({
            content: content,
            tocElement: '#my-toc-content',
            titleElements: [
                'h2',
                'h3',
                'h4',
                'h5',
                'h6',
            ],
        })
    }
}

let paged = new Previewer()
registerHandlers(TocHandler)

let content = undefined
let stylesheets = undefined
let renderTo = undefined

let btnPrint = document.querySelectorAll('.btn-print-container')[0]
btnPrint.remove()

let title = document.querySelectorAll('h1')[0]
let generated = document.querySelector('h1 + p')

const tocContainer = document.querySelector('#my-toc-content')
tocContainer.prepend(generated)
tocContainer.prepend(title)

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

function createToc(config) {
    const content = config.content
    const tocElement = config.tocElement
    const titleElements = config.titleElements

    let tocElementDiv = content.querySelector(tocElement)
    let tocUl = document.createElement('ul')
    tocUl.id = 'list-toc-generated'
    tocElementDiv.appendChild(tocUl)

    // add class to all title elements
    let tocElementNbr = 0
    for (var i = 0; i < titleElements.length; i++) {
        let titleHierarchy = i + 1
        let titleElement = content.querySelectorAll(titleElements[i])

        titleElement.forEach(function (element) {
            // add classes to the element
            element.classList.add('title-element')
            element.setAttribute('data-title-level', titleHierarchy)

            // add id if doesn't exist
            tocElementNbr++
            let idElement = element.id
            if (idElement === '') {
                element.id = 'title-element-' + tocElementNbr
            }
        })
    }

    // create toc list
    let tocElements = content.querySelectorAll('.title-element')

    for (var i = 0; i < tocElements.length; i++) {
        let tocElement = tocElements[i]

        let tocNewLi = document.createElement('li')

        // Add class for the hierarcy of toc
        tocNewLi.classList.add('toc-element')
        tocNewLi.classList.add(
            'toc-element-level-' + tocElement.dataset.titleLevel,
        )

        // Keep class of title elements
        let classTocElement = tocElement.classList
        for (var n = 0; n < classTocElement.length; n++) {
            if (classTocElement[n] !== 'title-element') {
                tocNewLi.classList.add(classTocElement[n])
            }
        }

        tocNewLi.innerHTML = `<span class="toc-item">${tocElement.textContent}</span><span class="spacer">..............................................................................................................</span><a href="#${tocElement.id}" class="toc-link"></a>`
        tocUl.appendChild(tocNewLi)
    }
}

