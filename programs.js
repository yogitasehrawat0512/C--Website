const programs = [
  {
    "id": 1,
    "category": "Basics",
    "title": "Hello World",
    "aim": "Display a simple message on the console.",
    "code": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        Console.WriteLine(\"Hello, World!\");\n    }\n}",
    "output": "Hello, World!",
    "explanation": "Console.WriteLine() prints text to the console."
  },
  {
    "id": 2,
    "category": "Basics",
    "title": "Add Two Numbers",
    "aim": "Read two integers and display their sum.",
    "code": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        int a = 10, b = 20;\n        Console.WriteLine(\"Sum = \" + (a + b));\n    }\n}",
    "output": "Sum = 30",
    "explanation": "The + operator adds the two integer values."
  },
  {
    "id": 3,
    "category": "Basics",
    "title": "Swap Two Numbers",
    "aim": "Swap two values using a temporary variable.",
    "code": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        int a = 5, b = 9;\n        int temp = a;\n        a = b;\n        b = temp;\n        Console.WriteLine($\"a = {a}, b = {b}\");\n    }\n}",
    "output": "a = 9, b = 5",
    "explanation": "A temporary variable stores one value while the two variables are exchanged."
  },
  {
    "id": 4,
    "category": "Basics",
    "title": "Area of a Circle",
    "aim": "Calculate the area of a circle.",
    "code": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        double radius = 7;\n        double area = Math.PI * radius * radius;\n        Console.WriteLine(\"Area = \" + area.ToString(\"F2\"));\n    }\n}",
    "output": "Area = 153.94",
    "explanation": "Math.PI provides the value of pi; the F2 format shows two decimal places."
  },
  {
    "id": 5,
    "category": "Basics",
    "title": "Even or Odd",
    "aim": "Check whether an integer is even or odd.",
    "code": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        int number = 14;\n        if (number % 2 == 0)\n            Console.WriteLine(\"Even\");\n        else\n            Console.WriteLine(\"Odd\");\n    }\n}",
    "output": "Even",
    "explanation": "An even number has remainder zero when divided by 2."
  },
  {
    "id": 6,
    "category": "Basics",
    "title": "Positive, Negative or Zero",
    "aim": "Identify the sign of a number.",
    "code": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        int number = -4;\n        if (number > 0)\n            Console.WriteLine(\"Positive\");\n        else if (number < 0)\n            Console.WriteLine(\"Negative\");\n        else\n            Console.WriteLine(\"Zero\");\n    }\n}",
    "output": "Negative",
    "explanation": "if and else if check whether the number is above, below, or equal to zero."
  },
  {
    "id": 7,
    "category": "Conditions & Loops",
    "title": "Largest of Three Numbers",
    "aim": "Find the largest among three integers.",
    "code": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        int a = 12, b = 27, c = 19;\n        int largest = Math.Max(a, Math.Max(b, c));\n        Console.WriteLine(\"Largest = \" + largest);\n    }\n}",
    "output": "Largest = 27",
    "explanation": "Math.Max compares values and returns the larger one."
  },
  {
    "id": 8,
    "category": "Conditions & Loops",
    "title": "Leap Year",
    "aim": "Check whether a year is a leap year.",
    "code": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        int year = 2024;\n        bool leap = (year % 400 == 0) ||\n                    (year % 4 == 0 && year % 100 != 0);\n        Console.WriteLine(leap ? \"Leap year\" : \"Not a leap year\");\n    }\n}",
    "output": "Leap year",
    "explanation": "A year is leap if divisible by 400, or divisible by 4 but not by 100."
  },
  {
    "id": 9,
    "category": "Conditions & Loops",
    "title": "Multiplication Table",
    "aim": "Print the multiplication table of a number.",
    "code": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        int n = 5;\n        for (int i = 1; i <= 10; i++)\n            Console.WriteLine($\"{n} x {i} = {n * i}\");\n    }\n}",
    "output": "5 x 1 = 5\n5 x 2 = 10\n5 x 3 = 15\n5 x 4 = 20\n5 x 5 = 25\n5 x 6 = 30\n5 x 7 = 35\n5 x 8 = 40\n5 x 9 = 45\n5 x 10 = 50",
    "explanation": "The for loop repeats ten times and multiplies n by each counter value."
  },
  {
    "id": 10,
    "category": "Conditions & Loops",
    "title": "Sum of First N Natural Numbers",
    "aim": "Find the sum from 1 to n.",
    "code": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        int n = 10, sum = 0;\n        for (int i = 1; i <= n; i++)\n            sum += i;\n        Console.WriteLine(\"Sum = \" + sum);\n    }\n}",
    "output": "Sum = 55",
    "explanation": "The loop adds every integer from 1 through n to sum."
  },
  {
    "id": 11,
    "category": "Conditions & Loops",
    "title": "Factorial",
    "aim": "Calculate the factorial of a non-negative integer.",
    "code": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        int n = 5;\n        long factorial = 1;\n        for (int i = 2; i <= n; i++)\n            factorial *= i;\n        Console.WriteLine(\"Factorial = \" + factorial);\n    }\n}",
    "output": "Factorial = 120",
    "explanation": "Factorial multiplies all integers from 1 to n; 0! is also 1."
  },
  {
    "id": 12,
    "category": "Conditions & Loops",
    "title": "Fibonacci Series",
    "aim": "Print the first ten Fibonacci numbers.",
    "code": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        int a = 0, b = 1;\n        for (int i = 0; i < 10; i++)\n        {\n            Console.Write(a + (i == 9 ? \"\" : \" \"));\n            int next = a + b;\n            a = b;\n            b = next;\n        }\n        Console.WriteLine();\n    }\n}",
    "output": "0 1 1 2 3 5 8 13 21 34",
    "explanation": "Each Fibonacci term is the sum of the two preceding terms."
  },
  {
    "id": 13,
    "category": "Number Programs",
    "title": "Reverse a Number",
    "aim": "Reverse the digits of a positive integer.",
    "code": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        int n = 1234, reverse = 0;\n        while (n > 0)\n        {\n            reverse = reverse * 10 + n % 10;\n            n /= 10;\n        }\n        Console.WriteLine(\"Reverse = \" + reverse);\n    }\n}",
    "output": "Reverse = 4321",
    "explanation": "The remainder extracts the last digit; integer division removes it."
  },
  {
    "id": 14,
    "category": "Number Programs",
    "title": "Palindrome Number",
    "aim": "Check whether an integer reads the same backwards.",
    "code": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        int n = 1221, original = n, reverse = 0;\n        while (n > 0)\n        {\n            reverse = reverse * 10 + n % 10;\n            n /= 10;\n        }\n        Console.WriteLine(original == reverse ? \"Palindrome\" : \"Not palindrome\");\n    }\n}",
    "output": "Palindrome",
    "explanation": "The reversed value is compared with the original number."
  },
  {
    "id": 15,
    "category": "Number Programs",
    "title": "Prime Number",
    "aim": "Check whether an integer greater than 1 is prime.",
    "code": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        int n = 17;\n        bool isPrime = n > 1;\n        for (int i = 2; i * i <= n && isPrime; i++)\n            if (n % i == 0) isPrime = false;\n        Console.WriteLine(isPrime ? \"Prime\" : \"Not prime\");\n    }\n}",
    "output": "Prime",
    "explanation": "A prime number has exactly two positive divisors: 1 and itself."
  },
  {
    "id": 16,
    "category": "Number Programs",
    "title": "Armstrong Number",
    "aim": "Check whether a three-digit number is an Armstrong number.",
    "code": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        int n = 153, temp = n, sum = 0;\n        while (temp > 0)\n        {\n            int digit = temp % 10;\n            sum += digit * digit * digit;\n            temp /= 10;\n        }\n        Console.WriteLine(sum == n ? \"Armstrong number\" : \"Not Armstrong\");\n    }\n}",
    "output": "Armstrong number",
    "explanation": "For a three-digit number, add the cubes of its digits and compare with the original."
  },
  {
    "id": 17,
    "category": "Number Programs",
    "title": "Sum of Digits",
    "aim": "Calculate the sum of the digits of a number.",
    "code": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        int n = 456, sum = 0;\n        while (n > 0)\n        {\n            sum += n % 10;\n            n /= 10;\n        }\n        Console.WriteLine(\"Digit sum = \" + sum);\n    }\n}",
    "output": "Digit sum = 15",
    "explanation": "Use remainder to get each digit and integer division to remove it."
  },
  {
    "id": 18,
    "category": "Number Programs",
    "title": "GCD of Two Numbers",
    "aim": "Find the greatest common divisor using Euclid's algorithm.",
    "code": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        int a = 48, b = 18;\n        while (b != 0)\n        {\n            int remainder = a % b;\n            a = b;\n            b = remainder;\n        }\n        Console.WriteLine(\"GCD = \" + a);\n    }\n}",
    "output": "GCD = 6",
    "explanation": "Euclid's algorithm repeatedly replaces (a, b) with (b, a % b)."
  },
  {
    "id": 19,
    "category": "Arrays & Strings",
    "title": "Array Sum and Average",
    "aim": "Calculate the sum and average of an integer array.",
    "code": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        int[] numbers = { 2, 4, 6, 8 };\n        int sum = 0;\n        foreach (int number in numbers) sum += number;\n        Console.WriteLine(\"Sum = \" + sum);\n        Console.WriteLine(\"Average = \" + (double)sum / numbers.Length);\n    }\n}",
    "output": "Sum = 20\nAverage = 5",
    "explanation": "foreach visits each element; casting sum to double allows a decimal average when needed."
  },
  {
    "id": 20,
    "category": "Arrays & Strings",
    "title": "Largest Element in Array",
    "aim": "Find the largest value in an array.",
    "code": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        int[] numbers = { 12, 7, 29, 4, 18 };\n        int largest = numbers[0];\n        foreach (int n in numbers)\n            if (n > largest) largest = n;\n        Console.WriteLine(\"Largest = \" + largest);\n    }\n}",
    "output": "Largest = 29",
    "explanation": "Start with the first element and update the largest value as you scan the array."
  },
  {
    "id": 21,
    "category": "Arrays & Strings",
    "title": "Sort an Array",
    "aim": "Sort integer values in ascending order.",
    "code": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        int[] numbers = { 5, 2, 8, 1, 3 };\n        Array.Sort(numbers);\n        Console.WriteLine(string.Join(\", \", numbers));\n    }\n}",
    "output": "1, 2, 3, 5, 8",
    "explanation": "Array.Sort arranges the array in ascending order."
  },
  {
    "id": 22,
    "category": "Arrays & Strings",
    "title": "Linear Search",
    "aim": "Find the index of a target value in an array.",
    "code": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        int[] numbers = { 10, 20, 30, 40 };\n        int target = 30, index = -1;\n        for (int i = 0; i < numbers.Length; i++)\n            if (numbers[i] == target) { index = i; break; }\n        Console.WriteLine(\"Index = \" + index);\n    }\n}",
    "output": "Index = 2",
    "explanation": "Linear search checks elements one by one; array indexes start at zero."
  },
  {
    "id": 23,
    "category": "Arrays & Strings",
    "title": "Reverse a String",
    "aim": "Reverse a string using a character array.",
    "code": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        string text = \"hello\";\n        char[] chars = text.ToCharArray();\n        Array.Reverse(chars);\n        Console.WriteLine(new string(chars));\n    }\n}",
    "output": "olleh",
    "explanation": "Convert the string to a character array, reverse it, then create a new string."
  },
  {
    "id": 24,
    "category": "Arrays & Strings",
    "title": "String Palindrome",
    "aim": "Check whether a word is a palindrome, ignoring case.",
    "code": "using System;\nusing System.Linq;\n\nclass Program\n{\n    static void Main()\n    {\n        string word = \"Madam\";\n        string reversed = new string(word.ToLower().Reverse().ToArray());\n        Console.WriteLine(word.ToLower() == reversed ? \"Palindrome\" : \"Not palindrome\");\n    }\n}",
    "output": "Palindrome",
    "explanation": "The program compares the lowercase word with its reversed form."
  },
  {
    "id": 25,
    "category": "Arrays & Strings",
    "title": "Count Vowels",
    "aim": "Count vowels in a string.",
    "code": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        string text = \"Education\";\n        int count = 0;\n        foreach (char ch in text.ToLower())\n            if (\"aeiou\".Contains(ch)) count++;\n        Console.WriteLine(\"Vowels = \" + count);\n    }\n}",
    "output": "Vowels = 5",
    "explanation": "Convert to lowercase and count characters that occur in the vowel string."
  },
  {
    "id": 26,
    "category": "Arrays & Strings",
    "title": "Count Words in a Sentence",
    "aim": "Count words separated by whitespace.",
    "code": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        string sentence = \"C sharp is useful\";\n        string trimmed = sentence.Trim();\n        int count = trimmed.Length == 0 ? 0 : trimmed.Split(\n            new char[] { ' ', '\\t', '\\n' },\n            StringSplitOptions.RemoveEmptyEntries).Length;\n        Console.WriteLine(\"Words = \" + count);\n    }\n}",
    "output": "Words = 4",
    "explanation": "Split separates the sentence on whitespace and removes empty entries."
  },
  {
    "id": 27,
    "category": "OOP",
    "title": "Class and Object",
    "aim": "Create an object and call a class method.",
    "code": "using System;\n\nclass Student\n{\n    public string Name = \"Aman\";\n    public void Display() => Console.WriteLine(\"Name = \" + Name);\n}\n\nclass Program\n{\n    static void Main()\n    {\n        Student student = new Student();\n        student.Display();\n    }\n}",
    "output": "Name = Aman",
    "explanation": "A class defines members; an object is an instance of that class."
  },
  {
    "id": 28,
    "category": "OOP",
    "title": "Constructor",
    "aim": "Use a constructor to initialise an object.",
    "code": "using System;\n\nclass Student\n{\n    private string name;\n    public Student(string studentName) { name = studentName; }\n    public void Display() => Console.WriteLine(name);\n}\n\nclass Program\n{\n    static void Main()\n    {\n        Student s = new Student(\"Simran\");\n        s.Display();\n    }\n}",
    "output": "Simran",
    "explanation": "A constructor runs when an object is created and can initialise its fields."
  },
  {
    "id": 29,
    "category": "OOP",
    "title": "Inheritance",
    "aim": "Demonstrate a derived class inheriting a base class method.",
    "code": "using System;\n\nclass Animal\n{\n    public void Eat() => Console.WriteLine(\"Animal eats\");\n}\n\nclass Dog : Animal\n{\n    public void Bark() => Console.WriteLine(\"Dog barks\");\n}\n\nclass Program\n{\n    static void Main()\n    {\n        Dog d = new Dog();\n        d.Eat();\n        d.Bark();\n    }\n}",
    "output": "Animal eats\nDog barks",
    "explanation": "Dog inherits the public Eat method from Animal."
  },
  {
    "id": 30,
    "category": "OOP",
    "title": "Method Overloading",
    "aim": "Use methods with the same name but different parameters.",
    "code": "using System;\n\nclass Calculator\n{\n    public int Add(int a, int b) => a + b;\n    public int Add(int a, int b, int c) => a + b + c;\n}\n\nclass Program\n{\n    static void Main()\n    {\n        Calculator c = new Calculator();\n        Console.WriteLine(c.Add(2, 3));\n        Console.WriteLine(c.Add(2, 3, 4));\n    }\n}",
    "output": "5\n9",
    "explanation": "Method overloading uses the same method name with different parameter lists."
  },
  {
    "id": 31,
    "category": "OOP",
    "title": "Method Overriding",
    "aim": "Override a virtual method in a derived class.",
    "code": "using System;\n\nclass Animal\n{\n    public virtual void Sound() => Console.WriteLine(\"Animal sound\");\n}\n\nclass Dog : Animal\n{\n    public override void Sound() => Console.WriteLine(\"Bark\");\n}\n\nclass Program\n{\n    static void Main()\n    {\n        Animal a = new Dog();\n        a.Sound();\n    }\n}",
    "output": "Bark",
    "explanation": "The override implementation runs because the method is virtual and the object is a Dog."
  },
  {
    "id": 32,
    "category": "OOP",
    "title": "Abstract Class",
    "aim": "Implement an abstract method in a derived class.",
    "code": "using System;\n\nabstract class Shape\n{\n    public abstract int Area();\n}\n\nclass Square : Shape\n{\n    private int side;\n    public Square(int s) { side = s; }\n    public override int Area() => side * side;\n}\n\nclass Program\n{\n    static void Main()\n    {\n        Shape shape = new Square(4);\n        Console.WriteLine(\"Area = \" + shape.Area());\n    }\n}",
    "output": "Area = 16",
    "explanation": "An abstract class can declare methods that derived classes must implement."
  },
  {
    "id": 33,
    "category": "OOP",
    "title": "Interface",
    "aim": "Implement an interface in a class.",
    "code": "using System;\n\ninterface IPrintable\n{\n    void Print();\n}\n\nclass Report : IPrintable\n{\n    public void Print() => Console.WriteLine(\"Printing report\");\n}\n\nclass Program\n{\n    static void Main()\n    {\n        IPrintable item = new Report();\n        item.Print();\n    }\n}",
    "output": "Printing report",
    "explanation": "The Report class implements the method required by IPrintable."
  },
  {
    "id": 34,
    "category": "OOP",
    "title": "Encapsulation with Property",
    "aim": "Use a property to control access to a private field.",
    "code": "using System;\n\nclass Student\n{\n    public string Name { get; set; }\n}\n\nclass Program\n{\n    static void Main()\n    {\n        Student s = new Student();\n        s.Name = \"Kiran\";\n        Console.WriteLine(s.Name);\n    }\n}",
    "output": "Kiran",
    "explanation": "A property provides controlled access to a class value through get and set."
  },
  {
    "id": 35,
    "category": "Exceptions & Files",
    "title": "Try-Catch Exception Handling",
    "aim": "Handle an invalid integer division operation.",
    "code": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        try\n        {\n            int a = 10, b = 0;\n            Console.WriteLine(a / b);\n        }\n        catch (DivideByZeroException)\n        {\n            Console.WriteLine(\"Cannot divide by zero.\");\n        }\n    }\n}",
    "output": "Cannot divide by zero.",
    "explanation": "The catch block handles the DivideByZeroException instead of letting it terminate the program."
  },
  {
    "id": 36,
    "category": "Exceptions & Files",
    "title": "Write to a Text File",
    "aim": "Write text to a file using File.WriteAllText.",
    "code": "using System;\nusing System.IO;\n\nclass Program\n{\n    static void Main()\n    {\n        string path = \"sample.txt\";\n        File.WriteAllText(path, \"Hello from C#\");\n        Console.WriteLine(\"File written successfully.\");\n    }\n}",
    "output": "File written successfully.",
    "explanation": "File.WriteAllText creates or overwrites sample.txt in the program's working directory."
  },
  {
    "id": 37,
    "category": "Collections & LINQ",
    "title": "List Collection",
    "aim": "Add values to a List and display them.",
    "code": "using System;\nusing System.Collections.Generic;\n\nclass Program\n{\n    static void Main()\n    {\n        List<string> fruits = new List<string> { \"Apple\", \"Mango\" };\n        fruits.Add(\"Orange\");\n        foreach (string fruit in fruits)\n            Console.WriteLine(fruit);\n    }\n}",
    "output": "Apple\nMango\nOrange",
    "explanation": "List<T> is a resizable collection; Add appends an element."
  },
  {
    "id": 38,
    "category": "Collections & LINQ",
    "title": "Dictionary Collection",
    "aim": "Store and retrieve a value by key.",
    "code": "using System;\nusing System.Collections.Generic;\n\nclass Program\n{\n    static void Main()\n    {\n        Dictionary<string, int> marks = new Dictionary<string, int>();\n        marks[\"Aman\"] = 85;\n        marks[\"Simran\"] = 92;\n        Console.WriteLine(\"Simran: \" + marks[\"Simran\"]);\n    }\n}",
    "output": "Simran: 92",
    "explanation": "Dictionary stores key-value pairs and retrieves a value by its key."
  },
  {
    "id": 39,
    "category": "Collections & LINQ",
    "title": "LINQ Filter",
    "aim": "Use LINQ to select even numbers from a list.",
    "code": "using System;\nusing System.Linq;\n\nclass Program\n{\n    static void Main()\n    {\n        int[] numbers = { 1, 2, 3, 4, 5, 6 };\n        var evenNumbers = numbers.Where(n => n % 2 == 0);\n        Console.WriteLine(string.Join(\", \", evenNumbers));\n    }\n}",
    "output": "2, 4, 6",
    "explanation": "Where filters the sequence to keep values that satisfy the given condition."
  },
  {
    "id": 40,
    "category": "OOP",
    "title": "Enum Example",
    "aim": "Declare an enum and display a selected value.",
    "code": "using System;\n\nenum Day { Monday, Tuesday, Wednesday, Thursday, Friday }\n\nclass Program\n{\n    static void Main()\n    {\n        Day today = Day.Wednesday;\n        Console.WriteLine(today);\n        Console.WriteLine((int)today);\n    }\n}",
    "output": "Wednesday\n2",
    "explanation": "An enum defines named constants; by default, the first value is 0."
  }
];
