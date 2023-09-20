import fs from 'fs'
import {
    captureQuickReferenceContentToHtml,
    markdownSectionToHtml,
    stripLinks,
} from '../../markdown/support/markdown-helpers.js'
import { NOTE_STEALTH_TOKEN } from '../../data/definitions.js'

let path = 'src/markdown/downsync-rules.md'
let markdown = await fs.promises.readFile(path, 'utf-8')

markdown = stripLinks(markdown)

export const taskforceActivationPhases = markdownSectionToHtml(
    markdown,
    'Taskforce Activation Phases',
    `gaining 1 Action Point to spend on the following:
    - **Unit Card Action(s):** Pay the cost of each action performed
    - **Move Action:** Move up to SPD in inches
    - **Overwatch Action:** Unit gains an Overwatch Token`,
)
export const stealthTokenDesc = NOTE_STEALTH_TOKEN.desc
export const attacks = markdownSectionToHtml(markdown, 'Attacks')
export const scanCheck = markdownSectionToHtml(markdown, 'Scan Check')
scanCheck.content = captureQuickReferenceContentToHtml(markdown, 'scan_check_content_quick_reference')
export const commandPoints = markdownSectionToHtml(markdown, 'Command Point Abilities')
export const cmCheck = markdownSectionToHtml(markdown, 'Countermeasure Check')

let rollAdvantageChunk = markdownSectionToHtml(markdown, 'Boosting Rolls')
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
        name: 'Emergency CM',
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
