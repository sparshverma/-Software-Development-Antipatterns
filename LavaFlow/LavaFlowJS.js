function calculateArea(width, height) {
	// Lava flow: Unused variables
	let areaRectangle = width * height;
	areaCircle = 3.14159 * Math.pow(width / 2, 2);

	// Deprecated function, replaced by calculatePerimeter
	function calculateCircumference(width, height) {
		return 2 * (width + height);
	}
	// Lava Flow: Unreachable code
	if (false) {
		console.log('This code will never be executed');
	}
	return areaRectangle;
}
let width = 10;
let height = 5;
let area = calculateArea(width, height);

console.log('Area of the rectangle', area);
