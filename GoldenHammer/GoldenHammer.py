# The developer oversues the for loop to solve every problem in the script

# people =[
#     {'name': 'Alice' , 'age': 30, 'job' : 'Developer'},
#     {'name': 'Jhon' , 'age': 25, 'job' : 'Designer'},
#     {'name': 'Charlie' , 'age': 35, 'job' : 'Manager'}
# ]

# def get_sum_of_ages(data):
#     sum_of_ages = 0
#     for person in data:
#         sum_of_ages += person['age']
#     return sum_of_ages

# def find_oldest_person(data):
#     oldest_person = data[0]
#     for person in data:
#         if person['age'] > oldest_person['age']:
#             oldest_person = person
#     return oldest_person

# def filter_by_jobs(data, job):
#     filtered = []
#     for person in data:
#         if person['job'] == job:
#             filtered.append(person)
#     return filtered

# print(get_sum_of_ages(people))
# print(find_oldest_person(people))
# print(filter_by_jobs(people, 'Developer'))

# Now we are refactoring this code by avoiding to use 'for' loop and will be using built-in python functions because they are more appropriate and easier to understand 

people =[
    {'name': 'Alice' , 'age': 30, 'job' : 'Developer'},
    {'name': 'Jhon' , 'age': 25, 'job' : 'Designer'},
    {'name': 'Charlie' , 'age': 35, 'job' : 'Manager'}
]

def get_sum_of_ages(data):
    return sum((person['age'] for person in data))

def find_oldest_person(data):
    return max(data, key=lambda person: person['age'])

def filter_by_jobs(data, job):
    return [person for person in data if person['job'] == job]

print(get_sum_of_ages(people))
print(find_oldest_person(people))
print(filter_by_jobs(people, 'Developer'))