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


function createCard(rank, suite) {
    let value = 0;

    if (isNaN(rank)) {

        switch (rank) {
            case "J":
                value = 11;
                break;

            case "Q":
                value = 12;
                break;

            case "K":
                value = 13;
                break;

            case "A":
                value = 14;
                break;

            default:
                break;
        }
    } else {
        value = Number(rank);
    }

    return {
        rank: rank,
        suite: suite,
        value: value
    }
}


export function compareCard(p1Card, p2Card) {
    const p1Value = p1Card.value;
    const p2Value = p2Card.value;

    let winner = '';

    if (p1Value > p2Value) {
        winner = 'p1';
    } else if (p2Value > p1Value) {
        winner = 'p2';
    } else {
        winner = 'WAR';
    }

    return winner;
}


export function createDeck() {
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suits = ['H', 'C', 'D', 'S'];
    const cards = []

    ranks.forEach((rank) => {
        suits.forEach((suite) => {
            const card = createCard(rank, suite);
            cards.push(card);
        })
    })

    return cards
}


