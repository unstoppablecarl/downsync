import fs from 'fs'

import { dataFileToSnapshotFile, getDataFiles } from './data-shapshot/data-snapshot-helpers.js'

let dataFiles = await getDataFiles()

dataFiles.forEach(({
                       dataFilePath,
                       data,
                   }) => {

    let dest = dataFileToSnapshotFile(dataFilePath)
    let contents = JSON.stringify(data)

    fs.promises.writeFile(dest, contents, 'utf8')
})
