import axios from 'axios'
import fs from 'fs'

import diff from 'node-htmldiff'

let url = 'https://raw.githubusercontent.com/unstoppablecarl/downsync-doc-generator/master/public/cards.html'

axios.get(url)
    .then(response => {

        let oldHtml = response.data
        let newHtml = fs.readFileSync('./public/cards.html', 'utf8')

        let contents = diff(oldHtml, newHtml)

        fs.writeFileSync('./public/cards-diff.html', contents, 'utf8')
    })
    .catch(error => {
        console.log(error)
    })

