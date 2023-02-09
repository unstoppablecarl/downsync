import fs from 'fs'

const staticRootData = {
    facebook_group_url: 'https://www.facebook.com/groups/downsync',
    gallery_url: 'https://photos.app.goo.gl/gW8XUbxJD7g9WXQNA',
    discord_url: 'https://discord.gg/efeB5a92cn',
}

export async function buildRootData() {

    staticRootData.svgIconsPath = await getSvgSpriteFile()
    return staticRootData
}

const svgIconSpriteFileDir = './dist/assets/icons/symbol/svg'

async function getSvgSpriteFile() {
    return fs.promises.readdir(svgIconSpriteFileDir)
        .then((files) => {

            if (files.length !== 1) {
                throw new Error(`expected exactly 1 svg icon file but found: ${files.length} ${files.join(', ')}`)
            }
            return '/assets/icons/symbol/svg/' + files[0]
        })
}
