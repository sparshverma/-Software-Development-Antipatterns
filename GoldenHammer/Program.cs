using System;
using System.Collections.Generic;
using System.Linq;

class Person{
    public string Name { get; set; }

    public int Age { get; set;}

    public string Job {get; set;}
}

class Program{

    // This is GoldenHammer before Refactoring
    // static void Main(string[] args)
    // {
    //     var people = new List<Person>()
    //     {
    //         new Person{Name = "Alice", Age = 30, Job = "Developer"},
    //         new Person{Name = "Jhon", Age = 25, Job = "Designer"},
    //         new Person{Name = "Charlie", Age = 35, Job = "Manager"}
    //     };

    //     // Using foreach for everything
    //     int sumAges = 0;
    //     foreach (var person in people)
    //     {
    //         sumAges += person.Age;
    //     }
    //     Person oldestPerson = people[0];
    //     foreach (var person in people)
    //     {
    //         if(person.Age > oldestPerson.Age)
    //         {
    //             oldestPerson = person;
    //         }
    //     }
    //     var developers = new List<Person>();
    //     foreach (var person in people)
    //     {
    //         if (person.Job == "Developer")
    //         {
    //             developers.Add(person);
    //         }
    //     }
    //     Console.WriteLine("Sum of ages: "+ sumAges);
    //     Console.WriteLine("Oldest Person: "+ oldestPerson.Name);
    //     Console.WriteLine("Developers: "+ string.Join(",", developers.ConvertAll(p => p.Name)));
    // }

    // After Refactoring
    // Now the code much cleaner and easy to maintain
    static void Main(string[] args)
    {
        var people = new List<Person>()
        {
            new Person{Name = "Alice", Age = 30, Job = "Developer"},
            new Person{Name = "Jhon", Age = 25, Job = "Designer"},
            new Person{Name = "Charlie", Age = 35, Job = "Manager"}
        };

        // Using foreach for everything
        int sumAges = people.Sum(p => p.Age);
        
        Person oldestPerson = people.OrderByDescending(p => p.Age).First();
        
        List<Person> developers = people.FindAll(p=> p.Job == "Developer");
        Console.WriteLine("Sum of ages: "+ sumAges);
        Console.WriteLine("Oldest Person: "+ oldestPerson.Name);
        Console.WriteLine("Developers: "+ string.Join(",", developers.ConvertAll(p => p.Name)));
    }
}