export function chunk(array, chunkSize) {
    var out = []
    for (var i = 0, j = array.length; i < j; i += chunkSize) {
        var chunk = array.slice(i, i + chunkSize)
        out.push(chunk)
    }
    return out
}

export function getTimestamp() {
    let date = new Date()
    let month = date.getMonth() + 1
    let day = date.getDate()
    let hour = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()

    month = (month < 10 ? '0' : '') + month
    day = (day < 10 ? '0' : '') + day
    hour = (hour < 10 ? '0' : '') + hour
    min = (min < 10 ? '0' : '') + min
    sec = (sec < 10 ? '0' : '') + sec

    return date.getFullYear() + '-' + month + '-' + day + ' ' + hour + ':' + min + ':' + sec

}

export function joinTypes(types) {
    if (Array.isArray(types)) {
        types = types.join(', ')
    }
    return types
}
