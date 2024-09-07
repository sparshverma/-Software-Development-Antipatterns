// using System;
// using System.Collections.Generic;
// using System.Linq;

// public class Person{
//     public string Name {get; set;}
//     public int Age{get;set;}
//     public string Job{get;set;}
//     public int Salary{get;set;}
//     public Address Address;
    
//     public override string ToString(){
//         return $"Name: {Name}, Age: {Age}, Job: {Job}, Salary: {Salary}, Address: [Street: {Address["street"]}, City: {Address["city"]}]";    
//     }
// }

// public class Program{
//     public static void Main(string[] args){
//         var people = new List<Person>(){
//             new Person{Name = "Alice", Age = 30, Job = "Developer", Salary = 30000, Address = new Address(("street", "Main St"), ("number", "123"), ("city", "New York"), ("zip", "100001"))},
//             new Person{Name = "Jhon", Age = 25, Job = "Designer", Salary = 50000, Address = new Address(("street", "High St"), ("number", "456"), ("city", "Los angiles"), ("zip", "103331"))},
//             new Person{Name = "Charlie", Age = 35, Job = "Developer", Salary = 70000, Address = new Address(("street", "Broadway"), ("number", "789"), ("city", "Chicago"), ("zip", "888001"))}
//         };
//         Console.WriteLine(GetAveragesalary(people));
//         Console.WriteLine(string.Join("," , FilterByJob(people, "Developer")));
//         Console.WriteLine(string.Join("," , FilterByCity(people, "New York")));

//     }

//     public static double GetAveragesalary(IEnumerable<Person> data){
//         return data.Average(person => person.Salary);
//     }

//     public static List<Person> FilterByJob(IEnumerable<Person> data, string job){
//         return data.Where(person => person.Job == job).ToList();
//     }
//     public static List<Person> FilterByCity(IEnumerable<Person> data, string city){
//         return data.Where(person => person.Address["city"] == city).ToList();
//     }
    

// }
// Refactored code
using System;
using System.Collections.Generic;
using System.Linq;

public class Address{
    public string Street{get; set; }
    public string City {get; set; }
    public string Zip;
    public string Number {get; set;}
    public Address(string street, string city, string number, string zip){
        Street = street;
        City = city;
        Zip = zip;
        Number = number;
    }
}

public class Person{
    public string Name {get; set;}
    public int Age{get;set;}
    public string Job{get;set;}
    public int Salary{get;set;}
    public Address Address;
    
    public override string ToString(){
        return $"Name: {Name}, Age: {Age}, Job: {Job}, Salary: {Salary}, Address: [Street: {Address.Street}, City: {Address.City}]";    
    }
}

public class Program{
    public static void Main(string[] args){
        var people = new List<Person>(){
            new Person{Name = "Alice", Age = 30, Job = "Developer", Salary = 30000, Address = new Address("Main St", "123", "New York", "100001")},
            new Person{Name = "Jhon", Age = 25, Job = "Designer", Salary = 50000, Address = new Address("High St", "456", "Los angiles", "103331")},
            new Person{Name = "Charlie", Age = 35, Job = "Developer", Salary = 70000, Address = new Address("Broadway","789", "Chicago", "888001")}
        };
        Console.WriteLine(GetAveragesalary(people));
        Console.WriteLine(string.Join(", " , FilterByJob(people, "Developer")));
        Console.WriteLine(string.Join(", " , FilterByCity(people, "New York")));

    }

    public static double GetAveragesalary(IEnumerable<Person> data){
        return data.Average(person => person.Salary);
    }

    public static List<Person> FilterByJob(IEnumerable<Person> data, string job){
        return data.Where(person => person.Job == job).ToList();
    }
    public static List<Person> FilterByCity(IEnumerable<Person> data, string city){
        return data.Where(person => person.Address.City == city).ToList();
    }
    

}