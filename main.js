import { initGame, playRound } from './gameLogic/game.js';

function main() {
    let gameDic = initGame();
    while (gameDic["player_1"]["hand"].length > 0 && gameDic["player_2"]["hand"].length > 0) {
        playRound(gameDic["player_1"], gameDic["player_2"]);
    }
    // if both players have the same number of cards
    if (gameDic["player_1"]["WonPile"].length === gameDic["player_2"]["WonPile"].length) {
        console.log("\nboth players have the same number of cards, tie!");
        // break_a_tie(gameDic); // Bonus 2
    }
    // if player 1 has more cards
    if (gameDic["player_1"]["WonPile"].length > gameDic["player_2"]["WonPile"].length) {
        console.log("\n" + gameDic["player_1"]["name"] + " is the winner of the game with " + gameDic["player_1"]["WonPile"].length + " cards !!!\n");
    }
    //if player 2 has more cards
    if (gameDic["player_1"]["WonPile"].length < gameDic["player_2"]["WonPile"].length) {
        console.log("\n" + gameDic["player_2"]["name"] + " is the winner of the game with " + gameDic["player_2"]["WonPile"].length + " cards !!!\n");
    }
}

main();










// BONUS 2 : Break the tie between the two players
// by adding up the total value of all their winning cards.
function break_a_tie(gameDic) {
    let p1TotalValue = 0;
    let p2TotalValue = 0;
    for (let i = 0; i < gameDic["player_1"]["WonPile"].length; i++) {
        p1TotalValue += gameDic["player_1"]["WonPile"][i]["value"];
    }
    for (let i = 0; i < gameDic["player_2"]["WonPile"].length; i++) {
        p2TotalValue += gameDic["player_2"]["WonPile"][i]["value"];
    }
    if (p1TotalValue > p2TotalValue) {
        console.log("But the total value of " + gameDic["player_1"]["name"] + "'s cards is the highest, " + gameDic["player_1"]["name"] + " wins !");
    }
    if (p1TotalValue < p2TotalValue) {
        console.log("But the total value of " + gameDic["player_2"]["name"] + "'s cards is the highest, " + gameDic["player_2"]["name"] + " wins !");
    }
    if (p1TotalValue === p2TotalValue) {
        console.log("The total value of the cards of both players is also equal");
    }
}       