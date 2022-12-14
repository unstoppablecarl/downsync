export default {
    null_dash,
    style_font_size,
    json,
    sum,
    eq,
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

function sum(...values) {
    let total = 0
    // remove context object
    values.pop()
    values.forEach((val) => {
        total += parseInt(val, 10)
    })

    return total
}

function style_font_size(value) {
    if (!value) {
        return ''
    }

    return ` style="font-size: ${value}"`
}

function eq(a, b, options) {
    if (a == b) {
        return options.fn(this)
    } else {
        return options.inverse(this)
    }
}
