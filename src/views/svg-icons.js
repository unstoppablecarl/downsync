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
}

export const svgIconsReversed = {}

Object.keys(svgIcons).forEach(key => {

    let value = svgIcons[key]

    svgIconsReversed[value] = key
})
