export function formatDiff() {

    document.querySelectorAll('del img.icon').forEach(element => element.remove())
    document.querySelectorAll('del img.card-portrait').forEach(element => element.remove())

    document.querySelectorAll('ins:has(img.icon)').forEach(element => {
        element.replaceWith(...element.childNodes)
    })
    document.querySelectorAll('ins:has(img.card-portrait)').forEach(element => {
        element.replaceWith(...element.childNodes)
    })
}
