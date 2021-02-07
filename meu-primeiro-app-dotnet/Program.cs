using System;

namespace meu_primeiro_app_dotnet {
    class Program {
        static void Main(string[] args) {
            int index = 0;
            string userInput;
            Student[] students = new Student[5];

            ShowMenu();
            userInput = Console.ReadLine();

            while (userInput != "4") {
                switch (userInput) {
                    case "1":
                        InsertStudent(students, index++);
                        break;
                    case "2":
                        ListStudents(students);
                        break;
                    case "3":
                        CalculateAverage(students);
                        break;
                    default:
                        throw new ArgumentOutOfRangeException();
                }
                
                ShowMenu();
                userInput = Console.ReadLine();
            }

            Console.WriteLine("The end.");

        }

        private static void ShowMenu() {
            Console.WriteLine();
            Console.WriteLine("Select an option:");
            Console.WriteLine("1. Insert new student");
            Console.WriteLine("2. List students");
            Console.WriteLine("3. Grades average");
            Console.WriteLine("4. Exit");
            Console.WriteLine();
        }

        private static void InsertStudent(Student[] students, int index) {
            Console.WriteLine();
            Console.WriteLine("Insert the student's name:");
            string name = Console.ReadLine();

            Console.WriteLine("Insert student's grade:");

            if (!decimal.TryParse(Console.ReadLine(), out decimal grade))
                throw new ArgumentException("Grade has to be decimal");
            
            students[index] = new Student(name, grade);

            Console.WriteLine("Student successfully added!");
            Console.WriteLine();
        }

        private static void ListStudents(Student[] students) {
            Console.WriteLine();
            Console.WriteLine("Students List:");
            foreach (Student student in students) {
                if (student.Name is null) continue;
                Console.WriteLine($"Student: {student.Name} - Grade: {student.Grade}");
            }
            Console.WriteLine();
        }

        private static void CalculateAverage(Student[] students) {
            int aux = 0;
            decimal sum = 0;

            foreach(Student student in students) {
                if (student.Name is null) continue;
                sum += student.Grade;
                aux++;
            }
            Console.WriteLine();
            Console.WriteLine($"Grades average: {sum/aux}");
            Console.WriteLine();
        }
    }
}
