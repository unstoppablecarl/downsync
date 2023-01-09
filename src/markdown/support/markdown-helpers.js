import MarkdownIt from 'markdown-it'

export function captureMarkdownSection(markdown, heading) {
    let regex = new RegExp(`#+[\\s\\S]${heading}([\\s\\S]*?)(?:\\n#|$)`, 'gi')

    let matches = regex.exec(markdown)
    if (!matches || matches.length < 2) {
        throw new Error('No match found for: ' + heading)
    }
    let result = matches[1]

    if (!result) {
        throw new Error('No match found for: ' + heading)
    }
    return {
        heading,
        content: result,
    }
}

export function markdownSectionToHtml(markdown, heading) {
    let { content } = captureMarkdownSection(markdown, heading)

    let md = new MarkdownIt()

    return {
        heading,
        content: md.render(content),
    }
}

export function stripLinks(markdown) {

    let regex = new RegExp(`\\[([^\\]]+)\\]\\(([^)]+)\\)`, 'gm')
    return markdown.replace(regex, '$1')
}

export function extractTagWithContents(html, tag) {
    const regex = new RegExp(`(\\<${tag}\\>[\\s\\S]+?\\<\\/${tag}>)`, 'g')
    let matches = regex.exec(html)

    if (!matches || matches.length < 2) {
        throw new Error('No match found for: ' + tag)
    }
    let result = matches[1]

    if (!result) {
        throw new Error('No match found for: ' + tag)
    }

    return result
}
