import axios from 'axios'
import diff from 'node-htmldiff'
import fs from 'fs'

function loadDiff(branch) {
    let url2 = 'https://downsync.net/unit-cards.html'

    axios.get(url2)
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

loadDiff('master')
