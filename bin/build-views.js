import builder from '../src/builder.js'

const argv = process.argv

const args = argv.filter((val) => {
    return val.startsWith('payload=')
})

let payload = {}
if (args.length) {
    let arg = args[0]
    arg = arg.replace('payload=', '')
    payload = JSON.parse(arg)
}
//
//console.log(argv)
builder(payload)
