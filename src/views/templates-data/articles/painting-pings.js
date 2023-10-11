import MarkdownIt from 'markdown-it'
import fs from 'fs'

let path = 'src/markdown/painting-pings.md'

const markdownRaw = await fs.promises.readFile(path, 'utf-8')

let md = new MarkdownIt({
    html: true,
})

let html = md.render(markdownRaw)

export const convertedMarkdown = html
