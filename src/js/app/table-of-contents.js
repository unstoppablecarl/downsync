import OffCanvas from 'bootstrap/js/dist/offcanvas.js'

const offCanvasEl = document.getElementById('offcanvas-toc')

let locked = false

let bsOffcanvas

if (offCanvasEl) {
    bsOffcanvas = new OffCanvas(offCanvasEl)
}
const tocLockToggle = document.getElementById('toc-lock-toggle')
if (tocLockToggle) {
    tocLockToggle.addEventListener('click', (e) => {
        locked = !locked

        if (locked) {
            tocLockToggle.classList.add('locked')
            tocLockToggle.classList.remove('unlocked')
        } else {
            tocLockToggle.classList.remove('locked')
            tocLockToggle.classList.add('unlocked')
        }
    })
}

const offCanvasToggleEl = document.getElementById('btn-table-of-contents')
if (offCanvasToggleEl) {
    offCanvasToggleEl.addEventListener('click', function (e) {
        e.preventDefault()
        e.stopPropagation()
        bsOffcanvas.show()
    })
}

document.querySelectorAll('.table-of-contents a')
    .forEach((el) => {
        el.addEventListener('click', (e) => {

            if (locked) {
                return
            }

            e.preventDefault()

            offCanvasEl.addEventListener('hidden.bs.offcanvas', (event) => {
                window.location = el.getAttribute('href')
            }, { once: true })

            bsOffcanvas.hide()
        })
    })

