
def calculate_area(width, height):
    # LAva FLow: Unused Variables
    area_rectangle= width * height
    area_cirlce= 3.14159 *(width/2) ** 2

    #Deprecated function, replaced bt calculate_perimeter
    def calculate_circumference(width, height):
        return 2 * (width+height)
    
    # Lava Flow Unreachble code
    if False:
        print("This code will never be executed")

    return area_rectangle


width = 10
height = 5
area = calculate_area(width, height)
print("Area of the rectangle:", area)
