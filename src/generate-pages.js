import fs from 'fs'
import templates from './templates.js'
import { chunk } from './util.js'

export function generateCardPrintPages({
                                           pageTitle,
                                           cardData,
                                           dest,
                                           cardsPerPage = 9,
                                       }) {

    let cardPages = chunk(cardData, cardsPerPage)

    let out = templates['page-cards-print']({
        cardPages,
        pageTitle,
    })
    fs.writeFileSync(dest, out, 'utf8')

}

export function generateCards({
                                  pageTitle,
                                  cardData,
                                  dest,
                              }) {
    let out = templates['page-cards']({
        pageTitle,
        cardData,
    })

    fs.writeFileSync(dest, out, 'utf8')

}


export function generateIndex({
                                  pageTitle,
                                  dest,
                              }) {
    let out = templates['page-index']({
        pageTitle,
    })

    fs.writeFileSync(dest, out, 'utf8')

}

export function generateArmyListPages({
                                          armyListData,
                                          dest,
                                      }) {

    let out = templates['page-army-lists'](armyListData)

    fs.writeFileSync(dest, out, 'utf8')
}
