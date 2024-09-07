using System;

namespace SpaghettiCodeExample
{
    class Program{
        static void Main(string[] args){
            Random random = new Random();
            int number = random.Next(1, 101);
            int tries = 0;
            bool guessed = false;
            Console.WriteLine("Welcome to the Guessing game! Guess a number between 1 and 100.");
            while(!guessed){
                Console.WriteLine("Enter your Guess!");
                int guess = int.Parse(Console.ReadLine());
                tries++;
                if(guess == number){
                    guessed = true;
                }
                else if (guess<number){
                    Console.WriteLine("Too low! Try again");
                }
                else {
                    Console.WriteLine("Too High! Try again");
                }
            }
            Console.WriteLine("Congratulations, you guessed the correct number in " + tries + " tries!!!!");
            Console.WriteLine();
        }
    }
}