// Bad practice: Copying multiple code snippets from the internet without understanding
const fs = require('fs');

function readCsv(filePath) {
	const content = fs.readFileSync(filePath, 'utf8');
	return content.split('\n').map((line) => line.split(','));
}

// process data copy pasted
function mysteryProcess(data) {
	return data.map((row) => row.map((x) => parseInt(x) * Math.floor(Math.random() * 10) + 1));
}
function writeCsv(filePath, data) {
	const content = data.map((row) => row.join(',')).join('\n');
	fs.writeFileSync(filePath, content, 'utf8');
}

// Main Program
const inputPath = 'input.csv';
const outputPath = 'output.csv';
const data = readCsv(inputPath);
const processedData = mysteryProcess(data);
writeCsv(outputPath, processedData);
