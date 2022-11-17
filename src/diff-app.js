import axios from 'axios'
import diff from 'node-htmldiff'

//let url1 = 'https://raw.githubusercontent.com/unstoppablecarl/downsync/master/public/cards.html'


let file = 'unit-cards.html'

let branchInput = document.getElementById('branch')
let form = document.getElementById('compare-form')
let reverseInput = document.getElementById('reverse')

form.addEventListener('submit', click)

let queryParams = getQueryParams()

if (queryParams.reverse) {
    reverseInput.checked = true
}

if (queryParams.file) {
    file = queryParams.file + '.html'
}

if (queryParams.branch) {

    loadDiff(queryParams.branch, reverseInput.checked)
    branchInput.value = queryParams.branch
}

function click(event) {

    event.preventDefault()

    loadDiff(branchInput.value, reverseInput.value)

}

function loadDiff(branch, reverse) {
    let url1 = file
    let url2 = `https://raw.githubusercontent.com/unstoppablecarl/downsync/${branch}/public/${file}`

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


function tagUrl(file) {
    return `https://raw.githubusercontent.com/unstoppablecarl/downsync/v0/public/${file}.html`
}

