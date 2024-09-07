people = [
    {"name": "Alice",
     "age": 30,
     "job": "Developer",
     "salary": 50000,
     "address": {"street": "Main St", "number": 123, "city": "New York", "zip": 10001}
     },
     {"name": "Jhon",
     "age": 25,
     "job": "Designer",
     "salary": 60000,
     "address": {"street": "High St", "number": 456, "city": "Los Angilas", "zip": 20002}
     },
     {"name": "Charlie",
     "age": 35,
     "job": "Manager",
     "salary": 70000,
     "address": {"street": "Broadway", "number": 789, "city": "Chicago", "zip": 30003}
     }
]

def get_average_salary(data):
    total_salary = sum(person["salary"]for person in data)
    return total_salary

def filter_by_job(data,job):
    return [person for person in data if person["job"] == job]

def filter_by_city(data,city):
    return [person for person in data if person["address"]["city"] == city]

print(get_average_salary(people))
print(filter_by_job(people, "Developer"))
print(filter_by_city(people, "New York"))