/**
 * Rolls a pair of dice 10 times and calculates the scores for each player.
 * Displays the winner of the game.
 */
function rollDice() {
	var numRolls = 10;
	var player1Score = 0;
	var player2Score = 0;
	for (var i = 0; i < numRolls; i++) {
		var player1Roll = rollDie();
		var player2Roll = rollDie();
		updateScores(player1Roll, player2Roll, player1Score, player2Score);
	}
	var winner = determineWinner(player1Score, player2Score);
	displayWinner(player1Score, player2Score, winner);
}

/**
 * Rolls a single die and returns the result.
 * @returns {number} The result of the die roll.
 */
function rollDie() {
	return Math.floor(Math.random() * 6) + 1;
}

/**
 * Updates the scores for each player based on their dice rolls.
 * @param {number} player1Roll - The result of Player 1's dice roll.
 * @param {number} player2Roll - The result of Player 2's dice roll.
 * @param {number} player1Score - The current score for Player 1.
 * @param {number} player2Score - The current score for Player 2.
 */
function updateScores(player1Roll, player2Roll, player1Score, player2Score) {
	if (player1Roll > player2Roll) {
		player1Score += player1Roll + player2Roll;
	} else if (player2Roll > player1Roll) {
		player2Score += player1Roll + player2Roll;
	} else {
		player1Score += player1Roll;
		player2Score += player2Roll;
	}
}

/**
 * Determines the winner of the game based on the final scores for each player.
 * @param {number} player1Score - The final score for Player 1.
 * @param {number} player2Score - The final score for Player 2.
 * @returns {string} The name of the winning player, or "Tie" if the game is tied.
 */
function determineWinner(player1Score, player2Score) {
	if (player1Score > player2Score) {
		return 'Player 1';
	} else if (player2Score > player1Score) {
		return 'Player 2';
	} else {
		return 'Tie';
	}
}

/**
 * Displays the final score and winner of the game.
 * @param {number} player1Score - The final score for Player 1.
 * @param {number} player2Score - The final score for Player 2.
 * @param {string} winner - The name of the winning player, or "Tie" if the game is tied.
 */
function displayWinner(player1Score, player2Score, winner) {
	var output = 'Player 1 rolled ' + player1Score + ', Player 2 rolled ' + player2Score + '. ' + winner + ' wins!';
	document.getElementById('output').innerHTML = output;
}
