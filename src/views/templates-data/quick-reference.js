import fs from 'fs'
import { extractTagWithContents, markdownSectionToHtml, stripLinks } from '../../markdown/support/markdown-helpers.js'

let path = 'src/markdown/downsync-rules.md'
let markdown = await fs.promises.readFile(path, 'utf-8')

markdown = stripLinks(markdown)

export const taskforceActivationPhases = markdownSectionToHtml(markdown, 'Taskforce Activation Phases')
export const attacks = markdownSectionToHtml(markdown, 'Attacks')
export const scanCheck = markdownSectionToHtml(markdown, 'Scan Check')
export const commandPoints = markdownSectionToHtml(markdown, 'Command Point Abilities')
export const cmCheck = markdownSectionToHtml(markdown, 'Countermeasure Check')

let rollAdvantageChunk = markdownSectionToHtml(markdown, 'Roll Advantage')
rollAdvantageChunk.content = extractTagWithContents(rollAdvantageChunk.content, 'table')
export const rollAdvantage = rollAdvantageChunk

export const reactionPriorityRoll = markdownSectionToHtml(markdown, 'Reaction Priority Roll')

export const TOKENS = [
    {
        name: 'Activated',
        color_label: 'Green',
        color: 'green',
    },
    {
        name: 'Countermeasure (CM)',
        color_label: 'White',
        color: 'white',
        shadow: true,
    },
    {
        name: 'Hardened CM',
        color_label: 'Yellow',
        color: 'yellow',
        shadow: true,
    },
    {
        name: 'Overwatch',
        color_label: 'Purple',
        color: 'purple',
    },
    {
        name: 'Stun',
        color_label: 'Orange',
        color: 'orange',
    },
    {
        name: 'Stealth',
        color_label: 'Black',
        color: 'black',
    },
]
