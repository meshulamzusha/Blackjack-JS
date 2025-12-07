import { compareCard, createDeck, shuffle } from "../utils/deck.js"

export function createPlayer(name = "AI") {
    let hand_lst = []
    let WonPile_lst = []
    let dic = {
        "name": name,
        "hand": hand_lst,
        "WonPile": WonPile_lst
    }
    return dic
}

export function initGame() {
    let p1 = createPlayer("Aviel")
    let p2 = createPlayer("AI")
    let deck_no_shuffle = createDeck()
    let deck = shuffle(deck_no_shuffle)
    let card_number = 0
    for (let card of deck) {
        if (card_number < 26) {
            p1["hand"].push(card)
        } else {
            p2["hand"].push(card)
        }
        card_number += 1
    }
    let dic = { "deck": deck, "player_1": p1, "player_2": p2 }
    return dic
}

export function playRound(p1, p2) {
    let winner = p1 // just value to init the winner
    let card_1 = p1["hand"].pop()
    let card_2 = p2["hand"].pop()
    let result = compareCard(card_1, card_2)
    if (result == "p1") {
        winner = p1
        p1["WonPile"].push(card_1)
        p1["WonPile"].push(card_2)
    } else if (result == "p2") {
        winner = p2
        p2["WonPile"].push(card_1)
        p2["WonPile"].push(card_2)
    }
    console.log(winner["name"] + " won this round")
}


