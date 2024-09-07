import csv

# Read data from CSV file
def read_csv(filepath):
    with open(filepath,newline='') as csvfile:
        reader = csv.reader(csvfile)
        data = [row for row in reader]
    return data

# Process data: calculate average of each row

def calculate_average(data):
    result = []
    for row in data:
        avg = sum(map(float,row))/ len(row)
        result.append([avg])
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
processed_data = calculate_average(data)
write_csv(output_file,processed_data)