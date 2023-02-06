import OffCanvas from 'bootstrap/js/dist/offcanvas.js'

const offCanvasId = 'offcanvas-toc'
const offCanvasEl = document.getElementById(offCanvasId)
const bsOffcanvas = new OffCanvas('#' + offCanvasId)

document.querySelectorAll('.table-of-contents a')

    .forEach((el) => {
        el.addEventListener('click', (e) => {
            e.preventDefault()

            let listener = offCanvasEl.addEventListener('hidden.bs.offcanvas', event => {
                window.location = el.getAttribute('href')
                offCanvasEl.removeEventListener('hidden.bs.offcanvas', listener)
            })

            bsOffcanvas.hide()
        })
    })

