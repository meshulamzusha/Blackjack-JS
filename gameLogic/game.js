import { create_deck, shuffle } from "../utils/deck.js"

export function create_player(name = "AI") {
    let hand_lst = []
    let won_pile_lst = []
    let dic = {
        "name": name,
        "hand": hand_lst,
        "won_pile": won_pile_lst
    }
    return dic
}

export function init_game() {
    let p1 = create_player("Aviel")
    let p2 = create_player("AI")
    let deck_no_shuffle = create_deck()
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

export function play_round(p1, p2) {
    let winner = p1 // just value to init the winner
    let card_1 = p1["hand"].pop()
    let card_2 = p2["hand"].pop()
    let result = compare_cards(card_1, card_2)
    if (result == "p1") {
        winner = p1
        p1["won_pile"].push(card_1)
        p1["won_pile"].push(card_2)
    } else if (result == "p2") {
        winner = p2
        p2["won_pile"].push(card_1)
        p2["won_pile"].push(card_2)
    }
    console.log(winner["name"] + " won this round")
}


