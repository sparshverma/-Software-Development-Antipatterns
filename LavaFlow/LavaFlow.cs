using System;

class Program{
    /* Lava flow exist in this function.
    static double CalculateArea(double width, double height){
        double areaRectangle = width * height;
        double areaCircle = Math.PI * Math.Pow(width / 2, 2);
        double CalculateCircumference(double width, double height){
            return 2 * (width + height);
        }
        // lava flow unreachable code
        if (false){
            Console.WriteLine("This code will never be executed");
        }
        return areaRectangle;
    }*/
    // Refactored code

    static double CalculateArea(double width, double height){
        double areaRectangle = width * height;
        
        return areaRectangle;
    }


    static void Main(string[] args){
        double width = 10;
        double height = 5;
        double area = CalculateArea(width, height);
        Console.WriteLine($"Area of the rectangle {area}");
    }
}