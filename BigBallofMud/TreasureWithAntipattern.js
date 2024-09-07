// Defining the game map as a 2D array
// ' ' represents empty space
// 'M' represents a monster
// 'T' represents the treasure
let gameMap = [
	[ ' ', 'M', ' ', ' ', ' ' ],
	[ ' ', ' ', ' ', 'T', ' ' ],
	[ ' ', ' ', ' ', ' ', ' ' ],
	[ ' ', ' ', ' ', ' ', ' ' ],
	[ ' ', ' ', ' ', ' ', ' ' ]
];

// Player's initial position (top-left corner of the map)
let x = 0,
	y = 0;

// Setting the player's initial position on the map
gameMap[y][x] = 'P';

// Displaying the initial game map
document.getElementById('gameMap').textContent = gameMap.map((row) => row.join(' ')).join('\n');

// Function to move the player
function movePlayer(direction) {
	// Clearing the player's current position on the map
	gameMap[y][x] = ' ';

	// Moving the player according to the specified direction
	if (direction === 'north') {
		y = Math.max(0, y - 1);
	} else if (direction === 'south') {
		y = Math.min(4, y + 1);
	} else if (direction === 'west') {
		x = Math.max(0, x - 1);
	} else if (direction === 'east') {
		x = Math.min(4, x + 1);
	}

	// Checking if the player has encountered a monster
	if (gameMap[y][x] === 'M') {
		document.getElementById('gameStatus').textContent = "You've encountered a monster! Game over!";
		Array.from(document.getElementsByTagName('button')).forEach((button) => (button.disabled = true));
		// Checking if the player has found the treasure
	} else if (gameMap[y][x] === 'T') {
		document.getElementById('gameStatus').textContent = "You've found the treasure! Congratulations!";
		Array.from(document.getElementsByTagName('button')).forEach((button) => (button.disabled = true));
	} else {
		// Updating the player's position on the map
		gameMap[y][x] = 'P';

		// Updating the displayed game map
		document.getElementById('gameMap').textContent = gameMap.map((row) => row.join(' ')).join('\n');
	}
}
