import { getTemplateFilePathsWithKeys } from '../../src/templates.js'
import { getDataFilePathFromKey } from '../../src/builder.js'
import { buildRootData } from '../../src/views/root-template-data.js'
import path from 'path'

let snapshotDir = 'data-snapshots'

export async function getDataFilePaths() {

    let templateFiles = await getTemplateFilePathsWithKeys()

    return await Promise.all(
            templateFiles.map(({
                                   key,
                               }) => {
                return getDataFilePathFromKey(key)
            }),
        )
        .then(dataFiles => {
            return dataFiles.filter((x) => x)
        })
}

export async function getDataFiles() {

    let dataFilePaths = await getDataFilePaths()
    let rootData = await buildRootData()

    return await Promise.all(
        dataFilePaths.map((dataFilePath) => {
            return import(dataFilePath)
                .then((tplData) => {

                    let data = Object.assign({}, rootData, tplData)

                    return {
                        dataFilePath,
                        data,
                    }
                })
        }),
    )
}

export function dataFileToSnapshotFile(filePath) {
    let basename = path.basename(filePath, '.js')
    return path.resolve(snapshotDir + '/' + basename + '.json')
}