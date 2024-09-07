// The devoloper uses Array.protoype.forEach() method to solve every problem
/* const people = [
	{ name: 'Alice', age: 30, job: 'Developer' },
	{ name: 'Bob', age: 25, job: 'Designer' },
	{ name: 'Charlie', age: 35, job: 'Manager' }
];
// using froEach for everthing, even simple operations
function getSumAges(data) {
	let sum = 0;
	data.forEach((person) => (sum += person.age));
	return sum;
}
function findOldestPerson(data) {
	let oldest = data[0];
	data.forEach((person) => {
		if (person.age > oldest.age) oldest = person;
	});
	return oldest;
}

function filterByJob(data, job) {
	const filtered = [];
	data.forEach((person) => {
		if (person.job === job) {
			filtered.push(person);
		}
	});
	return filtered;
}

console.log(getSumAges(people)); // 90
console.log(findOldestPerson(people)); // { name: 'Charlie', age: 35, job: 'Manager' }
console.log(filterByJob(people, 'Developer')); // { name: 'Alice', age: 30, job: 'Developer' },
 */

// Above code overusing Array.prototype.forEach()
const people = [
	{ name: 'Alice', age: 30, job: 'Developer' },
	{ name: 'Bob', age: 25, job: 'Designer' },
	{ name: 'Charlie', age: 35, job: 'Manager' }
];

function getSumAges(data) {
	// Usign built-in Javascript Array methods when apprpriate
	return data.reduce((sum, person) => sum + person.age, 0);
}
function findOldestPerson(data) {
	// Usign built-in Javascript Array methods when apprpriate
	return data.reduce((oldest, person) => (person.age > oldest.age ? person : oldest));
}

function filterByJob(data, job) {
	return data.filter((person) => person.job === job);
}

console.log(getSumAges(people)); // 90
console.log(findOldestPerson(people)); // { name: 'Charlie', age: 35, job: 'Manager' }
console.log(filterByJob(people, 'Developer')); // { name: 'Alice', age: 30, job: 'Developer' },
