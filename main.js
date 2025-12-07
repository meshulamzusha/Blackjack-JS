import { init_game, play_round } from './gameLogic/game.js';

function main() {
    let game_dic = init_game();
    while (game_dic["player_1"]["hand"].length > 0 && game_dic["player_2"]["hand"].length > 0) {
        play_round(game_dic["player_1"], game_dic["player_2"]);
    }
    // if both players have the same number of cards
    if (game_dic["player_1"]["won_pile"].length === game_dic["player_2"]["won_pile"].length) {
        console.log("\nboth players have the same number of cards, tie!");
        // break_a_tie(game_dic); // Bonus 2
    }
    // if player 1 has more cards
    if (game_dic["player_1"]["won_pile"].length > game_dic["player_2"]["won_pile"].length) {
        console.log("\n" + game_dic["player_1"]["name"] + " is the winner of the game with " + game_dic["player_1"]["won_pile"].length + " cards !!!\n");
    }
    //if player 2 has more cards
    if (game_dic["player_1"]["won_pile"].length < game_dic["player_2"]["won_pile"].length) {
        console.log("\n" + game_dic["player_2"]["name"] + " is the winner of the game with " + game_dic["player_2"]["won_pile"].length + " cards !!!\n");
    }
}

main(); 
