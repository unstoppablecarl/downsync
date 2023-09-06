import jsonDiff from 'json-diff'
import { dataFileToSnapshotFile, getDataFiles } from './data-shapshot/data-snapshot-helpers.js'
import fs from 'fs'

let dataFiles = await getDataFiles()

dataFiles.forEach(({
                       dataFilePath,
                       data,
                   }) => {

    let snapshotFile = dataFileToSnapshotFile(dataFilePath)

    fs.promises.readFile(snapshotFile, 'utf-8')
        .then((snapshotContent) => {

            let snapshot = JSON.parse(snapshotContent)
            let target = JSON.parse(JSON.stringify(data))

            let result = jsonDiff.diffString(snapshot, target, {
                excludeKeys: 'timestamp',
            })
            if (result) {

                console.log(snapshotFile)
                console.log(result)
                console.log(snapshotFile)
            }
        })
})
