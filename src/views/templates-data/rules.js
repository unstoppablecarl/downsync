import MarkdownIt from 'markdown-it'
import markdown_it_anchor from 'markdown-it-anchor'
import markdown_it_table_of_contents from 'markdown-it-table-of-contents'
import markdown_it_github_headings from 'markdown-it-github-headings'
import { extractTableOfContents, formatTables, linkIcon, markdown } from './support/rules-helpers.js'
import markdown_it_header_sections from 'markdown-it-header-sections'

let md = new MarkdownIt({
    html: true,
})
    .use(markdown_it_header_sections)
    .use(markdown_it_anchor)
    .use(markdown_it_table_of_contents, {
        includeLevel: [
            2,
            3,
            4,
            5,
            6,
        ],
    })
    .use(markdown_it_github_headings, {
        linkIcon,
    })

let html = md.render(markdown)

html = formatTables(html)

let {
    docHtml,
    tableOfContentsHtml,
} = extractTableOfContents(html)

export const tocHtml = tableOfContentsHtml
export const convertedMarkdown = docHtml
