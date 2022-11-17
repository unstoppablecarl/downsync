import axios from 'axios'
import diff from 'node-htmldiff'

let file = 'unit-cards.html'

let targetInput = document.getElementById('target')
let form = document.getElementById('compare-form')
let reverseInput = document.getElementById('reverse')

form.addEventListener('submit', click)

let queryParams = getQueryParams()

reverseInput.checked = queryParams.reverse == 1

if (queryParams.file) {
    file = queryParams.file + '.html'
}

if (queryParams.target) {

    loadDiff(queryParams.target, reverseInput.checked)
    targetInput.value = queryParams.target
}

function click(event) {

    event.preventDefault()

    loadDiff(targetInput.value, reverseInput.checked)
}

function loadDiff(target, reverse) {
    let url1 = `https://raw.githubusercontent.com/unstoppablecarl/downsync/main/public/${file}`
    let url2 = `https://raw.githubusercontent.com/unstoppablecarl/downsync/${target}/public/${file}`

    Promise.all([
            axios.get(url1),
            axios.get(url2),
        ])
        .then((results) => {
            let oldHtml = results[0].data
            let newHtml = results[1].data

            if (reverse) {

                let temp = oldHtml
                oldHtml = newHtml
                newHtml = temp
            }

            document.getElementById('diff').innerHTML = diff(oldHtml, newHtml)
        })
}

function getQueryParams() {
    return new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    })
}
