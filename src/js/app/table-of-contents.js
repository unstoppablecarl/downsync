import OffCanvas from 'bootstrap/js/dist/offcanvas.js'

const offCanvasToggleEl = document.getElementById('btn-table-of-contents')

const offCanvasEl = document.getElementById('offcanvas-toc')
const bsOffcanvas = new OffCanvas(offCanvasEl)
const tocLockToggle = document.getElementById('toc-lock-toggle')
let locked = false

offCanvasToggleEl.addEventListener('click', function (e) {
    e.preventDefault()
    e.stopPropagation()
    bsOffcanvas.show()
})

//e.preventDefault();
//e.stopPropagation();
//bsOffcanvas.toggle();
document.querySelectorAll('.table-of-contents a')

    .forEach((el) => {
        el.addEventListener('click', (e) => {

            if (!locked) {
                e.preventDefault()

                let listener = offCanvasEl.addEventListener('hidden.bs.offcanvas', event => {
                    window.location = el.getAttribute('href')
                    offCanvasEl.removeEventListener('hidden.bs.offcanvas', listener)
                })
                bsOffcanvas.hide()
            }
        })
    })

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
