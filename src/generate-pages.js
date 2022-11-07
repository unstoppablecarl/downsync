import fs from 'fs'
import templates from './templates.js'
import { chunk } from './util.js'

export function generateCardPrintPages({
                                           cardData,
                                           dest = './public/cards-print.html',
                                           cardsPerPage = 9,
                                       }) {

    let cardPages = chunk(cardData, cardsPerPage)
    let out = templates['page-cards-print']({
        cardPages,
    })

    fs.writeFileSync(dest, out, 'utf8')

}

export function generateCards({
                                  cardData,
                                  dest = './public/cards.html',
                              }) {
    let out = templates['page-cards']({
        cardData,
    })

    fs.writeFileSync(dest, out, 'utf8')

}

export function generateArmyListPages({
                                          armyListData,
                                          dest = './public/army-lists.html',
                                      }) {

    let out = templates['page-army-lists'](armyListData)

    fs.writeFileSync(dest, out, 'utf8')
}
