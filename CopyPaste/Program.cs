using System;
using System.IO;

static List<string[]> ReadCsv(string filePath){
    return File.ReadAllLines(filePath).Select(line => line.Split(',')).ToList();
}
/*static List<int[]> MysteryProcess(List<string[]> data){
    var random = new Random();
    return data.Select(row => row.Select(x => int.Parse(x) * random.Next(1, 11)).ToArray()).ToList();
}*/
// Refactoring the code
static List<double[]> CalculateAvg(List<string[]> data){
    var random = new Random();
    return data.Select(row => new double[] (row.Select(doulble.Parse).Average())).ToList();
}

static void WriteCsv(string filePath. List<double[]> data){
    var lines = data.Select(row => string.Join(",", row));
    File.WriteAllLines(filePath, lines);
}

string inputPath = "E:\Udemy\Software_Development_Antipatterns\CopyPaste\input.csv";
string outputPath = "E:\Udemy\Software_Development_Antipatterns\CopyPaste\output.csv";
var data = ReadCsv(inputPath);
var processData = MysteryProcess(data);
WriteCsv(outputPath, processData);