import csv
import random

# copy-pasted code snippet 1: read data from a CSV file
def read_csv(filepath):
    with open(filepath,newline='') as csvfile:
        reader = csv.reader(csvfile)
        data = [row for row in reader]
    return data

# Copy-pasted code snippet 2: process data (but the developer doesn't know what it does)

def myster_process(data):
    result = []
    for row in data:
        new_row = [int(x) * random.randint(1,10) for x in row]
        result.append(new_row)
    return result

def write_csv(filepath,data):
    with open(filepath,'w',newline='') as csvfile:
        writer = csv.writer(csvfile)
        for row in data:
            writer.writerow(row)

# Main Program
input_file = r"E:\Udemy\Software_Development_Antipatterns\CopyPaste\input.csv"
output_file = r"E:\Udemy\Software_Development_Antipatterns\CopyPaste\output.csv"
data = read_csv(input_file)
processed_data = myster_process(data)
write_csv(output_file,processed_data)