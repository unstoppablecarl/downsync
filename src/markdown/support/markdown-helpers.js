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

export function stripQuickReferenceContentTags(markdown) {
    let regex = new RegExp(`\%\%\%\-\-\- (.*?) \-\-\-\%\%\%`, 'gi')

    return markdown.replaceAll(regex, '')
}

export function captureQuickReferenceContent(markdown, quickReferenceSection) {
    let regex = new RegExp(`\%\%\%\-\-\- ${quickReferenceSection}_start \-\-\-\%\%\%([\\s\\S]*?)(?:\\n\%\%\%\-\-\- ${quickReferenceSection}_end \-\-\-\%\%\%|$)`, 'gi')

    let matches = regex.exec(markdown)
    if (!matches || matches.length < 2) {
        throw new Error('No match found for: ' + quickReferenceSection)
    }
    let result = matches[1]

    if (!result) {
        throw new Error('No match found for: ' + quickReferenceSection)
    }
    return result
}

export function captureQuickReferenceContentToHtml(markdown, quickReferenceSection) {
    let result = captureQuickReferenceContent(markdown, quickReferenceSection)
    let md = new MarkdownIt()

    return md.render(result)
}

export function markdownSectionToHtml(markdown, heading, append = '') {
    let { content } = captureMarkdownSection(markdown, heading)

    content = content + append
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
