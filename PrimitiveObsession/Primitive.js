const people = [
	{
		name: 'Alice',
		age: 30,
		job: 'Developer',
		salary: 60000,
		address: { street: 'Main st', number: 123, city: 'New York', zip: '100001' }
	},
	{
		name: 'Bob',
		age: 25,
		job: 'Designer',
		salary: 55000,
		address: { street: 'High St', number: 456, city: 'Los Angeles', zip: '90001' }
	},
	{
		name: 'Charlie',
		age: 25,
		job: 'Manager',
		salary: 70000,
		address: { street: 'Broadway', number: 789, city: 'Chicago', zip: '60601' }
	}
];
function getAverageSalary(data) {
	const totalSalary = data.reduce((sum, person) => sum + person.salary, 0);
	return totalSalary / data.length;
}
function filterByJob(data, job) {
	return data.filter((person) => person.job === job);
}
function filterByCity(data, city) {
	return data.filter((person) => person.address.city === city);
}

console.log(getAverageSalary(people));
console.log(filterByJob(people, 'Developer'));
console.log(filterByCity(people, 'New York'));
