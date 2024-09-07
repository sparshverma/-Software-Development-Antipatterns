// The game map
let gameMap = [
	[ ' ', 'M', ' ', ' ', ' ' ],
	[ ' ', ' ', ' ', 'T', ' ' ],
	[ ' ', ' ', ' ', ' ', ' ' ],
	[ ' ', ' ', ' ', ' ', ' ' ],
	[ ' ', ' ', ' ', ' ', ' ' ]
];

let playerPosition = { x: 0, y: 0 };

// Function to print the game map
function printMap() {
	let output = '';
	for (let i = 0; i < gameMap.length; i++) {
		output += gameMap[i].join(' ') + '\n';
	}
	document.getElementById('gameMap').textContent = output;
}

// Function to check the game status
function checkGameStatus() {
	if (gameMap[playerPosition.y][playerPosition.x] === 'M') {
		document.getElementById('gameStatus').textContent = "You've encountered a monster! Game over!";
		return false;
	} else if (gameMap[playerPosition.y][playerPosition.x] === 'T') {
		document.getElementById('gameStatus').textContent = "You've found the treasure! Congratulations!";
		return false;
	} else {
		return true;
	}
}
// Function to move the player
function movePlayer(direction) {
	let newPosition = { ...playerPosition };

	if (direction === 'north') {
		newPosition.y = Math.max(0, playerPosition.y - 1);
	} else if (direction === 'south') {
		newPosition.y = Math.min(4, playerPosition.y + 1);
	} else if (direction === 'west') {
		newPosition.x = Math.max(0, playerPosition.x - 1);
	} else if (direction === 'east') {
		newPosition.x = Math.min(4, playerPosition.x + 1);
	}

	if (gameMap[newPosition.y][newPosition.x] === 'M') {
		document.getElementById('gameStatus').textContent = "You've encountered a monster! Game over!";
		disableButtons();
	} else if (gameMap[newPosition.y][newPosition.x] === 'T') {
		document.getElementById('gameStatus').textContent = "You've found the treasure! Congratulations!";
		disableButtons();
	} else {
		gameMap[playerPosition.y][playerPosition.x] = ' ';
		gameMap[newPosition.y][newPosition.x] = 'P';
		playerPosition = newPosition;
		printMap();
	}
}

// Function to disable the movement buttons when the game ends
function disableButtons() {
	let buttons = document.getElementsByTagName('button');
	for (let i = 0; i < buttons.length; i++) {
		buttons[i].disabled = true;
	}
}

// Start the game
gameMap[playerPosition.y][playerPosition.x] = 'P';
printMap();
