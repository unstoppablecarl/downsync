export default {
    null_dash,
    style_font_size,
    json,
}


function json(context) {
    return JSON.stringify(context)
}


function null_dash(value) {
    if (value === null || value === undefined) {
        return '-'
    }

    return value
}

function style_font_size(value) {
    if (!value) {
        return ''
    }

    return ` style="font-size: ${value}"`
}

