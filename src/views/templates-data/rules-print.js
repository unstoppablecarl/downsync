import MarkdownIt from 'markdown-it'
import { formatTables, markdown } from './support/rules-helpers.js'
import markdown_it_anchor from 'markdown-it-anchor'
import markdown_it_header_sections from 'markdown-it-header-sections'

let markdownRaw = markdown.replace('[[toc]]', '')

let toc = []
let md = new MarkdownIt({
    html: true,
})
    .use(markdown_it_header_sections)
    .use(markdown_it_anchor, {
        level: 2,
        callback(token, {
            slug,
            title,
        }) {
            toc.push({
                slug,
                title,
                level: token.markup.length,
            })
        },
    })

let html = md.render(markdownRaw)
html = formatTables(html)
export const tocData = toc

export const convertedMarkdown = html
