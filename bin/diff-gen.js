import axios from 'axios'
import diff from 'node-htmldiff'
import fs from 'fs'

function loadDiff() {
    let url = 'https://downsync.net/unit-cards.html'

    axios.get(url)
        .then((results) => {
            //
            let oldHtml = results.data
            let newHtml = fs.promises.readFile('./dist/unit-cards.html')
                .then((file) => {
                    let diffHtml = diff(oldHtml, file + '')
                    fs.promises.writeFile('./dist/diff.html', diffHtml)
                })
        })
}

loadDiff()
