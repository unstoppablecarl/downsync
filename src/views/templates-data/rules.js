import fs from 'fs'

import MarkdownIt from 'markdown-it'
import markdown_it_anchor from 'markdown-it-anchor'
import markdown_it_table_of_contents from 'markdown-it-table-of-contents'
import markdown_it_github_headings from 'markdown-it-github-headings'

let path = 'src/markdown/downsync-rules.md'

let markdown = fs.readFileSync(path, 'utf-8')
let linkIcon = '<svg class="header-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg>'

let md = new MarkdownIt()
    .use(markdown_it_anchor)
    .use(markdown_it_table_of_contents, {
        includeLevel: [2, 3, 4],
    })
    .use(markdown_it_github_headings, {
        linkIcon,
    })
let html = md.render(markdown)

html = html.replaceAll('<table>', '<table class="table table-striped">')

let {
    docHtml,
    tableOfContentsHtml,
} = extractTableOfContents(html)

export const tocHtml = tableOfContentsHtml
export const convertedMarkdown = docHtml

function extractTableOfContents(html) {
    const regex = /<div class="table-of-contents">(.*?)<\/div>/m

    let r = regex.exec(html)
    let tableOfContentsHtml = r[0]

    let docHtml = html.replace(tableOfContentsHtml, '')
    return {
        docHtml,
        tableOfContentsHtml,
    }
}

//let definitions = {
//    Turn: 'In a Round, players alternate taking turns. Each turn the active player designates a Taskforce to act in that turn.',
//}
//
//Object.keys(definitions).forEach((key) => {
//    let definition = definitions[key]
//
//    html = html.replaceAll(key, `<strong data-bs-toggle="tooltip" data-bs-title="${definition}">${key}</strong>`)
//})
