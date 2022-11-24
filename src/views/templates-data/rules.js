import fs from 'fs'
import { Remarkable } from 'remarkable'
import toc from 'markdown-toc'

let markdown = fs.readFileSync('src/markdown/downsync-rules.md', 'utf-8')

console.log(toc(markdown))


let tocMarkdown = renderTOCMarkdown(markdown)
markdown = tocMarkdown.content + '\n' + markdown
let html = new Remarkable()
    .render(markdown)


//let result = toc(markdown)
//
//
//let table = result.json
//    .map(function (heading) {
//        return toc.linkify(heading.content)
//    })
//    .join('')
//console.log(table)
export const convertedMarkdown = html


function renderTOCMarkdown(str, options) {
    return new Remarkable()
        .use(toc.plugin(options))
        .render(str)
}

