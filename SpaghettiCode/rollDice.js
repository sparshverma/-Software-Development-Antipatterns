/**
 * Simulates a dice roll game between two players.
 * Rolls 10 pairs of dice and calculates the scores for each player.
 * Displays the winner of the game and the final scores.
 */
function rollDice() {
	var player1Score = 0;
	var player2Score = 0;
	for (var i = 0; i < 10; i++) {
		var player1Roll = Math.floor(Math.random() * 6) + 1;
		var player2Roll = Math.floor(Math.random() * 6) + 1;
		if (player1Roll > player2Roll) {
			player1Score += player1Roll + player2Roll;
		} else if (player2Roll > player1Roll) {
			player2Score += player1Roll + player2Roll;
		} else {
			player1Score += player1Roll;
			player2Score += player2Roll;
		}
	}
	var winner;
	if (player1Score > player2Score) {
		winner = 'Player 1 wins!';
	} else if (player2Score > player1Score) {
		winner = 'Player 2 wins!';
	} else {
		winner = "It's a tie!";
	}
	var output = 'Player 1 rolled ' + player1Score + ', Player 2 rolled ' + player2Score + '. ' + winner;
	document.getElementById('output').innerHTML = output;
}
