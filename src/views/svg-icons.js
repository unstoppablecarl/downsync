import { COALITION_FACTION_SVG_SPRITE, REPUBLIC_FACTION_SVG_SPRITE } from '../data/constants.js'

const fontAwesomeDir = './node_modules/@fortawesome/fontawesome-free/svgs'
const bootstrapDir = './node_modules/bootstrap-icons/icons'

export const svgIcons = {
    //printer: fontAwesomeDir + '/solid/print.svg',
    printer: bootstrapDir + '/printer.svg',
    external_link: fontAwesomeDir + '/solid/up-right-from-square.svg',
    //external_link: bootstrapDir + '/box-arrow-up-right.svg',
    locked: fontAwesomeDir + '/solid/lock.svg',
    unlocked: fontAwesomeDir + '/solid/lock-open.svg',
    pdf: bootstrapDir + '/file-earmark-pdf.svg',
    html: bootstrapDir + '/code-slash.svg',
    //filter: fontAwesomeDir + '/solid/filter.svg',
    filter: bootstrapDir + '/funnel.svg',

    sun_fill: bootstrapDir + '/sun-fill.svg',
    check2: bootstrapDir + '/check2.svg',
    moon_stars_fill: bootstrapDir + '/moon-stars-fill.svg',
    circle_half: bootstrapDir + '/circle-half.svg',

    image_portrait: fontAwesomeDir + '/solid/image-portrait.svg',
    image_landscape: fontAwesomeDir + '/solid/image.svg',

    [COALITION_FACTION_SVG_SPRITE]: './static-assets/images/factions/icon-coalition.svg',
    [REPUBLIC_FACTION_SVG_SPRITE]: './static-assets/images/factions/icon-republic.svg',

}

export const svgIconsReversed = {}

Object.keys(svgIcons).forEach(key => {

    let value = svgIcons[key]

    svgIconsReversed[value] = key
})
