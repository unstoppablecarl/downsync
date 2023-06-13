import axios from 'axios'
import diff from 'node-htmldiff'
import fs from 'fs'

function loadDiff() {

    let file = 'rules.html'
    let url = `https://downsync.net/${file}`

    axios.get(url)
        .then((results) => {
            //
            let oldHtml = results.data
            let newHtml = fs.promises.readFile(`./dist/${file}`)
                .then((file) => {
                    let diffHtml = diff(oldHtml, file + '')
                    fs.promises.writeFile('./dist/diff.html', diffHtml)
                })
        })
}

loadDiff()
