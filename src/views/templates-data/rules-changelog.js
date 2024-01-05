import MarkdownIt from 'markdown-it'
import markdown_it_anchor from 'markdown-it-anchor'
import markdown_it_github_headings from 'markdown-it-github-headings'
import { formatTables, linkIcon } from './support/rules-helpers.js'
import markdown_it_header_sections from 'markdown-it-header-sections'
import fs from 'fs'

const markdown = await fs.promises.readFile('src/markdown/downsync-rules-changelog.md', 'utf-8')

let md = new MarkdownIt({
    html: true,
})
    .use(markdown_it_header_sections)
    .use(markdown_it_anchor)
    .use(markdown_it_github_headings, {
        linkIcon,
    })

let html = md.render(markdown)

html = formatTables(html)

export const convertedMarkdown = html
