class Address:
    def __init__(self, city, street, number, zip_code):
        self.street = street
        self.number = number
        self.city = city
        self.zip_code = zip_code

class Person:
    def __init__(self, name, age, job, salary, address):
        self.name = name
        self.age = age
        self.job = job
        self.salary = salary
        self.address = address
        
people = [
    Person("Alice",
           30,
           "Developer",
           50000,
           Address("New York", "Main St", 123, 10001)
           ),
    Person("Jhon",
           25,
           "Designer",
           60000,
           Address("Los Angeles", "High St", 456, 20002)
           ),
    Person("Charlie",
           35,
           "Manager",
           70000,
           Address("Chicago", "Broadway", 789, 30003)
           )
]

def get_average_salary(data):
    total_salary = sum(person.salary for person in data)
    return total_salary / len(data)

def filter_by_job(data, job):
    return [person for person in data if person.job == job]

def filter_by_city(data, city):
    return [person for person in data if person.address.city == city]

print(get_average_salary(people))
print(filter_by_job(people, "Developer"))
print(filter_by_city(people, "New York"))