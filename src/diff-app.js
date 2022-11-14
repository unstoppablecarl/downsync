import axios from 'axios'
import diff from 'node-htmldiff'

let url1 = 'https://raw.githubusercontent.com/unstoppablecarl/downsync/master/public/cards.html'

let branchInput = document.getElementById('branch')
let form = document.getElementById('compare-form')
form.addEventListener('submit', click)

function click(event) {

    event.preventDefault()

    let url2 = `https://raw.githubusercontent.com/unstoppablecarl/downsync/${branchInput.value}/public/cards.html`

    Promise.all([

            axios.get(url1),
            axios.get(url2),
        ])
        .then((results) => {
            let oldHtml = results[0].data
            let newHtml = results[1].data

            document.getElementById('diff').innerHTML = diff(oldHtml, newHtml)
        })

}



