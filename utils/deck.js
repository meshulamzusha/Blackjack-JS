export function shuffle(deck) {
    let index1 = 0
    let index2 = 0
    let repeat = 0
    while (repeat < 1000) {
        let flag = true
        while (flag) {
            index1 = Math.floor(Math.random() * deck.length)
            index2 = Math.floor(Math.random() * deck.length)
            if (index1 !== index2) {
                flag = false
            }
        }
        let tmp = deck[index1]
        deck[index1] = deck[index2]
        deck[index2] = tmp
        repeat += 1
    }
    return deck
}   