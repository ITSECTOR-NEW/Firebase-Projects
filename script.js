import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import {
  getFirestore,
  doc,
  setDoc,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDzoJJ_325VL_axuuAFzDf3Bwt_ENzu2rM",
  authDomain: "jobsdoor360-39b87.firebaseapp.com",
  databaseURL: "https://jobsdoor360-39b87-default-rtdb.firebaseio.com",
  projectId: "jobsdoor360-39b87",
  storageBucket: "jobsdoor360-39b87.appspot.com",
  messagingSenderId: "326416618185",
  appId: "1:326416618185:web:de19e90fe4f06006ef3318",
  measurementId: "G-60RHEMJNM6",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//Data that should be store in firebase....
const subjects = {
  htmlcssjs: {
    id: "html",
    title: "html, css & js",
    questions: [
      {
        question: "What does HTML stand for?",
        answers: [
          "Hyper Text Markup Language",
          "Hyperlinks and Text Markup Language",
          "Home Tool Markup Language",
          "Hyper Text Markup Leveler",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the correct HTML element for inserting a line break?",
        answers: ["<br>", "<lb>", "<break>", "<linebreak>"],
        correctAnswer: 1,
      },
      {
        question: "What does CSS stand for?",
        answers: [
          "Cascading Style Sheets",
          "Computer Style Sheets",
          "Creative Style Sheets",
          "Colorful Style Sheets",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which CSS property is used to change the text color of an element?",
        answers: ["color", "text-color", "font-color", "fgcolor"],
        correctAnswer: 1,
      },
      {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: ["<script>", "<javascript>", "<js>", "<scripting>"],
        correctAnswer: 1,
      },
      {
        question: "Where is the correct place to insert a JavaScript?",
        answers: [
          "The <head> section",
          "The <body> section",
          "Both the <head> section and the <body> section are correct",
          "Neither the <head> section nor the <body> section",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which HTML attribute is used to define inline styles?",
        answers: ["style", "class", "styles", "font"],
        correctAnswer: 1,
      },
      {
        question: "Which HTML element is used to specify a footer for a document or section?",
        answers: ["<footer>", "<section>", "<bottom>", "<foot>"],
        correctAnswer: 1,
      },
      {
        question: "What is the correct HTML for creating a hyperlink?",
        answers: [
          "<a href='url'>link</a>",
          "<a name='url'>link</a>",
          "<a url='url'>link</a>",
          "<link href='url'>link</link>",
        ],
        correctAnswer: 1,
      },
      {
        question: "How can you make a numbered list?",
        answers: ["<ol>", "<ul>", "<dl>", "<list>"],
        correctAnswer: 1,
      },
      {
        question: "What is the correct HTML element for the largest heading?",
        answers: ["<h1>", "<heading>", "<h6>", "<head>"],
        correctAnswer: 1,
      },
      {
        question: "Which HTML element defines navigation links?",
        answers: ["<nav>", "<navigation>", "<navigate>", "<links>"],
        correctAnswer: 1,
      },
      {
        question: "Which HTML element is used to specify a header for a document or section?",
        answers: ["<header>", "<head>", "<section>", "<top>"],
        correctAnswer: 1,
      },
      {
        question: "How can you open a link in a new tab/browser window?",
        answers: ["<a href='url' target='_blank'>", "<a href='url' new>", "<a href='url' target='new'>", "<a href='url' target='tab'>"],
        correctAnswer: 1,
      },
      {
        question: "Which CSS property controls the text size?",
        answers: ["font-size", "text-size", "font-style", "text-style"],
        correctAnswer: 1,
      },
      {
        question: "How do you make each word in a text start with a capital letter?",
        answers: ["text-transform: capitalize", "text-style: capitalize", "font-style: capitalize", "transform: capitalize"],
        correctAnswer: 1,
      },
      {
        question: "Which property is used to change the background color?",
        answers: ["background-color", "color", "bgcolor", "bg-color"],
        correctAnswer: 1,
      },
      {
        question: "Which CSS property is used to change the left margin of an element?",
        answers: ["margin-left", "padding-left", "indent", "space-left"],
        correctAnswer: 1,
      },
      {
        question: "How do you select elements with class name 'test'?",
        answers: [".test", "#test", "*test", "test"],
        correctAnswer: 1,
      },
      {
        question: "How do you select elements with id 'demo'?",
        answers: ["#demo", ".demo", "*demo", "demo"],
        correctAnswer: 1,
      },
      {
        question: "How do you make the text bold?",
        answers: ["font-weight: bold", "font-style: bold", "text-style: bold", "text-weight: bold"],
        correctAnswer: 1,
      },
      {
        question: "How do you write 'Hello World' in an alert box?",
        answers: ["alert('Hello World');", "msg('Hello World');", "msgBox('Hello World');", "alertBox('Hello World');"],
        correctAnswer: 1,
      },
      {
        question: "How do you create a function in JavaScript?",
        answers: ["function myFunction()", "function:myFunction()", "function = myFunction()", "myFunction()"],
        correctAnswer: 1,
      },
      {
        question: "How do you call a function named 'myFunction'?",
        answers: ["myFunction()", "call myFunction()", "call function myFunction()", "myFunction.call()"],
        correctAnswer: 1,
      },
      {
        question: "How to write an IF statement in JavaScript?",
        answers: ["if (i == 5)", "if i == 5 then", "if i = 5", "if (i = 5)"],
        correctAnswer: 1,
      },
      {
        question: "How does a WHILE loop start?",
        answers: ["while (i <= 10)", "while i = 1 to 10", "while (i <= 10; i++)", "while i <= 10"],
        correctAnswer: 1,
      },
      {
        question: "How can you add a comment in JavaScript?",
        answers: ["//This is a comment", "'This is a comment", "<!--This is a comment-->", "#This is a comment"],
        correctAnswer: 1,
      },
      {
        question: "What is the correct way to write a JavaScript array?",
        answers: ["var colors = ['red', 'green', 'blue']", "var colors = 'red', 'green', 'blue'", "var colors = (1:'red', 2:'green', 3:'blue')", "var colors = 1=('red'), 2=('green'), 3=('blue')"],
        correctAnswer: 1,
      },
      {
        question: "How do you round the number 7.25 to the nearest integer?",
        answers: ["Math.round(7.25)", "Math.rnd(7.25)", "rnd(7.25)", "round(7.25)"],
        correctAnswer: 1,
      },
      {
        question: "How do you find the number with the highest value of x and y?",
        answers: ["Math.max(x, y)", "Math.ceil(x, y)", "Math.high(x, y)", "ceil(x, y)"],
        correctAnswer: 1,
      },
      {
        question: "What is the correct JavaScript syntax for opening a new window called 'w2'?",
        answers: ["w2 = window.open('http://www.google.com');", "w2 = window.new('http://www.google.com');", "w2 = new.window('http://www.google.com');", "w2 = window('http://www.google.com');"],
        correctAnswer: 1,
      },
      {
        question: "JavaScript is the same as Java.",
        answers: ["False", "True"],
        correctAnswer: 1,
      },
      {
        question: "Which event occurs when the user clicks on an HTML element?",
        answers: ["onclick", "onchange", "onmouseclick", "onmouseover"],
        correctAnswer: 1,
      },
      {
        question: "How do you declare a JavaScript variable?",
        answers: ["var carName;", "variable carName;", "v carName;", "carName;"],
        correctAnswer: 1,
      },
      {
        question: "Which operator is used to assign a value to a variable?",
        answers: ["=", "-", "*", "+"],
        correctAnswer: 1,
      },
      {
        question: "What will the following code return: Boolean(10 > 9)",
        answers: ["true", "false", "NaN", "undefined"],
        correctAnswer: 1,
      },
      {
        question: "Is JavaScript case-sensitive?",
        answers: ["Yes", "No"],
        correctAnswer: 1,
      },
      {
        question: "What does JSON stand for?",
        answers: [
          "JavaScript Object Notation",
          "JavaScript Online Notation",
          "JavaScript Object Name",
          "JavaScript Object Net",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the correct way to create an object in JavaScript?",
        answers: [
          "var obj = {name: 'John', age: 30};",
          "var obj = (name: 'John', age: 30);",
          "var obj = name: 'John', age: 30;",
          "var obj = {'name': 'John', 'age': 30};",
        ],
        correctAnswer: 1,
      },
      {
        question: "How do you access the 'age' property of an object in JavaScript?",
        answers: ["obj.age", "obj:age", "obj->age", "obj['age']"],
        correctAnswer: 1,
      },
      {
        question: "How do you add a new element to the end of an array?",
        answers: [
          "arr.push(element)",
          "arr.add(element)",
          "arr.append(element)",
          "arr.insert(element)",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which method removes the last element from an array?",
        answers: [
          "arr.pop()",
          "arr.remove()",
          "arr.delete()",
          "arr.slice()",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which method adds one or more elements to the beginning of an array?",
        answers: [
          "arr.unshift()",
          "arr.push()",
          "arr.shift()",
          "arr.splice()",
        ],
        correctAnswer: 1,
      },
      {
        question: "What does DOM stand for?",
        answers: [
          "Document Object Model",
          "Display Object Management",
          "Digital Object Model",
          "Document Oriented Model",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which method returns the length of a string?",
        answers: [
          "str.length",
          "str.size",
          "str.count",
          "str.length()",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the purpose of the 'this' keyword in JavaScript?",
        answers: [
          "It refers to the current object",
          "It refers to the previous object",
          "It refers to the global object",
          "It refers to the parent object",
        ],
        correctAnswer: 1,
      },
      {
        question: "How do you remove whitespace from both ends of a string?",
        answers: [
          "str.trim()",
          "str.strip()",
          "str.clean()",
          "str.remove()",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which method converts a string to uppercase?",
        answers: [
          "str.toUpperCase()",
          "str.upper()",
          "str.capitalize()",
          "str.toUpper()",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which method converts a string to lowercase?",
        answers: [
          "str.toLowerCase()",
          "str.lower()",
          "str.minimize()",
          "str.toLower()",
        ],
        correctAnswer: 1,
      },
    ],
  // Add other subjects here
},
  python: {
      id: "python",
      title: "Python",
      questions: [
        {
          question: "What is the correct file extension for Python files?",
          answers: [".py", ".python", ".pyt", ".pt"],
          correctAnswer: 1,
        },
        {
          question: "How do you create a variable with the numeric value 5?",
          answers: ["x = 5", "x := 5", "int x = 5", "var x = 5"],
          correctAnswer: 1,
        },
        {
          question: "How do you insert comments in Python code?",
          answers: ["# This is a comment", "// This is a comment", "<!-- This is a comment -->", "/* This is a comment */"],
          correctAnswer: 1,
        },
        {
          question: "Which function is used to get the length of a string in Python?",
          answers: ["len()", "length()", "str_length()", "size()"],
          correctAnswer: 1,
        },
        {
          question: "How do you create a list in Python?",
          answers: ["list = []", "list = {}", "list = ()", "list = ''"],
          correctAnswer: 1,
        },
        {
          question: "Which operator is used to check if two values are equal in Python?",
          answers: ["==", "=", "equals", "==="],
          correctAnswer: 1,
        },
        {
          question: "How do you define a function in Python?",
          answers: ["def function_name():", "function function_name():", "define function_name():", "func function_name():"],
          correctAnswer: 1,
        },
        {
          question: "What is the output of print(2 ** 3)?",
          answers: ["8", "6", "5", "9"],
          correctAnswer: 1,
        },
        {
          question: "Which method is used to remove whitespace from both ends of a string?",
          answers: ["strip()", "trim()", "remove()", "cut()"],
          correctAnswer: 1,
        },
        {
          question: "How do you handle exceptions in Python?",
          answers: ["try...except", "catch...finally", "error...handle", "try...catch"],
          correctAnswer: 1,
        },
        {
          question: "What does the 'break' statement do in a loop?",
          answers: ["Exits the loop", "Skips the current iteration", "Continues to the next iteration", "Pauses the loop"],
          correctAnswer: 1,
        },
        {
          question: "What keyword is used to create a class in Python?",
          answers: ["class", "def", "create", "type"],
          correctAnswer: 1,
        },
        {
          question: "How do you concatenate two strings in Python?",
          answers: ["string1 + string2", "string1.concat(string2)", "string1.append(string2)", "string1 & string2"],
          correctAnswer: 1,
        },
        {
          question: "Which method can be used to convert a string to an integer in Python?",
          answers: ["int()", "str()", "float()", "convert()"],
          correctAnswer: 1,
        },
        {
          question: "What is the output of print(0.1 + 0.2 == 0.3)?",
          answers: ["False", "True", "Error", "0.3"],
          correctAnswer: 1,
        },
        {
          question: "What is the correct way to create a dictionary in Python?",
          answers: ["dict = {}", "dict = []", "dict = ()", "dict = ''"],
          correctAnswer: 1,
        },
        {
          question: "Which operator is used for integer division in Python?",
          answers: ["//", "/", "%", "^"],
          correctAnswer: 1,
        },
        {
          question: "How do you access the first item in a list?",
          answers: ["list[0]", "list[1]", "list.first()", "list.get(0)"],
          correctAnswer: 1,
        },
        {
          question: "What does the 'pass' statement do in Python?",
          answers: ["Does nothing", "Raises an exception", "Exits a function", "Continues to the next statement"],
          correctAnswer: 1,
        },
        {
          question: "How do you create a tuple in Python?",
          answers: ["tuple = ()", "tuple = []", "tuple = {}", "tuple = ''"],
          correctAnswer: 1,
        },
        {
          question: "What does the 'len()' function do?",
          answers: ["Returns the length of an object", "Converts an object to a string", "Converts a string to an integer", "Returns the type of an object"],
          correctAnswer: 1,
        },
        {
          question: "Which method is used to add an item to the end of a list?",
          answers: ["append()", "add()", "extend()", "insert()"],
          correctAnswer: 1,
        },
        {
          question: "How do you import a module in Python?",
          answers: ["import module_name", "include module_name", "require module_name", "load module_name"],
          correctAnswer: 1,
        },
        {
          question: "How do you write an if statement in Python?",
          answers: ["if condition:", "if condition then:", "if (condition):", "if (condition) {}"],
          correctAnswer: 1,
        },
        {
          question: "What does the 'continue' statement do in a loop?",
          answers: ["Skips the current iteration", "Exits the loop", "Starts the next iteration", "Pauses the loop"],
          correctAnswer: 1,
        },
        {
          question: "How do you open a file in Python for reading?",
          answers: ["open('filename', 'r')", "open('filename', 'w')", "open('filename', 'a')", "open('filename', 'x')"],
          correctAnswer: 1,
        },
        {
          question: "Which method is used to remove an item from a list by its value?",
          answers: ["remove()", "pop()", "del()", "discard()"],
          correctAnswer: 1,
        },
        {
          question: "How do you define a global variable in Python?",
          answers: ["global var", "var = value", "def var", "global var = value"],
          correctAnswer: 1,
        },
        {
          question: "Which function is used to get the type of an object?",
          answers: ["type()", "object_type()", "get_type()", "kind()"],
          correctAnswer: 1,
        },
        {
          question: "How do you check if a key exists in a dictionary?",
          answers: ["key in dict", "dict.has_key(key)", "key.exists(dict)", "dict.contains(key)"],
          correctAnswer: 1,
        },
        {
          question: "Which method is used to sort a list in Python?",
          answers: ["sort()", "sorted()", "order()", "arrange()"],
          correctAnswer: 1,
        },
        {
          question: "What is the result of 3 + 2 * 2 in Python?",
          answers: ["7", "10", "5", "8"],
          correctAnswer: 1,
        },
        {
          question: "Which method is used to replace a substring in a string?",
          answers: ["replace()", "substitute()", "change()", "modify()"],
          correctAnswer: 1,
        },
        {
          question: "How do you get a substring of the first 5 characters in a string?",
          answers: ["string[:5]", "string[5:]", "string[0:5]", "string.get(5)"],
          correctAnswer: 1,
        },
        {
          question: "Which operator is used to find the remainder of a division?",
          answers: ["%", "/", "mod", "rem"],
          correctAnswer: 1,
        },
        {
          question: "How do you convert a number to a string in Python?",
          answers: ["str()", "int()", "float()", "to_string()"],
          correctAnswer: 1,
        },
        {
          question: "Which statement is used to exit a loop in Python?",
          answers: ["break", "continue", "return", "exit"],
          correctAnswer: 1,
        },
        {
          question: "How do you create a set in Python?",
          answers: ["set = {}", "set = []", "set = ()", "set = ''"],
          correctAnswer: 1,
        },
        {
          question: "What is the purpose of the 'self' keyword in a class?",
          answers: ["Refers to the instance of the class", "Refers to the class itself", "Refers to a parent class", "Refers to a sibling class"],
          correctAnswer: 1,
        },
        {
          question: "How do you call a method from a class instance?",
          answers: ["instance.method()", "method.instance()", "call.method()", "instance->method()"],
          correctAnswer: 1,
        },
        {
          question: "What is the purpose of the '__init__' method in a class?",
          answers: ["To initialize an object", "To finalize an object", "To print object details", "To delete an object"],
          correctAnswer: 1,
        },
        {
          question: "What is the purpose of the '__init__' method in a class?",
          answers: ["To initialize an object", "To finalize an object", "To print object details", "To delete an object"],
          correctAnswer: 1,
        },
        {
          question: "How do you handle multiple exceptions in Python?",
          answers: ["except (Exception1, Exception2)", "except Exception1, Exception2", "except Exception1 or Exception2", "except Exception1 and Exception2"],
          correctAnswer: 1,
        },
        {
          question: "Which method is used to check if a string starts with a specified prefix?",
          answers: ["startswith()", "beginswith()", "starts()", "prefix()"],
          correctAnswer: 1,
        },
        {
          question: "How do you join a list of strings into a single string with a separator in Python?",
          answers: ["separator.join(list)", "list.join(separator)", "list.concat(separator)", "separator.concat(list)"],
          correctAnswer: 1,
        },
        {
          question: "What is the default value of an uninitialized variable in Python?",
          answers: ["None", "0", "False", "undefined"],
          correctAnswer: 1,
        },
        {
          question: "How do you use list comprehension to create a list of squares from 0 to 9?",
          answers: ["[x**2 for x in range(10)]", "[x^2 for x in range(10)]", "[square(x) for x in range(10)]", "[x * x for x in range(10)]"],
          correctAnswer: 1,
        },
        {
          question: "What is the purpose of the 'with' statement in Python?",
          answers: ["To handle resources efficiently", "To define a context manager", "To create a new thread", "To handle exceptions"],
          correctAnswer: 1,
        },
        {
          question: "Which method is used to get the index of the first occurrence of a substring in a string?",
          answers: ["find()", "index()", "search()", "locate()"],
          correctAnswer: 1,
        },
        {
          question: "What is the purpose of the 'yield' keyword in Python?",
          answers: ["To create a generator", "To return a value", "To pause a function", "To handle exceptions"],
          correctAnswer: 1,
        },
        {
          question: "How do you convert a list of characters into a string?",
          answers: ["''.join(list)", "list.join('')", "string(list)", "str(list)"],
          correctAnswer: 1,
        },
        {
          question: "Which function is used to remove all elements from a set?",
          answers: ["clear()", "delete()", "remove_all()", "discard()"],
          correctAnswer: 1,
        },
        {
          question: "How do you create a new directory in Python?",
          answers: ["os.mkdir()", "dir.create()", "create.dir()", "new.dir()"],
          correctAnswer: 1,
        },
        {
          question: "What method is used to check if a value exists in a set?",
          answers: ["in", "exists()", "contains()", "check()"],
          correctAnswer: 1,
        },
        {
          question: "How do you get the last element of a list?",
          answers: ["list[-1]", "list.last()", "list.get(-1)", "list[-0]"],
          correctAnswer: 1,
        },
        {
          question: "What is the purpose of the 'assert' statement in Python?",
          answers: ["To test if a condition is true", "To handle exceptions", "To print debugging information", "To define a constant"],
          correctAnswer: 1,
        },
        {
          question: "How do you create a private variable in a Python class?",
          answers: ["Prefix the variable name with '__'", "Prefix the variable name with '_'", "Use the 'private' keyword", "Declare the variable in a private method"],
          correctAnswer: 1,
        },
        {
          question: "What is the output of print('Hello, World!'.upper())?",
          answers: ["HELLO, WORLD!", "hello, world!", "Hello, World!", "HELLO, world!"],
          correctAnswer: 1,
        },
        {
          question: "How do you get the number of items in a dictionary?",
          answers: ["len(dict)", "dict.size()", "dict.length()", "count(dict)"],
          correctAnswer: 1,
        },
        {
          question: "Which function is used to read all lines from a file?",
          answers: ["readlines()", "readall()", "read()", "fetch()"],
          correctAnswer: 1,
        },
      ],
  },
  nodejs: {
    id: "nodejs",
    title: "Node.js",
    questions: [
      {
        question: "What is Node.js primarily used for?",
        answers: [
          "Building server-side applications",
          "Building client-side applications",
          "Database management",
          "Designing UI components"
        ],
        correctAnswer: 1,
      },
      {
        question: "Which company developed Node.js?",
        answers: ["Google", "Microsoft", "Joyent", "IBM"],
        correctAnswer: 3,
      },
      {
        question: "What is the default package manager for Node.js?",
        answers: ["npm", "yarn", "bower", "composer"],
        correctAnswer: 1,
      },
      {
        question: "What does the 'require()' function do in Node.js?",
        answers: ["Loads modules", "Creates a new file", "Starts a server", "Generates a random number"],
        correctAnswer: 1,
      },
      {
        question: "Which method is used to create a new HTTP server in Node.js?",
        answers: ["http.createServer()", "http.newServer()", "http.startServer()", "http.server()"],
        correctAnswer: 1,
      },
      {
        question: "What is the purpose of the 'module.exports' object in Node.js?",
        answers: ["To export functions and objects from a module", "To create new modules", "To start the Node.js server", "To import modules"],
        correctAnswer: 1,
      },
      {
        question: "How do you read a file asynchronously in Node.js?",
        answers: ["fs.readFile()", "fs.readFileSync()", "fs.read()", "fs.readAsync()"],
        correctAnswer: 1,
      },
      {
        question: "Which Node.js module is used for handling file system operations?",
        answers: ["fs", "http", "path", "os"],
        correctAnswer: 1,
      },
      {
        question: "What is the purpose of the 'process' object in Node.js?",
        answers: ["To provide information about the current process", "To start a new process", "To handle file system operations", "To create HTTP servers"],
        correctAnswer: 1,
      },
      {
        question: "What does 'npm install' do?",
        answers: ["Installs packages listed in package.json", "Uninstalls packages", "Updates the Node.js version", "Creates a new Node.js application"],
        correctAnswer: 1,
      },
      {
        question: "How do you handle errors in Node.js?",
        answers: ["Using try-catch blocks", "Using the 'error' event", "Using 'throw' statements", "All of the above"],
        correctAnswer: 4,
      },
      {
        question: "Which module provides utilities for working with file paths?",
        answers: ["path", "fs", "http", "url"],
        correctAnswer: 1,
      },
      {
        question: "What is the purpose of the 'EventEmitter' class in Node.js?",
        answers: ["To handle events and listeners", "To create new modules", "To start a server", "To perform file operations"],
        correctAnswer: 1,
      },
      {
        question: "How do you make an HTTP request in Node.js?",
        answers: ["Using the 'http' module", "Using the 'request' module", "Using the 'fetch' API", "Using the 'axios' library"],
        correctAnswer: 1,
      },
      {
        question: "What is the purpose of the 'require()' function?",
        answers: ["To import modules", "To export modules", "To create new files", "To start a server"],
        correctAnswer: 1,
      },
      {
        question: "Which method is used to write data to a file asynchronously?",
        answers: ["fs.writeFile()", "fs.writeFileSync()", "fs.appendFile()", "fs.createWriteStream()"],
        correctAnswer: 1,
      },
      {
        question: "How do you execute a Node.js script from the command line?",
        answers: ["node script.js", "run script.js", "execute script.js", "start script.js"],
        correctAnswer: 1,
      },
      {
        question: "What does the 'path.join()' method do?",
        answers: ["Joins multiple path segments", "Splits a path into segments", "Normalizes a path", "Resolves a path"],
        correctAnswer: 1,
      },
      {
        question: "How do you manage different versions of Node.js on your machine?",
        answers: ["Using 'nvm' (Node Version Manager)", "Using 'n' (Node.js version manager)", "Using 'nvm' and 'n'", "Node.js does not support version management"],
        correctAnswer: 1,
      },
      {
        question: "What is the purpose of the 'callback' function in Node.js?",
        answers: ["To handle asynchronous operations", "To create new modules", "To start the server", "To handle file operations"],
        correctAnswer: 1,
      },
      {
        question: "Which method is used to create a new directory in Node.js?",
        answers: ["fs.mkdir()", "fs.createDirectory()", "fs.makeDir()", "fs.newDirectory()"],
        correctAnswer: 1,
      },
      {
        question: "What is the purpose of the 'npm init' command?",
        answers: ["To create a new package.json file", "To install packages", "To start a new Node.js project", "To update npm"],
        correctAnswer: 1,
      },
      {
        question: "How do you handle HTTP requests and responses in Node.js?",
        answers: ["Using the 'http' module", "Using the 'express' module", "Using the 'url' module", "Using the 'fs' module"],
        correctAnswer: 1,
      },
      {
        question: "What does 'npm start' typically do?",
        answers: ["Runs the start script defined in package.json", "Installs packages", "Updates npm", "Creates a new project"],
        correctAnswer: 1,
      },
      {
        question: "How can you install a package globally using npm?",
        answers: ["npm install -g package-name", "npm install package-name -global", "npm install --global package-name", "npm install package-name --global"],
        correctAnswer: 1,
      },
      {
        question: "What is the purpose of the 'assert' module in Node.js?",
        answers: ["To perform assertions in tests", "To create HTTP requests", "To manage file systems", "To handle events"],
        correctAnswer: 1,
      },
      {
        question: "Which of the following is NOT a core module in Node.js?",
        answers: ["express", "fs", "http", "path"],
        correctAnswer: 1,
      },
      {
        question: "What does the 'os' module provide in Node.js?",
        answers: ["Operating system-related utilities", "Network utilities", "File system utilities", "HTTP utilities"],
        correctAnswer: 1,
      },
      {
        question: "What is the purpose of the 'crypto' module in Node.js?",
        answers: ["To perform cryptographic operations", "To manage file systems", "To handle HTTP requests", "To handle events"],
        correctAnswer: 1,
      },
      {
        question: "How do you handle asynchronous operations in Node.js?",
        answers: ["Using callbacks, promises, and async/await", "Using synchronous functions", "Using the 'await' keyword only", "Using synchronous operations only"],
        correctAnswer: 1,
      },
      {
        question: "What is the purpose of the 'REPL' in Node.js?",
        answers: ["To provide an interactive command-line interface", "To start a new server", "To manage packages", "To handle file operations"],
        correctAnswer: 1,
      },
      {
        question: "What does the 'npm run' command do?",
        answers: ["Executes a script defined in package.json", "Installs packages", "Updates npm", "Creates a new Node.js application"],
        correctAnswer: 1,
      },
      {
        question: "How can you update a package using npm?",
        answers: ["npm update package-name", "npm upgrade package-name", "npm install package-name@latest", "npm refresh package-name"],
        correctAnswer: 1,
      },
      {
        question: "Which method is used to read a file synchronously in Node.js?",
        answers: ["fs.readFileSync()", "fs.readFile()", "fs.read()", "fs.syncRead()"],
        correctAnswer: 1,
      },
      {
        question: "How do you remove a package from your project using npm?",
        answers: ["npm uninstall package-name", "npm remove package-name", "npm delete package-name", "npm erase package-name"],
        correctAnswer: 1,
      },
      {
        question: "What does the 'Buffer' class do in Node.js?",
        answers: ["Handles binary data", "Handles text data", "Handles file data", "Handles HTTP requests"],
        correctAnswer: 1,
      },
      {
        question: "Which module helps in managing HTTP sessions in Node.js?",
        answers: ["express-session", "http-session", "session-manager", "manage-session"],
        correctAnswer: 1,
      },
      {
        question: "What is the primary purpose of Node.js streams?",
        answers: [
          "To handle data flow efficiently",
          "To manage file paths",
          "To handle HTTP requests",
          "To perform cryptographic operations"
        ],
        correctAnswer: 1,
      },
      {
        question: "What does the 'cluster' module in Node.js do?",
        answers: [
          "Creates child processes to take advantage of multi-core systems",
          "Manages file system operations",
          "Handles HTTP sessions",
          "Provides cryptographic functions"
        ],
        correctAnswer: 1,
      },
      {
        question: "Which module provides utilities for parsing and formatting URLs?",
        answers: ["url", "http", "path", "querystring"],
        correctAnswer: 1,
      },
      {
        question: "How can you debug a Node.js application?",
        answers: ["Using the built-in debugger", "Using console.log()", "Using external debugging tools like Visual Studio Code", "All of the above"],
        correctAnswer: 4,
      },
      {
        question: "What is 'middleware' in the context of Node.js frameworks like Express?",
        answers: ["Functions that handle requests and responses", "Modules that manage file systems", "Utilities for cryptography", "Tools for database management"],
        correctAnswer: 1,
      },
      {
        question: "How do you set up environment variables in a Node.js application?",
        answers: ["Using the 'dotenv' module", "Using 'process.env' directly", "Using 'config' module", "All of the above"],
        correctAnswer: 4,
      },
      {
        question: "What is the role of the 'http' module in Node.js?",
        answers: ["To create HTTP servers and clients", "To handle file system operations", "To manage environment variables", "To perform cryptographic operations"],
        correctAnswer: 1,
      },
      {
        question: "What is the purpose of the 'async' and 'await' keywords in Node.js?",
        answers: ["To handle asynchronous operations in a more readable way", "To manage synchronous operations", "To create new modules", "To handle file I/O operations"],
        correctAnswer: 1,
      },
      {
        question: "What is 'event loop' in Node.js?",
        answers: ["The mechanism that handles asynchronous callbacks", "A tool for managing file paths", "A module for HTTP requests", "A function for cryptographic operations"],
        correctAnswer: 1,
      },
      {
        question: "How do you handle unhandled promise rejections in Node.js?",
        answers: ["By listening to the 'unhandledRejection' event", "By using try-catch blocks", "By using async/await syntax", "By setting a global rejection handler"],
        correctAnswer: 1,
      },
      {
        question: "What is the purpose of the 'process.nextTick()' method?",
        answers: ["To schedule a callback to be invoked on the next iteration of the event loop", "To handle file operations", "To manage HTTP sessions", "To create a new module"],
        correctAnswer: 1,
      },
      {
        question: "Which method is used to create a writable stream in Node.js?",
        answers: ["fs.createWriteStream()", "fs.createReadStream()", "fs.createStream()", "fs.createWritable()"],
        correctAnswer: 1,
      },
      {
        question: "What does the 'assert' module provide?",
        answers: ["Assertion testing methods for unit tests", "HTTP request handling utilities", "File system operations", "Network utilities"],
        correctAnswer: 1,
      },
      {
        question: "How do you handle a large number of simultaneous connections in Node.js?",
        answers: ["By using asynchronous I/O and non-blocking architecture", "By using synchronous I/O", "By creating multiple threads", "By increasing server hardware resources"],
        correctAnswer: 1,
      },
      {
        question: "What is 'REPL' in Node.js?",
        answers: ["Read-Eval-Print Loop, an interactive command-line interface", "Runtime Environment for Programming Languages", "A library for HTTP requests", "A module for file operations"],
        correctAnswer: 1,
      },
      {
        question: "What does 'npm link' do?",
        answers: ["Creates a symlink to a local package", "Installs a package globally", "Links a package to a remote repository", "Updates a package"],
        correctAnswer: 1,
      },
      {
        question: "What is the purpose of the 'vm' module in Node.js?",
        answers: ["To compile and run code within V8 Virtual Machine", "To manage file system operations", "To handle HTTP requests", "To perform cryptographic operations"],
        correctAnswer: 1,
      }
    ],
},
reactjs: {
  id: "react",
  title: "React.js",
  questions: [
    {
      question: "What is React?",
      answers: [
        "A JavaScript library for building user interfaces",
        "A CSS framework",
        "A server-side framework",
        "A database management system"
      ],
      correctAnswer: 1,
    },
    {
      question: "What is a component in React?",
      answers: [
        "A reusable piece of the UI",
        "A function for handling HTTP requests",
        "A method for manipulating the DOM directly",
        "A type of database query"
      ],
      correctAnswer: 1,
    },
    {
      question: "How do you create a component in React?",
      answers: [
        "By using a JavaScript function or class",
        "By using an HTML tag",
        "By defining a CSS class",
        "By creating a new file"
      ],
      correctAnswer: 1,
    },
    {
      question: "What is JSX?",
      answers: [
        "A syntax extension for JavaScript that looks similar to XML",
        "A CSS preprocessor",
        "A JavaScript engine",
        "A database query language"
      ],
      correctAnswer: 1,
    },
    {
      question: "What is the purpose of the 'render' method in a React component?",
      answers: [
        "To describe what the UI should look like",
        "To handle HTTP requests",
        "To manage state",
        "To handle events"
      ],
      correctAnswer: 1,
    },
    {
      question: "How do you pass data from a parent component to a child component in React?",
      answers: [
        "By using props",
        "By using state",
        "By using context",
        "By using the DOM"
      ],
      correctAnswer: 1,
    },
    {
      question: "What is state in React?",
      answers: [
        "An object that determines how a component renders and behaves",
        "A method for handling side effects",
        "A way to pass data between components",
        "A way to style components"
      ],
      correctAnswer: 1,
    },
    {
      question: "What is the 'useState' hook used for in React?",
      answers: [
        "To add state to functional components",
        "To handle side effects",
        "To manage component lifecycle",
        "To pass data between components"
      ],
      correctAnswer: 1,
    },
    {
      question: "What is a pure component in React?",
      answers: [
        "A component that only re-renders when its props or state change",
        "A component that renders with no props or state",
        "A component that handles side effects",
        "A component that manages global state"
      ],
      correctAnswer: 1,
    },
    {
      question: "What does 'props' stand for in React?",
      answers: [
        "Properties passed to a component",
        "Methods defined in a component",
        "Local state in a component",
        "Context for a component"
      ],
      correctAnswer: 1,
    },
    {
      question: "What is the purpose of the 'useEffect' hook in React?",
      answers: [
        "To perform side effects in functional components",
        "To manage local state",
        "To pass data between components",
        "To define component methods"
      ],
      correctAnswer: 1,
    },
    {
      question: "What is a React fragment?",
      answers: [
        "A component that allows grouping multiple elements without adding extra nodes to the DOM",
        "A way to define inline styles",
        "A method for handling events",
        "A state management library"
      ],
      correctAnswer: 1,
    },
    {
      question: "How do you handle form submissions in React?",
      answers: [
        "By handling the 'onSubmit' event",
        "By using the 'useEffect' hook",
        "By managing state directly in the DOM",
        "By using context"
      ],
      correctAnswer: 1,
    },
    {
      question: "What is the 'context' API in React?",
      answers: [
        "A way to pass data through the component tree without props",
        "A method for handling side effects",
        "A library for routing",
        "A way to style components"
      ],
      correctAnswer: 1,
    },
    {
      question: "What is 'ReactDOM' used for?",
      answers: [
        "To render React components to the DOM",
        "To manage local state",
        "To handle HTTP requests",
        "To create new components"
      ],
      correctAnswer: 1,
    },
    {
      question: "How do you conditionally render components in React?",
      answers: [
        "By using conditional statements like if-else or ternary operators",
        "By using the 'useEffect' hook",
        "By using props",
        "By using context"
      ],
      correctAnswer: 1,
    },
    {
      question: "What is the purpose of 'keys' in React lists?",
      answers: [
        "To help React identify which items have changed, are added, or are removed",
        "To handle form submissions",
        "To manage state",
        "To style components"
      ],
      correctAnswer: 1,
    },
    {
      question: "What is 'React Router' used for?",
      answers: [
        "To handle routing in React applications",
        "To manage local state",
        "To handle HTTP requests",
        "To create new components"
      ],
      correctAnswer: 1,
    },
    {
      question: "What is a higher-order component in React?",
      answers: [
        "A function that takes a component and returns a new component with enhanced functionality",
        "A component that handles form submissions",
        "A method for managing state",
        "A utility for styling components"
      ],
      correctAnswer: 1,
    },
    {
      question: "How do you update the state in a functional component?",
      answers: [
        "By using the 'setState' function returned by 'useState'",
        "By using the 'setState' method",
        "By directly modifying the state object",
        "By using props"
      ],
      correctAnswer: 1,
    },
    {
      question: "What is the difference between a class component and a functional component?",
      answers: [
        "Class components have lifecycle methods, while functional components do not",
        "Functional components have lifecycle methods, while class components do not",
        "There is no difference",
        "Class components are used for routing, while functional components are used for state management"
      ],
      correctAnswer: 1,
    },
    {
      question: "What is 'React.memo' used for?",
      answers: [
        "To optimize performance by memoizing functional components",
        "To manage state",
        "To handle HTTP requests",
        "To create new components"
      ],
      correctAnswer: 1,
    },
    {
      question: "What does 'useReducer' hook do in React?",
      answers: [
        "Manages complex state logic in functional components",
        "Updates state in class components",
        "Handles side effects",
        "Manages context"
      ],
      correctAnswer: 1,
    },
    {
      question: "What is the purpose of 'shouldComponentUpdate' lifecycle method?",
      answers: [
        "To optimize performance by controlling when a component should re-render",
        "To handle form submissions",
        "To manage state",
        "To define initial component setup"
      ],
      correctAnswer: 1,
    },
    {
      question: "How do you access the current value of a ref in React?",
      answers: [
        "By accessing 'current' property of the ref object",
        "By using 'useEffect' hook",
        "By using 'state' object",
        "By passing the ref to the component"
      ],
      correctAnswer: 1,
    },
    {
      question: "What is 'React.StrictMode' used for?",
      answers: [
        "To identify potential problems in an application and provide warnings",
        "To manage global state",
        "To handle HTTP requests",
        "To create new components"
      ],
      correctAnswer: 1,
    },
    {
      question: "What is the purpose of the 'componentDidMount' lifecycle method?",
      answers: [
        "To perform actions after the component has been rendered to the DOM",
        "To handle form submissions",
        "To manage state",
        "To handle side effects"
      ],
      correctAnswer: 1,
    },
    {
      question: "What is 'useCallback' used for in React?",
      answers: [
        "To memoize callback functions and prevent unnecessary re-renders",
        "To manage local state",
        "To handle side effects",
        "To create new components"
      ],
      correctAnswer: 1,
    },
    {
      question: "What is the difference between 'useState' and 'useReducer'?",
      answers: [
        "'useState' is for simple state management, while 'useReducer' is for more complex state logic",
        "'useReducer' is for simple state management, while 'useState' is for more complex state logic",
        "There is no difference",
        "Both are used for handling side effects"
      ],
      correctAnswer: 1,
    },
    {
      question: "How do you use multiple `useEffect` hooks in a component?",
      answers: [
        "By calling `useEffect` multiple times with different dependencies",
        "By using a single `useEffect` hook with multiple functions",
        "By combining multiple hooks into one",
        "By nesting `useEffect` hooks inside each other"
      ],
      correctAnswer: 1,
    },
    {
      question: "What does 'React.lazy' do?",
      answers: [
        "Enables dynamic import of components, supporting code splitting",
        "Optimizes component rendering",
        "Manages global state",
        "Handles routing"
      ],
      correctAnswer: 1,
    },
    {
      question: "What is 'Suspense' used for in React?",
      answers: [
        "To handle loading states for components that are loaded lazily",
        "To manage local state",
        "To optimize rendering performance",
        "To define component methods"
      ],
      correctAnswer: 1,
    },
    {
      question: "What is the purpose of 'React.Fragment'?",
      answers: [
        "To group multiple elements without adding extra nodes to the DOM",
        "To handle form submissions",
        "To define inline styles",
        "To manage global state"
      ],
      correctAnswer: 1,
    },
    {
      question: "How do you create a context in React?",
      answers: [
        "By using `React.createContext`",
        "By using `useState`",
        "By using `useReducer`",
        "By using `React.Component`"
      ],
      correctAnswer: 1,
    },
    {
      question: "What is the purpose of the `useMemo` hook?",
      answers: [
        "To memoize the result of a computation and optimize performance",
        "To manage local state",
        "To handle side effects",
        "To pass data between components"
      ],
      correctAnswer: 1,
    },
    {
      question: "What does the 'useRef' hook do?",
      answers: [
        "Provides a way to access and manipulate DOM elements directly",
        "Manages local state",
        "Handles side effects",
        "Passes data between components"
      ],
      correctAnswer: 1,
    },
    {
      question: "What is 'useImperativeHandle' used for?",
      answers: [
        "To customize the instance value that is exposed when using `ref`",
        "To handle side effects",
        "To manage local state",
        "To optimize performance"
      ],
      correctAnswer: 1,
    },
    {
      question: "What does 'React.StrictMode' do?",
      answers: [
        "Helps identify potential problems in an application by providing additional warnings",
        "Manages local state",
        "Handles routing",
        "Creates new components"
      ],
      correctAnswer: 1,
    },
    {
      question: "What is 'forwardRef' used for in React?",
      answers: [
        "To forward refs from parent components to child components",
        "To manage local state",
        "To handle form submissions",
        "To define component methods"
      ],
      correctAnswer: 1,
    },
    {
      question: "How do you handle errors in React components?",
      answers: [
        "By using Error Boundaries",
        "By using the `catch` block",
        "By using the `finally` block",
        "By using `useEffect` hook"
      ],
      correctAnswer: 1,
    },
    {
      question: "What is the purpose of `React.createPortal`?",
      answers: [
        "To render children into a DOM node that exists outside the parent component's DOM hierarchy",
        "To manage state",
        "To handle form submissions",
        "To create new components"
      ],
      correctAnswer: 1,
    },
    {
      question: "What is the significance of the `useLayoutEffect` hook?",
      answers: [
        "Runs synchronously after all DOM mutations, useful for measuring layout",
        "Manages local state",
        "Handles side effects after rendering",
        "Optimizes performance by memoizing functions"
      ],
      correctAnswer: 1,
    },
    {
      question: "How do you handle context updates in functional components?",
      answers: [
        "By using `useContext` hook",
        "By using `useEffect` hook",
        "By using `useReducer` hook",
        "By using `useState` hook"
      ],
      correctAnswer: 1,
    },
    {
      question: "What is 'useDebugValue' used for in React?",
      answers: [
        "To display a label for custom hooks in React DevTools",
        "To manage local state",
        "To handle side effects",
        "To pass data between components"
      ],
      correctAnswer: 1,
    },
    {
      question: "What is the main difference between `useEffect` and `useLayoutEffect`?",
      answers: [
        "`useEffect` runs asynchronously after the DOM has been painted, while `useLayoutEffect` runs synchronously before painting",
        "`useLayoutEffect` runs asynchronously after the DOM has been painted, while `useEffect` runs synchronously before painting",
        "There is no difference",
        "Both hooks are used for handling events"
      ],
      correctAnswer: 1,
    },
  ],
},
  mongodb: {
    id: "mongodb",
    title: "MongoDB",
    questions: [
      {
        question: "What type of database is MongoDB?",
        answers: ["NoSQL", "SQL", "Graph", "Object-Oriented"],
        correctAnswer: 1,
      },
      {
        question: "What is the basic unit of data in MongoDB?",
        answers: ["Document", "Row", "Table", "Collection"],
        correctAnswer: 1,
      },
      {
        question: "Which data format does MongoDB use to store data?",
        answers: ["BSON", "JSON", "XML", "CSV"],
        correctAnswer: 1,
      },
      {
        question: "How do you create a new collection in MongoDB?",
        answers: [
          "db.createCollection('collectionName')",
          "db.collectionName.create()",
          "db.newCollection('collectionName')",
          "db.create('collectionName')",
        ],
        correctAnswer: 1,
      },
      {
        question: "How do you insert a document into a MongoDB collection?",
        answers: [
          "db.collectionName.insertOne(document)",
          "db.collectionName.add(document)",
          "db.collectionName.insert(document)",
          "db.collectionName.put(document)",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the command to find all documents in a MongoDB collection?",
        answers: [
          "db.collectionName.find()",
          "db.collectionName.get()",
          "db.collectionName.select()",
          "db.collectionName.query()",
        ],
        correctAnswer: 1,
      },
      {
        question: "How do you update a document in MongoDB?",
        answers: [
          "db.collectionName.updateOne(filter, update)",
          "db.collectionName.edit(filter, update)",
          "db.collectionName.modify(filter, update)",
          "db.collectionName.change(filter, update)",
        ],
        correctAnswer: 1,
      },
      {
        question: "How do you delete a document in MongoDB?",
        answers: [
          "db.collectionName.deleteOne(filter)",
          "db.collectionName.remove(filter)",
          "db.collectionName.drop(filter)",
          "db.collectionName.erase(filter)",
        ],
        correctAnswer: 1,
      },
      {
        question: "What command is used to count documents in a collection?",
        answers: [
          "db.collectionName.countDocuments()",
          "db.collectionName.count()",
          "db.collectionName.size()",
          "db.collectionName.total()",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is an index in MongoDB?",
        answers: [
          "A data structure that improves query performance",
          "A unique identifier for documents",
          "A type of document",
          "A collection of documents",
        ],
        correctAnswer: 1,
      },
      {
        question: "How do you create an index on a field in MongoDB?",
        answers: [
          "db.collectionName.createIndex({field: 1})",
          "db.collectionName.addIndex({field: 1})",
          "db.collectionName.index({field: 1})",
          "db.collectionName.makeIndex({field: 1})",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is a replica set in MongoDB?",
        answers: [
          "A group of MongoDB servers that maintain the same data set",
          "A single MongoDB server instance",
          "A type of database backup",
          "A user role in MongoDB",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is sharding in MongoDB?",
        answers: [
          "A method for distributing data across multiple servers",
          "A technique for backing up data",
          "A way to encrypt data",
          "A type of data indexing",
        ],
        correctAnswer: 1,
      },
      {
        question: "How do you enable sharding for a collection?",
        answers: [
          "sh.shardCollection('database.collection', {shardKey: 1})",
          "db.collection.shard({shardKey: 1})",
          "db.shardCollection('database.collection', {shardKey: 1})",
          "sh.enableCollection('database.collection', {shardKey: 1})",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the purpose of the `aggregate` method in MongoDB?",
        answers: [
          "To perform complex queries and data transformations",
          "To insert new documents",
          "To update existing documents",
          "To delete documents",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is a pipeline in MongoDB aggregation?",
        answers: [
          "A sequence of stages that process documents",
          "A type of index",
          "A method for data backup",
          "A way to partition data",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the purpose of the `$match` stage in an aggregation pipeline?",
        answers: [
          "To filter documents that match a specified condition",
          "To sort documents",
          "To group documents",
          "To project fields",
        ],
        correctAnswer: 1,
      },
      {
        question: "How do you perform a text search in MongoDB?",
        answers: [
          "db.collectionName.find({ $text: { $search: 'query' } })",
          "db.collectionName.textSearch('query')",
          "db.collectionName.find({ text: 'query' })",
          "db.collectionName.search('query')",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the purpose of the `$group` stage in an aggregation pipeline?",
        answers: [
          "To group documents by a specified field and perform aggregation operations",
          "To filter documents",
          "To sort documents",
          "To project fields",
        ],
        correctAnswer: 1,
      },
      {
        question: "How do you perform a join operation in MongoDB?",
        answers: [
          "By using the `$lookup` stage in an aggregation pipeline",
          "By using the `join` method",
          "By using the `merge` method",
          "By using the `combine` method",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the `findOne` method used for in MongoDB?",
        answers: [
          "To find a single document that matches the query",
          "To find multiple documents",
          "To insert a document",
          "To update a document",
        ],
        correctAnswer: 1,
      },
      {
        question: "How do you update multiple documents in MongoDB?",
        answers: [
          "db.collectionName.updateMany(filter, update)",
          "db.collectionName.updateAll(filter, update)",
          "db.collectionName.modifyMany(filter, update)",
          "db.collectionName.changeMany(filter, update)",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the command to drop a collection in MongoDB?",
        answers: [
          "db.collectionName.drop()",
          "db.collectionName.delete()",
          "db.collectionName.remove()",
          "db.collectionName.erase()",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is a document in MongoDB?",
        answers: [
          "A record in BSON format",
          "A row in a table",
          "A type of index",
          "A collection of documents",
        ],
        correctAnswer: 1,
      },
      {
        question: "How do you define a unique index in MongoDB?",
        answers: [
          "db.collectionName.createIndex({field: 1}, {unique: true})",
          "db.collectionName.addUniqueIndex({field: 1})",
          "db.collectionName.defineUniqueIndex({field: 1})",
          "db.collectionName.index({field: 1}, {unique: true})",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the purpose of the `$project` stage in an aggregation pipeline?",
        answers: [
          "To include or exclude fields from documents",
          "To group documents",
          "To filter documents",
          "To sort documents",
        ],
        correctAnswer: 1,
      },
      {
        question: "What command is used to get information about the indexes of a collection?",
        answers: [
          "db.collectionName.getIndexes()",
          "db.collectionName.indexes()",
          "db.collectionName.listIndexes()",
          "db.collectionName.indexDetails()",
        ],
        correctAnswer: 1,
      },
      {
        question: "How do you check the current database in MongoDB?",
        answers: [
          "db",
          "db.currentDatabase()",
          "db.getDatabase()",
          "db.database()",
        ],
        correctAnswer: 1,
      },
      {
        question: "What does the `mongod` command do?",
        answers: [
          "Starts the MongoDB server",
          "Connects to the MongoDB server",
          "Starts a MongoDB shell",
          "Performs a MongoDB backup",
        ],
        correctAnswer: 1,
      },
      {
        question: "What command is used to find documents in a MongoDB collection?",
        answers: [
          "db.collectionName.find()",
          "db.collectionName.query()",
          "db.collectionName.select()",
          "db.collectionName.search()",
        ],
        correctAnswer: 1,
      },
      {
        question: "How do you create a new database in MongoDB?",
        answers: [
          "Use `use databaseName` command",
          "db.createDatabase('databaseName')",
          "db.newDatabase('databaseName')",
          "db.create('databaseName')",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the purpose of the `$sort` stage in an aggregation pipeline?",
        answers: [
          "To sort documents by specified fields",
          "To filter documents",
          "To group documents",
          "To project fields",
        ],
        correctAnswer: 1,
      },
      {
        question: "How do you drop an index from a MongoDB collection?",
        answers: [
          "db.collectionName.dropIndex('indexName')",
          "db.collectionName.removeIndex('indexName')",
          "db.collectionName.deleteIndex('indexName')",
          "db.collectionName.eraseIndex('indexName')",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the `mongosh` tool used for?",
        answers: [
          "A modern shell for interacting with MongoDB",
          "A tool for database backup",
          "A command-line interface for MongoDB setup",
          "A monitoring tool for MongoDB",
        ],
        correctAnswer: 1,
      },
      {
        question: "What does the `$limit` stage do in an aggregation pipeline?",
        answers: [
          "Limits the number of documents passed to the next stage",
          "Filters documents based on a condition",
          "Groups documents by specified fields",
          "Sorts documents in ascending order",
        ],
        correctAnswer: 1,
      },
      {
        question: "What does the `$unwind` stage do in an aggregation pipeline?",
        answers: [
          "Deconstructs an array field to output a document for each element",
          "Groups documents by specified fields",
          "Filters documents based on a condition",
          "Sorts documents in descending order",
        ],
        correctAnswer: 1,
      },
      {
        question: "How do you set a TTL (Time-To-Live) index in MongoDB?",
        answers: [
          "db.collectionName.createIndex({field: 1}, {expireAfterSeconds: seconds})",
          "db.collectionName.addTTLIndex({field: 1}, seconds)",
          "db.collectionName.setTTL({field: 1}, seconds)",
          "db.collectionName.createTTL({field: 1}, seconds)",
        ],
        correctAnswer: 1,
      },
      {
        question: "What command is used to backup MongoDB data?",
        answers: [
          "mongodump",
          "mongoexport",
          "mongorestore",
          "mongoimport",
        ],
        correctAnswer: 1,
      },
      {
        question: "How do you restore data from a backup in MongoDB?",
        answers: [
          "mongorestore",
          "mongodump",
          "mongoimport",
          "mongoexport",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the `db.collectionName.stats()` command used for?",
        answers: [
          "To get statistics about the collection",
          "To get document counts",
          "To create indexes",
          "To drop collections",
        ],
        correctAnswer: 1,
      },
      {
        question: "What does the `$addFields` stage do in an aggregation pipeline?",
        answers: [
          "Adds new fields to documents",
          "Filters documents",
          "Groups documents",
          "Sorts documents",
        ],
        correctAnswer: 1,
      },
      {
        question: "How do you check the version of MongoDB you are using?",
        answers: [
          "mongo --version",
          "mongod --version",
          "mongosh --version",
          "db.version()",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the purpose of the `mongostat` command?",
        answers: [
          "To monitor MongoDB server status",
          "To backup MongoDB data",
          "To restore MongoDB data",
          "To create indexes",
        ],
        correctAnswer: 1,
      },
      {
        question: "How do you list all databases in MongoDB?",
        answers: [
          "db.adminCommand('listDatabases')",
          "db.listDatabases()",
          "db.getDatabases()",
          "show databases",
        ],
        correctAnswer: 1,
      },
      {
        question: "How do you list all collections in a MongoDB database?",
        answers: [
          "db.getCollectionNames()",
          "db.listCollections()",
          "db.showCollections()",
          "show collections",
        ],
        correctAnswer: 1,
      },
    ],
  },
  mysql: {
    id: "mysql",
    title: "MySQL",
    questions: [
      {
        question: "What does SQL stand for?",
        answers: [
          "Structured Query Language",
          "Simple Query Language",
          "Standard Query Language",
          "Sequential Query Language",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which command is used to create a database in MySQL?",
        answers: [
          "CREATE DATABASE",
          "MAKE DATABASE",
          "NEW DATABASE",
          "INIT DATABASE",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which command is used to create a table in MySQL?",
        answers: [
          "CREATE TABLE",
          "NEW TABLE",
          "MAKE TABLE",
          "INIT TABLE",
        ],
        correctAnswer: 1,
      },
      {
        question: "How do you select all columns from a table named 'users'?",
        answers: [
          "SELECT * FROM users",
          "SELECT all FROM users",
          "SELECT users FROM *",
          "GET * FROM users",
        ],
        correctAnswer: 1,
      },
      {
        question: "How do you add a new column to an existing table?",
        answers: [
          "ALTER TABLE tableName ADD columnName columnType",
          "MODIFY TABLE tableName ADD columnName columnType",
          "CHANGE TABLE tableName ADD columnName columnType",
          "UPDATE TABLE tableName ADD columnName columnType",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which command is used to delete a table in MySQL?",
        answers: [
          "DROP TABLE",
          "DELETE TABLE",
          "REMOVE TABLE",
          "CLEAR TABLE",
        ],
        correctAnswer: 1,
      },
      {
        question: "How do you delete all rows from a table without removing the table structure?",
        answers: [
          "TRUNCATE TABLE",
          "DELETE TABLE",
          "REMOVE TABLE",
          "CLEAR TABLE",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which command is used to add a new row to a table?",
        answers: [
          "INSERT INTO",
          "ADD INTO",
          "UPDATE INTO",
          "PUT INTO",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which SQL keyword is used to prevent duplicate records in a table?",
        answers: [
          "DISTINCT",
          "UNIQUE",
          "NO_DUPLICATES",
          "EXCLUSIVE",
        ],
        correctAnswer: 1,
      },
      {
        question: "How do you update existing records in a table?",
        answers: [
          "UPDATE tableName SET columnName = value WHERE condition",
          "MODIFY tableName SET columnName = value WHERE condition",
          "CHANGE tableName SET columnName = value WHERE condition",
          "ALTER tableName SET columnName = value WHERE condition",
        ],
        correctAnswer: 1,
      },
      {
        question: "How do you delete records from a table based on a condition?",
        answers: [
          "DELETE FROM tableName WHERE condition",
          "REMOVE FROM tableName WHERE condition",
          "TRUNCATE FROM tableName WHERE condition",
          "DROP FROM tableName WHERE condition",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which function is used to find the number of rows in a table?",
        answers: [
          "COUNT()",
          "SUM()",
          "TOTAL()",
          "NUM()",
        ],
        correctAnswer: 1,
      },
      {
        question: "What does the `JOIN` keyword do in SQL?",
        answers: [
          "Combines rows from two or more tables",
          "Filters rows in a table",
          "Orders rows in a table",
          "Groups rows in a table",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which type of join returns all records from the left table and matched records from the right table?",
        answers: [
          "LEFT JOIN",
          "RIGHT JOIN",
          "INNER JOIN",
          "FULL JOIN",
        ],
        correctAnswer: 1,
      },
      {
        question: "What does the `GROUP BY` clause do in SQL?",
        answers: [
          "Groups rows that have the same values into summary rows",
          "Sorts rows in a table",
          "Filters rows in a table",
          "Joins two tables together",
        ],
        correctAnswer: 1,
      },
      {
        question: "How do you create an index on a column in MySQL?",
        answers: [
          "CREATE INDEX indexName ON tableName (columnName)",
          "ADD INDEX indexName ON tableName (columnName)",
          "MAKE INDEX indexName ON tableName (columnName)",
          "INIT INDEX indexName ON tableName (columnName)",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the default port number for MySQL?",
        answers: [
          "3306",
          "1433",
          "5432",
          "1521",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which SQL command is used to retrieve data from a database?",
        answers: [
          "SELECT",
          "GET",
          "FETCH",
          "RETRIEVE",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which clause is used to filter records in SQL?",
        answers: [
          "WHERE",
          "FILTER",
          "HAVING",
          "ORDER BY",
        ],
        correctAnswer: 1,
      },
      {
        question: "What does the `ORDER BY` clause do in SQL?",
        answers: [
          "Sorts the result set in ascending or descending order",
          "Filters records in the result set",
          "Groups records in the result set",
          "Joins records from multiple tables",
        ],
        correctAnswer: 1,
      },
      {
        question: "How do you select distinct values from a column?",
        answers: [
          "SELECT DISTINCT columnName FROM tableName",
          "SELECT UNIQUE columnName FROM tableName",
          "SELECT DIFFERENT columnName FROM tableName",
          "SELECT DISTINCTIVE columnName FROM tableName",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which command is used to change the structure of a table?",
        answers: [
          "ALTER TABLE",
          "MODIFY TABLE",
          "UPDATE TABLE",
          "CHANGE TABLE",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the purpose of the `HAVING` clause in SQL?",
        answers: [
          "Filters records after grouping",
          "Filters records before grouping",
          "Sorts records",
          "Joins multiple tables",
        ],
        correctAnswer: 1,
      },
      {
        question: "How do you create a view in MySQL?",
        answers: [
          "CREATE VIEW viewName AS SELECT columnName FROM tableName",
          "MAKE VIEW viewName AS SELECT columnName FROM tableName",
          "NEW VIEW viewName AS SELECT columnName FROM tableName",
          "INIT VIEW viewName AS SELECT columnName FROM tableName",
        ],
        correctAnswer: 1,
      },
      {
        question: "What does the `LIMIT` clause do in SQL?",
        answers: [
          "Specifies the number of records to return",
          "Sorts the records",
          "Filters the records",
          "Groups the records",
        ],
        correctAnswer: 1,
      },
      {
        question: "How do you drop a view in MySQL?",
        answers: [
          "DROP VIEW viewName",
          "DELETE VIEW viewName",
          "REMOVE VIEW viewName",
          "CLEAR VIEW viewName",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which SQL function is used to get the current date and time?",
        answers: [
          "NOW()",
          "CURRENT_DATE()",
          "GETDATE()",
          "SYSDATE()",
        ],
        correctAnswer: 1,
      },
      {
        question: "How do you prevent SQL injection attacks?",
        answers: [
          "Use prepared statements and parameterized queries",
          "Use dynamic SQL",
          "Escape all user input",
          "Use regular expressions",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is a primary key in a database table?",
        answers: [
          "A unique identifier for each record",
          "A foreign key reference",
          "A key used for sorting records",
          "A key used for indexing records",
        ],
        correctAnswer: 1,
      },
      {
        question: "How do you rename a table in MySQL?",
        answers: [
          "RENAME TABLE oldTableName TO newTableName",
          "ALTER TABLE oldTableName RENAME TO newTableName",
          "CHANGE TABLE oldTableName TO newTableName",
          "MODIFY TABLE oldTableName TO newTableName",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which command is used to show all indexes on a table?",
        answers: [
          "SHOW INDEX FROM tableName",
          "SHOW KEYS FROM tableName",
          "SHOW ALL INDEXES FROM tableName",
          "SHOW TABLE INDEXES FROM tableName",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is a foreign key in a database table?",
        answers: [
          "A key used to link two tables together",
          "A key used to uniquely identify each record",
          "A key used for indexing records",
          "A key used for sorting records",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which command is used to set a default value for a column?",
        answers: [
          "ALTER TABLE tableName MODIFY columnName columnType DEFAULT defaultValue",
          "ALTER TABLE tableName CHANGE columnName columnType DEFAULT defaultValue",
          "UPDATE TABLE tableName SET columnName = defaultValue",
          "CHANGE TABLE tableName columnName SET DEFAULT defaultValue",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the purpose of the `AUTO_INCREMENT` attribute?",
        answers: [
          "Automatically generates unique values for a column",
          "Automatically updates values in a column",
          "Automatically sorts values in a column",
          "Automatically indexes a column",
        ],
        correctAnswer: 1,
      },
      {
        question: "How do you retrieve the database version in MySQL?",
        answers: [
          "SELECT VERSION()",
          "SHOW VERSION",
          "GET VERSION()",
          "SHOW DATABASE VERSION",
        ],
        correctAnswer: 1,
      },
      {
        question: "What does the `IN` operator do in SQL?",
        answers: [
          "Checks if a value is within a set of values",
          "Checks if a value is not within a set of values",
          "Checks if a value is equal to a value",
          "Checks if a value is greater than a value",
        ],
        correctAnswer: 1,
      },
      {
        question: "How do you add a unique constraint to a column?",
        answers: [
          "ALTER TABLE tableName ADD CONSTRAINT constraintName UNIQUE (columnName)",
          "ALTER TABLE tableName MODIFY columnName UNIQUE",
          "ALTER TABLE tableName CHANGE columnName UNIQUE",
          "ALTER TABLE tableName SET columnName UNIQUE",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is a composite key?",
        answers: [
          "A primary key made up of two or more columns",
          "A unique key made up of one column",
          "A foreign key that references another table",
          "A key used to sort records",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which command is used to grant privileges to a user?",
        answers: [
          "GRANT",
          "ALLOW",
          "PERMIT",
          "AUTHORIZE",
        ],
        correctAnswer: 1,
      },
      {
        question: "How do you revoke privileges from a user?",
        answers: [
          "REVOKE",
          "DENY",
          "REMOVE",
          "WITHDRAW",
        ],
        correctAnswer: 1,
      },
      {
        question: "How do you show the current databases in MySQL?",
        answers: [
          "SHOW DATABASES",
          "LIST DATABASES",
          "SHOW ALL DATABASES",
          "SHOW DB",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which clause is used to sort the result set in descending order?",
        answers: [
          "ORDER BY columnName DESC",
          "SORT BY columnName DESC",
          "GROUP BY columnName DESC",
          "FILTER BY columnName DESC",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the purpose of the `UNION` operator?",
        answers: [
          "Combines the results of two or more SELECT statements",
          "Joins two or more tables together",
          "Filters the result set",
          "Groups the result set",
        ],
        correctAnswer: 1,
      },
      {
        question: "How do you find the maximum value in a column?",
        answers: [
          "SELECT MAX(columnName) FROM tableName",
          "SELECT TOP(columnName) FROM tableName",
          "SELECT HIGHEST(columnName) FROM tableName",
          "SELECT BIGGEST(columnName) FROM tableName",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which SQL function is used to concatenate two strings?",
        answers: [
          "CONCAT()",
          "JOIN()",
          "MERGE()",
          "LINK()",
        ],
        correctAnswer: 1,
      },
      {
        question: "How do you add a new row with a specific ID value?",
        answers: [
          "INSERT INTO tableName (id, columnName) VALUES (idValue, value)",
          "ADD INTO tableName (id, columnName) VALUES (idValue, value)",
          "UPDATE tableName SET id = idValue, columnName = value",
          "CHANGE tableName SET id = idValue, columnName = value",
        ],
        correctAnswer: 1,
      },
      {
        question: "How do you update only specific rows in a table?",
        answers: [
          "Use a WHERE clause with the UPDATE statement",
          "Use a JOIN clause with the UPDATE statement",
          "Use a GROUP BY clause with the UPDATE statement",
          "Use a LIMIT clause with the UPDATE statement",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the difference between `CHAR` and `VARCHAR`?",
        answers: [
          "`CHAR` has a fixed length, while `VARCHAR` can vary in length",
          "`CHAR` can vary in length, while `VARCHAR` has a fixed length",
          "`CHAR` is used for numeric data, while `VARCHAR` is used for text",
          "`CHAR` and `VARCHAR` are the same and can be used interchangeably",
        ],
        correctAnswer: 1,
      },
    ],
  },
  firebase: {
    id: "firebase",
    title: "Firebase",
    questions: [
      {
        question: "What is Firebase?",
        answers: [
          "A cloud-based platform for web and mobile applications",
          "A web development framework",
          "A programming language",
          "An IDE for mobile app development",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which Firebase service provides real-time data synchronization?",
        answers: [
          "Firebase Realtime Database",
          "Firebase Cloud Storage",
          "Firebase Authentication",
          "Firebase Firestore",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the main purpose of Firebase Authentication?",
        answers: [
          "To handle user sign-in and sign-up processes",
          "To store user data",
          "To perform real-time database operations",
          "To send notifications",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which Firebase service is used for cloud-based file storage?",
        answers: [
          "Firebase Cloud Storage",
          "Firebase Realtime Database",
          "Firebase Authentication",
          "Firebase Hosting",
        ],
        correctAnswer: 1,
      },
      {
        question: "How does Firebase handle user authentication?",
        answers: [
          "Through email/password, social providers, and custom authentication systems",
          "Through SMS and email only",
          "Through biometric verification only",
          "Through physical security keys only",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which Firebase product is designed for hosting static websites?",
        answers: [
          "Firebase Hosting",
          "Firebase Cloud Storage",
          "Firebase Realtime Database",
          "Firebase Firestore",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is Firebase Firestore?",
        answers: [
          "A NoSQL document database",
          "A cloud-based file storage service",
          "A user authentication service",
          "A real-time database service",
        ],
        correctAnswer: 1,
      },
      {
        question: "How do you initialize Firebase in a web app?",
        answers: [
          "By adding the Firebase SDK script and configuring it with your Firebase project settings",
          "By installing the Firebase CLI and running an initialization command",
          "By including the Firebase package in your project’s build script",
          "By setting up a Firebase configuration file in your project directory",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which Firebase product allows you to create serverless functions?",
        answers: [
          "Firebase Cloud Functions",
          "Firebase Realtime Database",
          "Firebase Hosting",
          "Firebase Firestore",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the use of Firebase Cloud Messaging (FCM)?",
        answers: [
          "To send notifications and messages to users across platforms",
          "To store and manage cloud files",
          "To authenticate users",
          "To synchronize data in real-time",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the primary difference between Firebase Realtime Database and Firestore?",
        answers: [
          "Firestore supports more complex queries and has a richer set of data types",
          "Realtime Database supports more complex queries",
          "Firestore does not support real-time data synchronization",
          "Realtime Database has a richer set of data types",
        ],
        correctAnswer: 1,
      },
      {
        question: "How can you set up Firebase Analytics in your app?",
        answers: [
          "By integrating the Firebase Analytics SDK and configuring it with your app",
          "By setting up Google Analytics and linking it with Firebase",
          "By using Firebase Cloud Functions to track analytics events",
          "By configuring Firebase Hosting to track user behavior",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which Firebase product provides A/B testing capabilities?",
        answers: [
          "Firebase Remote Config",
          "Firebase Cloud Messaging",
          "Firebase Authentication",
          "Firebase Firestore",
        ],
        correctAnswer: 1,
      },
      {
        question: "How does Firebase Hosting manage your deployment?",
        answers: [
          "By using a global CDN to deliver your site quickly and reliably",
          "By storing files on a local server",
          "By using a peer-to-peer network",
          "By hosting on a single regional server",
        ],
        correctAnswer: 1,
      },
      {
        question: "What feature does Firebase Performance Monitoring provide?",
        answers: [
          "Insights into your app’s performance and user experience",
          "Real-time data synchronization",
          "User authentication",
          "Cloud-based file storage",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the purpose of Firebase Cloud Storage?",
        answers: [
          "To store and serve user-generated content like images and videos",
          "To manage user authentication and access",
          "To synchronize data between users in real-time",
          "To host static websites",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which Firebase product helps with app performance monitoring?",
        answers: [
          "Firebase Performance Monitoring",
          "Firebase Cloud Functions",
          "Firebase Realtime Database",
          "Firebase Firestore",
        ],
        correctAnswer: 1,
      },
      {
        question: "What does the Firebase CLI enable you to do?",
        answers: [
          "Manage Firebase projects and deploy your app",
          "Access the Firebase console",
          "Configure Firebase Authentication",
          "Build Firebase Cloud Functions",
        ],
        correctAnswer: 1,
      },
      {
        question: "How does Firebase handle offline data?",
        answers: [
          "By caching data locally and synchronizing with the server when online",
          "By storing data only on the server",
          "By requiring a constant internet connection",
          "By encrypting data and storing it offline securely",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is Firebase Dynamic Links used for?",
        answers: [
          "To create links that work across multiple platforms and track user engagement",
          "To create deep links for mobile apps",
          "To generate URLs for cloud storage",
          "To set up authentication links",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which Firebase product provides a user-friendly UI for managing your project's data?",
        answers: [
          "Firebase Console",
          "Firebase CLI",
          "Firebase SDK",
          "Firebase Cloud Functions",
        ],
        correctAnswer: 1,
      },
      {
        question: "How does Firebase Cloud Firestore handle real-time updates?",
        answers: [
          "By using listeners that update the client whenever data changes",
          "By periodically polling the server for updates",
          "By requiring manual refreshes to update data",
          "By sending updates via email notifications",
        ],
        correctAnswer: 1,
      },
      {
        question: "What are Firebase Security Rules used for?",
        answers: [
          "To define access controls and permissions for your Firebase services",
          "To set up database schema and relationships",
          "To manage user roles and permissions",
          "To optimize performance and reduce latency",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which Firebase product is best suited for hosting dynamic content and APIs?",
        answers: [
          "Firebase Cloud Functions",
          "Firebase Realtime Database",
          "Firebase Hosting",
          "Firebase Firestore",
        ],
        correctAnswer: 1,
      },
      {
        question: "How can you implement user roles and permissions in Firebase?",
        answers: [
          "By using Firebase Authentication along with Firestore Security Rules",
          "By configuring user roles in Firebase Hosting",
          "By setting up user permissions in Firebase Cloud Storage",
          "By managing roles in Firebase Realtime Database",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the purpose of Firebase Remote Config?",
        answers: [
          "To change the behavior and appearance of your app without publishing an update",
          "To configure database schemas and structures",
          "To manage user authentication settings",
          "To monitor app performance",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is Firebase Test Lab used for?",
        answers: [
          "To test your app on a range of devices and configurations in the cloud",
          "To perform security audits",
          "To optimize database queries",
          "To monitor app performance",
        ],
        correctAnswer: 1,
      },
      {
        question: "How do you integrate Firebase Analytics with your app?",
        answers: [
          "By adding the Firebase Analytics SDK and configuring it with your project",
          "By using Google Analytics and linking it to Firebase",
          "By setting up Firebase Cloud Functions for tracking events",
          "By configuring Firebase Hosting settings",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which Firebase service allows you to create a custom backend API?",
        answers: [
          "Firebase Cloud Functions",
          "Firebase Hosting",
          "Firebase Realtime Database",
          "Firebase Firestore",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the role of Firebase Firestore's `snapshot` listener?",
        answers: [
          "To listen for real-time updates to a document or collection",
          "To fetch data from the server once",
          "To manage authentication sessions",
          "To upload files to cloud storage",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the Firebase Emulator Suite used for?",
        answers: [
          "To test and debug Firebase applications locally before deploying",
          "To manage Firebase projects",
          "To deploy Firebase services to production",
          "To analyze app performance in real-time",
        ],
        correctAnswer: 1,
      },
      {
        question: "How does Firebase handle data synchronization across devices?",
        answers: [
          "By using real-time data synchronization with Firebase Realtime Database or Firestore",
          "By periodically syncing data through scheduled tasks",
          "By requiring manual updates to sync data",
          "By using a peer-to-peer network for data transfer",
        ],
        correctAnswer: 1,
      },
      {
        question: "What feature of Firebase allows you to send messages and notifications to users?",
        answers: [
          "Firebase Cloud Messaging (FCM)",
          "Firebase Cloud Functions",
          "Firebase Hosting",
          "Firebase Realtime Database",
        ],
        correctAnswer: 1,
      },
      {
        question: "How can you protect sensitive data in Firebase?",
        answers: [
          "By using Firebase Security Rules to control access to your data",
          "By encrypting data before sending it to Firebase",
          "By setting up VPNs for secure data transfer",
          "By using SSL/TLS for communication",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which Firebase product provides a way to manage feature flags and remote configurations?",
        answers: [
          "Firebase Remote Config",
          "Firebase Cloud Functions",
          "Firebase Analytics",
          "Firebase Hosting",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the main advantage of using Firebase Authentication?",
        answers: [
          "Simplified user management and integration with various authentication providers",
          "Automatic data synchronization across devices",
          "Enhanced cloud storage capabilities",
          "Improved app performance monitoring",
        ],
        correctAnswer: 1,
      },
      {
        question: "How does Firebase support offline capabilities?",
        answers: [
          "By providing local data caching and automatic synchronization when online",
          "By requiring users to always be online for data access",
          "By manually syncing data at intervals",
          "By storing offline data in a local database only",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is Firebase's approach to handling scalability?",
        answers: [
          "By using Google Cloud's infrastructure to scale resources automatically",
          "By limiting the number of users to prevent overload",
          "By requiring manual scaling of resources",
          "By optimizing queries for performance only",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is Firebase's method for handling user data privacy and compliance?",
        answers: [
          "By offering tools and settings to manage data access and comply with regulations like GDPR",
          "By encrypting all user data automatically",
          "By storing data in a secure environment without user control",
          "By requiring developers to handle privacy compliance manually",
        ],
        correctAnswer: 1,
      },
      {
        question: "How do you deploy a web app using Firebase Hosting?",
        answers: [
          "By using the Firebase CLI to deploy your app to Firebase's global CDN",
          "By uploading files manually to Firebase Console",
          "By configuring your app for Firebase Hosting in your build script",
          "By setting up a Firebase project and running a deployment command",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which Firebase service would you use to run background tasks or server-side logic?",
        answers: [
          "Firebase Cloud Functions",
          "Firebase Realtime Database",
          "Firebase Hosting",
          "Firebase Analytics",
        ],
        correctAnswer: 1,
      },
      {
        question: "What type of database is Firebase Realtime Database?",
        answers: [
          "A NoSQL cloud database",
          "A relational SQL database",
          "A key-value store",
          "A document-based database",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which Firebase product provides scalable and secure cloud storage for your app?",
        answers: [
          "Firebase Cloud Storage",
          "Firebase Firestore",
          "Firebase Realtime Database",
          "Firebase Hosting",
        ],
        correctAnswer: 1,
      },
      {
        question: "What kind of data model does Firebase Firestore use?",
        answers: [
          "A document-based model with collections and documents",
          "A relational model with tables and rows",
          "A key-value model",
          "A graph-based model",
        ],
        correctAnswer: 1,
      },
      {
        question: "How do you monitor and debug Firebase Cloud Functions?",
        answers: [
          "By using Firebase’s built-in logging and monitoring tools",
          "By running functions locally in a debugger",
          "By analyzing the performance metrics in Firebase Console",
          "By setting up custom logging solutions",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is Firebase Dynamic Links primarily used for?",
        answers: [
          "To create deep links that work across different platforms and track user behavior",
          "To handle user authentication",
          "To manage real-time data synchronization",
          "To deploy and host web applications",
        ],
        correctAnswer: 1,
      },
    ],
  },
  devops: {
    id: "devops",
    title: "DevOps",
    questions: [
      {
        question: "What is the primary goal of DevOps?",
        answers: [
          "To improve collaboration between development and operations teams",
          "To focus solely on application development",
          "To replace traditional IT operations with automated tools",
          "To increase the speed of software delivery by isolating teams",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which of the following is a key practice in DevOps?",
        answers: [
          "Continuous Integration and Continuous Deployment (CI/CD)",
          "Manual software testing",
          "Waterfall project management",
          "On-premises hardware management",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is Continuous Integration (CI)?",
        answers: [
          "The practice of frequently merging code changes into a shared repository",
          "The process of deploying code to production servers",
          "The manual testing of code before deployment",
          "The creation of separate development environments for each developer",
        ],
        correctAnswer: 1,
      },
      {
        question: "What does Continuous Delivery (CD) ensure?",
        answers: [
          "That code changes are automatically tested and ready for deployment",
          "That all code changes are manually reviewed before deployment",
          "That development and operations teams work independently",
          "That all deployments happen on a weekly basis",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which tool is commonly used for configuration management in DevOps?",
        answers: [
          "Ansible",
          "Jenkins",
          "Docker",
          "Kubernetes",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the purpose of a container in DevOps?",
        answers: [
          "To package an application and its dependencies into a single unit",
          "To manage network traffic between servers",
          "To automate software testing",
          "To monitor server performance",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which of the following is a container orchestration tool?",
        answers: [
          "Kubernetes",
          "Jenkins",
          "Ansible",
          "Terraform",
        ],
        correctAnswer: 1,
      },
      {
        question: "What does Infrastructure as Code (IaC) mean?",
        answers: [
          "Managing and provisioning infrastructure through code rather than manual processes",
          "Writing code for application logic",
          "Developing user interfaces with code",
          "Creating databases using SQL commands",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which tool is often used for managing cloud infrastructure?",
        answers: [
          "Terraform",
          "Jenkins",
          "Git",
          "Docker",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the role of a DevOps engineer?",
        answers: [
          "To facilitate collaboration between development and operations teams and automate processes",
          "To develop software applications",
          "To manage IT hardware infrastructure",
          "To perform manual code reviews",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is a common DevOps metric for measuring deployment frequency?",
        answers: [
          "Deployment rate",
          "Bug count",
          "Code complexity",
          "Server uptime",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which tool is commonly used for CI/CD pipelines?",
        answers: [
          "Jenkins",
          "Grafana",
          "Prometheus",
          "Nagios",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the purpose of version control in DevOps?",
        answers: [
          "To track changes to code and manage different versions of software",
          "To automate deployment processes",
          "To monitor system performance",
          "To configure network settings",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which of the following is a cloud-based DevOps platform?",
        answers: [
          "AWS CodePipeline",
          "Jenkins",
          "Docker",
          "Terraform",
        ],
        correctAnswer: 1,
      },
      {
        question: "What does the term 'blue-green deployment' refer to?",
        answers: [
          "A deployment strategy that reduces downtime by switching between two identical environments",
          "A method of rolling out changes incrementally",
          "A strategy for automatic scaling of applications",
          "A technique for manual software deployment",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is a microservices architecture?",
        answers: [
          "An approach where an application is composed of small, loosely coupled services",
          "A way to build monolithic applications",
          "A framework for serverless computing",
          "A method for integrating third-party APIs",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is a common DevOps practice for ensuring application reliability?",
        answers: [
          "Automated testing and monitoring",
          "Manual deployment of code changes",
          "Regular server reboots",
          "Disabling error logging",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which DevOps tool is used for creating and managing Docker containers?",
        answers: [
          "Docker CLI",
          "Terraform",
          "Jenkins",
          "Kubernetes",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the purpose of monitoring in a DevOps environment?",
        answers: [
          "To track the performance and health of applications and infrastructure",
          "To manage source code repositories",
          "To perform data backups",
          "To create deployment scripts",
        ],
        correctAnswer: 1,
      },
      {
        question: "What does 'shift-left testing' mean in DevOps?",
        answers: [
          "Performing testing earlier in the development lifecycle to identify issues sooner",
          "Postponing testing until the final stage of development",
          "Conducting tests only in production environments",
          "Performing testing exclusively in manual QA phases",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which of the following is a configuration management tool?",
        answers: [
          "Ansible",
          "Jenkins",
          "Docker",
          "Prometheus",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is a Service Level Agreement (SLA)?",
        answers: [
          "A contract that defines the expected level of service between a provider and a customer",
          "A tool for managing application deployment",
          "A method for automating infrastructure provisioning",
          "A document outlining coding standards",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the purpose of automated testing in a DevOps pipeline?",
        answers: [
          "To ensure code quality and functionality by running tests automatically during the development process",
          "To manually test each feature before deployment",
          "To create deployment scripts",
          "To monitor system performance",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the role of a DevOps dashboard?",
        answers: [
          "To provide visual insights into the state of applications and infrastructure",
          "To manage source code repositories",
          "To automate deployment processes",
          "To configure network settings",
        ],
        correctAnswer: 1,
      },
      {
        question: "What does 'infrastructure as code' (IaC) enable?",
        answers: [
          "Automated provisioning and management of infrastructure through code",
          "Manual configuration of hardware resources",
          "Creation of user interfaces",
          "Designing application logic",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which DevOps practice involves incrementally updating an application with minimal risk?",
        answers: [
          "Rolling deployment",
          "Blue-green deployment",
          "Feature toggles",
          "Shadow deployments",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the purpose of a load balancer in a DevOps environment?",
        answers: [
          "To distribute incoming network traffic across multiple servers to ensure high availability and reliability",
          "To manage source code repositories",
          "To monitor application performance",
          "To create deployment scripts",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which tool can be used for continuous integration in a DevOps pipeline?",
        answers: [
          "Jenkins",
          "Kubernetes",
          "Docker",
          "Terraform",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the purpose of using a DevOps pipeline?",
        answers: [
          "To automate the steps of software delivery from code commit to deployment",
          "To manually deploy code changes",
          "To create backup copies of data",
          "To monitor server performance",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which of the following is a commonly used container runtime?",
        answers: [
          "Docker",
          "Kubernetes",
          "Jenkins",
          "Terraform",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is 'GitOps'?",
        answers: [
          "A DevOps practice that uses Git repositories as the source of truth for declarative infrastructure and applications",
          "A method for automating deployment processes using GitHub Actions",
          "A tool for managing Git repositories",
          "A platform for running Git commands",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which tool is commonly used for log aggregation and analysis in DevOps?",
        answers: [
          "ELK Stack (Elasticsearch, Logstash, Kibana)",
          "Jenkins",
          "Docker",
          "Kubernetes",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is a rolling update?",
        answers: [
          "A deployment strategy where updates are applied gradually to avoid downtime",
          "A method for applying all updates at once",
          "A technique for manually updating servers",
          "A process for rolling back to previous versions",
        ],
        correctAnswer: 1,
      },
      {
        question: "What does 'Infrastructure as Code' (IaC) help achieve?",
        answers: [
          "Consistency and repeatability in managing and provisioning infrastructure",
          "Manual configuration of physical servers",
          "Developing user interfaces for applications",
          "Managing network traffic manually",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the purpose of a Service Mesh in DevOps?",
        answers: [
          "To manage and secure communications between microservices in a distributed application",
          "To deploy code changes to production servers",
          "To monitor server performance",
          "To automate database backups",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which DevOps tool is used for creating and managing virtual machines?",
        answers: [
          "Terraform",
          "Jenkins",
          "Docker",
          "Kubernetes",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is a canary release?",
        answers: [
          "A deployment strategy where a new version of an application is gradually rolled out to a small subset of users before a full release",
          "A method for deploying multiple versions of an application simultaneously",
          "A technique for manually updating applications",
          "A strategy for automatically rolling back deployments",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the primary benefit of using containerization in DevOps?",
        answers: [
          "Isolation and consistency across different environments",
          "Manual deployment of code changes",
          "Managing server hardware",
          "Optimizing network performance",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which tool is commonly used for performance monitoring and alerting in DevOps?",
        answers: [
          "Prometheus",
          "Jenkins",
          "Git",
          "Terraform",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the purpose of a rollback in DevOps?",
        answers: [
          "To revert to a previous version of an application in case of issues with a new deployment",
          "To deploy new changes to production servers",
          "To manually test code changes",
          "To configure network settings",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which DevOps tool helps in managing secrets and sensitive data?",
        answers: [
          "HashiCorp Vault",
          "Docker",
          "Jenkins",
          "Kubernetes",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is 'Serverless' computing?",
        answers: [
          "A cloud computing model where the cloud provider manages the infrastructure and scaling, allowing developers to focus on code",
          "A method for managing physical servers manually",
          "A way to run applications on dedicated servers",
          "A technique for virtualizing server hardware",
        ],
        correctAnswer: 1,
      },
      {
        question: "What does the term 'DevSecOps' imply?",
        answers: [
          "Integrating security practices within the DevOps process",
          "A separate team dedicated solely to security",
          "Manual security audits before deployments",
          "Automating network security configurations",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which tool is often used for continuous testing in a DevOps pipeline?",
        answers: [
          "JUnit",
          "Terraform",
          "Kubernetes",
          "Jenkins",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the purpose of a 'Build Pipeline' in DevOps?",
        answers: [
          "To automate the process of building, testing, and deploying code changes",
          "To manually compile code changes",
          "To create and manage virtual machines",
          "To monitor application performance",
        ],
        correctAnswer: 1,
      },
    ],
  },
  pcm: {
    id: "pcm",
    title: "Physics",
    questions: [
      // Physics questions
      {
        question: "What is the SI unit of force?",
        answers: ["Newton", "Joule", "Watt", "Pascal"],
        correctAnswer: 1,
      },
      {
        question: "What is the speed of light in a vacuum?",
        answers: ["3 x 10^8 m/s", "3 x 10^6 m/s", "3 x 10^10 m/s", "3 x 10^12 m/s"],
        correctAnswer: 1,
      },
      {
        question: "Who is known as the father of modern physics?",
        answers: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Niels Bohr"],
        correctAnswer: 1,
      },
      {
        question: "What is the law of conservation of energy?",
        answers: [
          "Energy cannot be created or destroyed, only transformed",
          "Energy can be created and destroyed",
          "Energy is always conserved in chemical reactions",
          "Energy is always lost in physical processes",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the formula for calculating gravitational potential energy?",
        answers: ["mgh", "1/2 mv^2", "mv", "mg"],
        correctAnswer: 1,
      },
      {
        question: "What is Ohm's Law?",
        answers: [
          "V = IR",
          "F = ma",
          "E = mc^2",
          "P = IV",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the unit of electric resistance?",
        answers: ["Ohm", "Volt", "Ampere", "Watt"],
        correctAnswer: 1,
      },
      {
        question: "What is the principle behind a transformer?",
        answers: [
          "Electromagnetic induction",
          "Thermal conduction",
          "Optical refraction",
          "Chemical reaction",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the speed of sound in air at room temperature?",
        answers: ["343 m/s", "300 m/s", "1500 m/s", "1200 m/s"],
        correctAnswer: 1,
      },
      {
        question: "What is the wavelength of visible light?",
        answers: ["400-700 nm", "1-10 nm", "700-1000 nm", "100-500 nm"],
        correctAnswer: 1,
      },
      // Chemistry questions
      {
        question: "What is the chemical formula for water?",
        answers: ["H2O", "CO2", "NaCl", "H2SO4"],
        correctAnswer: 1,
      },
      {
        question: "Which element is represented by the symbol 'Au'?",
        answers: ["Gold", "Silver", "Iron", "Copper"],
        correctAnswer: 1,
      },
      {
        question: "What is the pH of pure water at 25°C?",
        answers: ["7", "0", "14", "1"],
        correctAnswer: 1,
      },
      {
        question: "What is the most abundant gas in Earth's atmosphere?",
        answers: ["Nitrogen", "Oxygen", "Carbon Dioxide", "Hydrogen"],
        correctAnswer: 1,
      },
      {
        question: "What type of bond is formed by the sharing of electrons between atoms?",
        answers: ["Covalent bond", "Ionic bond", "Metallic bond", "Hydrogen bond"],
        correctAnswer: 1,
      },
      {
        question: "What is the molar mass of carbon dioxide (CO2)?",
        answers: ["44 g/mol", "32 g/mol", "18 g/mol", "28 g/mol"],
        correctAnswer: 1,
      },
      {
        question: "What is the process of separating a mixture by using differences in boiling points?",
        answers: ["Distillation", "Filtration", "Chromatography", "Evaporation"],
        correctAnswer: 1,
      },
      {
        question: "What is the common name for sodium chloride?",
        answers: ["Table salt", "Baking soda", "Vinegar", "Lemon juice"],
        correctAnswer: 1,
      },
      {
        question: "What is the law of constant proportions?",
        answers: [
          "A chemical compound always contains the same elements in the same proportion by mass",
          "The mass of reactants equals the mass of products",
          "Chemical reactions are reversible",
          "Elements combine in fixed ratios",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is an exothermic reaction?",
        answers: [
          "A reaction that releases heat",
          "A reaction that absorbs heat",
          "A reaction with no heat change",
          "A reaction that changes color",
        ],
        correctAnswer: 1,
      },
      // Mathematics questions
      {
        question: "What is the formula for the area of a circle?",
        answers: ["πr^2", "2πr", "πd", "r^2"],
        correctAnswer: 1,
      },
      {
        question: "What is the value of π (pi) to two decimal places?",
        answers: ["3.14", "2.71", "1.62", "1.41"],
        correctAnswer: 1,
      },
      {
        question: "What is the derivative of x^2?",
        answers: ["2x", "x", "2", "x^3"],
        correctAnswer: 1,
      },
      {
        question: "What is the quadratic formula?",
        answers: [
          "x = (-b ± √(b^2 - 4ac)) / 2a",
          "x = -b / 2a",
          "x = √(b^2 - 4ac) / 2a",
          "x = -b ± √(b^2 - 4ac)",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the sum of the interior angles of a triangle?",
        answers: ["180 degrees", "360 degrees", "90 degrees", "270 degrees"],
        correctAnswer: 1,
      },
      {
        question: "What is the area of a rectangle with length 8 units and width 5 units?",
        answers: ["40 square units", "13 square units", "26 square units", "48 square units"],
        correctAnswer: 1,
      },
      {
        question: "What is the value of the square root of 144?",
        answers: ["12", "14", "16", "10"],
        correctAnswer: 1,
      },
      {
        question: "What is the slope of the line y = 3x + 2?",
        answers: ["3", "2", "1", "0"],
        correctAnswer: 1,
      },
      {
        question: "What is the volume of a cube with side length 4 units?",
        answers: ["64 cubic units", "16 cubic units", "48 cubic units", "32 cubic units"],
        correctAnswer: 1,
      },
      {
        question: "What is the formula for the circumference of a circle?",
        answers: ["2πr", "πr^2", "πd", "r^2"],
        correctAnswer: 1,
      },
      {
        question: "What is the integral of 1/x?",
        answers: ["ln|x| + C", "x + C", "1/x^2 + C", "e^x + C"],
        correctAnswer: 1,
      },
      {
        question: "What is the sine of 90 degrees?",
        answers: ["1", "0", "-1", "√2"],
        correctAnswer: 1,
      },
      {
        question: "What is the formula for the area of a triangle?",
        answers: ["1/2 * base * height", "base * height", "base + height", "base * height * 2"],
        correctAnswer: 1,
      },
      {
        question: "What is the probability of rolling a 3 on a standard six-sided die?",
        answers: ["1/6", "1/2", "1/3", "1/4"],
        correctAnswer: 1,
      },
      {
        question: "What is the distance formula between two points (x1, y1) and (x2, y2)?",
        answers: ["√((x2 - x1)^2 + (y2 - y1)^2)", "x2 - x1 + y2 - y1", "(x2 - x1) + (y2 - y1)", "√((x1 + x2)^2 + (y1 + y2)^2)"],
        correctAnswer: 1,
      },
      {
        question: "What is the value of 5 factorial (5!)?",
        answers: ["120", "60", "24", "5"],
        correctAnswer: 1,
      },
      {
        question: "What is the sum of the first 10 positive integers?",
        answers: ["55", "45", "65", "50"],
        correctAnswer: 1,
      },
      {
        question: "What is the unit of power?",
        answers: ["Watt", "Joule", "Newton", "Pascal"],
        correctAnswer: 1,
      },
      {
        question: "Who proposed the theory of relativity?",
        answers: ["Albert Einstein", "Isaac Newton", "James Clerk Maxwell", "Niels Bohr"],
        correctAnswer: 1,
      },
      {
        question: "What is the principle of Archimedes used for?",
        answers: ["Buoyancy", "Electromagnetism", "Quantum mechanics", "Thermodynamics"],
        correctAnswer: 1,
      },
      {
        question: "What is the frequency of a wave with a period of 0.01 seconds?",
        answers: ["100 Hz", "10 Hz", "1 Hz", "0.1 Hz"],
        correctAnswer: 1,
      },
      {
        question: "What does the Doppler effect describe?",
        answers: ["Change in frequency of a wave due to relative motion", "Change in wave speed due to medium", "Change in wave direction due to diffraction", "Change in wave amplitude due to interference"],
        correctAnswer: 1,
      },
      {
        question: "What is the escape velocity of Earth?",
        answers: ["11.2 km/s", "9.8 km/s", "7.9 km/s", "15 km/s"],
        correctAnswer: 1,
      },
      {
        question: "What is the formula for calculating kinetic energy?",
        answers: ["1/2 mv^2", "mgh", "1/2 kx^2", "F*d"],
        correctAnswer: 1,
      },
      {
        question: "What does a voltmeter measure?",
        answers: ["Voltage", "Current", "Resistance", "Power"],
        correctAnswer: 1,
      },
      {
        question: "What is the SI unit of magnetic flux?",
        answers: ["Weber", "Tesla", "Henry", "Ampere"],
        correctAnswer: 1,
      },
      {
        question: "Who discovered the electron?",
        answers: ["J.J. Thomson", "Ernest Rutherford", "Niels Bohr", "James Chadwick"],
        correctAnswer: 1,
      },
      // Additional Chemistry questions
      {
        question: "What is the chemical formula for methane?",
        answers: ["CH4", "C2H6", "CO2", "CH3OH"],
        correctAnswer: 1,
      },
      {
        question: "Which acid is commonly found in vinegar?",
        answers: ["Acetic acid", "Citric acid", "Sulfuric acid", "Hydrochloric acid"],
        correctAnswer: 1,
      },
      {
        question: "What is the name of the process where a solid changes directly into a gas?",
        answers: ["Sublimation", "Condensation", "Evaporation", "Deposition"],
        correctAnswer: 1,
      },
      {
        question: "What type of reaction is 'Zn + H2SO4 -> ZnSO4 + H2'?",
        answers: ["Single displacement", "Double displacement", "Combination", "Decomposition"],
        correctAnswer: 1,
      },
      {
        question: "What is the most common isotope of hydrogen?",
        answers: ["Protium", "Deuterium", "Tritium", "Hydrogen-3"],
        correctAnswer: 1,
      },
      {
        question: "Which element is represented by the symbol 'Fe'?",
        answers: ["Iron", "Fluorine", "Francium", "Fermium"],
        correctAnswer: 1,
      },
      {
        question: "What is the term for the amount of heat required to raise the temperature of 1 gram of a substance by 1°C?",
        answers: ["Specific heat capacity", "Latent heat", "Thermal conductivity", "Heat of fusion"],
        correctAnswer: 1,
      },
      {
        question: "What is the primary component of natural gas?",
        answers: ["Methane", "Ethane", "Propane", "Butane"],
        correctAnswer: 1,
      },
      {
        question: "What is the name of the reaction that releases energy by breaking down large molecules?",
        answers: ["Catabolic reaction", "Anabolic reaction", "Endothermic reaction", "Exothermic reaction"],
        correctAnswer: 1,
      },
      {
        question: "What is the name of the organic compound with the general formula CnH2n+2?",
        answers: ["Alkane", "Alkene", "Alkyne", "Arene"],
        correctAnswer: 1,
      },
      // Additional Mathematics questions
      {
        question: "What is the value of sin(30°)?",
        answers: ["0.5", "√2/2", "1", "0"],
        correctAnswer: 1,
      },
      {
        question: "What is the formula for the surface area of a sphere?",
        answers: ["4πr^2", "2πr^2", "4/3πr^3", "πr^2"],
        correctAnswer: 1,
      },
      {
        question: "What is the value of 7^2?",
        answers: ["49", "56", "64", "42"],
        correctAnswer: 1,
      },
      {
        question: "What is the derivative of sin(x)?",
        answers: ["cos(x)", "-cos(x)", "-sin(x)", "sin(x)"],
        correctAnswer: 1,
      },
      {
        question: "What is the solution to the equation 2x + 3 = 7?",
        answers: ["2", "4", "5", "7"],
        correctAnswer: 1,
      },
      {
        question: "What is the integral of x with respect to x?",
        answers: ["x^2 / 2 + C", "x + C", "1/2 x^2 + C", "x^2 + C"],
        correctAnswer: 1,
      },
      {
        question: "What is the base of the natural logarithm?",
        answers: ["e", "10", "2", "π"],
        correctAnswer: 1,
      },
      {
        question: "What is the distance between points (1, 2) and (4, 6)?",
        answers: ["5", "7", "3", "4"],
        correctAnswer: 1,
      },
      {
        question: "What is the area of a triangle with a base of 10 units and a height of 6 units?",
        answers: ["30 square units", "60 square units", "20 square units", "12 square units"],
        correctAnswer: 1,
      },
      {
        question: "What is the value of log10(100)?",
        answers: ["2", "1", "10", "0"],
        correctAnswer: 1,
      },
      {
        question: "What is the formula for the perimeter of a rectangle?",
        answers: ["2(length + width)", "length * width", "length + width", "2(length * width)"],
        correctAnswer: 1,
      },
      {
        question: "What is the median of the following set of numbers: 2, 5, 7, 10, 12?",
        answers: ["7", "5", "10", "12"],
        correctAnswer: 1,
      },
      {
        question: "What is the value of 3^3?",
        answers: ["27", "9", "81", "6"],
        correctAnswer: 1,
      },
      {
        question: "What is the formula for the volume of a cylinder?",
        answers: ["πr^2h", "2πrh", "πd^2h", "πr^2"],
        correctAnswer: 1,
      },
      {
        question: "What is the value of cos(45°)?",
        answers: ["√2/2", "0.5", "1", "√3/2"],
        correctAnswer: 1,
      },
      {
        question: "What is the sum of the angles in a quadrilateral?",
        answers: ["360 degrees", "180 degrees", "90 degrees", "270 degrees"],
        correctAnswer: 1,
      },
    ],
  },
  reasoning: {
    id: "reasoning",
    title: "Reasoning",
    questions: [
      // Logical Reasoning
      {
        question: "If all roses are flowers and some flowers fade quickly, then some roses fade quickly. True or False?",
        answers: ["True", "False"],
        correctAnswer: 1,
      },
      {
        question: "Find the odd one out: 2, 3, 5, 7, 11, 13, 17, 20",
        answers: ["2", "3", "5", "20"],
        correctAnswer: 4,
      },
      {
        question: "If you rearrange the letters 'CIFAHTOS', you can form a name of a city. Which city is it?",
        answers: ["Chicago", "Houston", "Phoenix", "Boston"],
        correctAnswer: 2,
      },
      {
        question: "Which of the following is the next number in the sequence: 1, 4, 9, 16, 25, ?",
        answers: ["30", "36", "40", "45"],
        correctAnswer: 2,
      },
      {
        question: "If all cats are animals and some animals are not dogs, then which of the following statements is true?",
        answers: ["Some cats are not dogs", "All cats are dogs", "No cats are dogs", "Some animals are not cats"],
        correctAnswer: 1,
      },
      {
        question: "Which number logically replaces the question mark? 3, 9, 27, 81, ?",
        answers: ["162", "243", "324", "405"],
        correctAnswer: 2,
      },
      {
        question: "If a person is older than his brother and his brother is older than his sister, then the person is older than the sister. True or False?",
        answers: ["True", "False"],
        correctAnswer: 1,
      },
      {
        question: "What is the next number in the series: 2, 6, 12, 20, ?",
        answers: ["30", "28", "26", "24"],
        correctAnswer: 1,
      },
      {
        question: "Which of the following words is least like the others?",
        answers: ["Apple", "Banana", "Cherry", "Tomato"],
        correctAnswer: 4,
      },
      {
        question: "What comes next in the series: 2, 4, 8, 16, ?",
        answers: ["24", "32", "40", "48"],
        correctAnswer: 2,
      },
      // Verbal Reasoning
      {
        question: "If you have a clock showing 3:00 PM, what is the angle between the hour hand and the minute hand?",
        answers: ["90 degrees", "180 degrees", "120 degrees", "60 degrees"],
        correctAnswer: 1,
      },
      {
        question: "Which one of the following is not a synonym for 'happy'?",
        answers: ["Joyful", "Ecstatic", "Angry", "Elated"],
        correctAnswer: 3,
      },
      {
        question: "If 'SCHOOL' is coded as 'RBNGKN', what is the code for 'TEACHER'?",
        answers: ["SDZBDFQ", "RDBGDRQ", "SDBFDSQ", "QDBGDRQ"],
        correctAnswer: 1,
      },
      {
        question: "Which number should replace the question mark in the series: 7, 14, 28, ?, 112",
        answers: ["42", "56", "63", "70"],
        correctAnswer: 2,
      },
      {
        question: "In a certain code, 'PROBLEM' is written as 'QNOKDL'. How is 'SOLUTION' written in that code?",
        answers: ["RMPJUPM", "RMUJPM", "RLPJUM", "RLPJPN"],
        correctAnswer: 1,
      },
      {
        question: "If 6A = 48, then A = ?",
        answers: ["8", "7", "9", "6"],
        correctAnswer: 1,
      },
      {
        question: "Which of the following is the missing letter in the series: A, C, F, J, O, ?",
        answers: ["T", "Q", "S", "R"],
        correctAnswer: 1,
      },
      {
        question: "If 'CAT' is coded as 'CBU', what will be the code for 'DOG'?",
        answers: ["EHP", "DPH", "EJQ", "EPH"],
        correctAnswer: 4,
      },
      {
        question: "If 'HAND' is coded as 'GZMC', what is the code for 'FOOT'?",
        answers: ["EPPS", "EQQT", "GQQT", "GPPQ"],
        correctAnswer: 1,
      },
      {
        question: "In a certain code, 'MOVIE' is written as 'LPNUF'. How is 'BOOK' written in that code?",
        answers: ["ANNN", "BQQM", "BPPJ", "CQQM"],
        correctAnswer: 1,
      },
      // Numerical Reasoning
      {
        question: "What is 25% of 80?",
        answers: ["20", "25", "30", "35"],
        correctAnswer: 1,
      },
      {
        question: "If a car travels 60 miles in 1 hour, what is its speed in miles per minute?",
        answers: ["1 mile/min", "0.5 mile/min", "2 miles/min", "1.5 miles/min"],
        correctAnswer: 1,
      },
      {
        question: "If 3 pencils cost $2, how much will 12 pencils cost?",
        answers: ["$8", "$6", "$4", "$10"],
        correctAnswer: 1,
      },
      {
        question: "Solve for x: 4x - 7 = 13",
        answers: ["3", "5", "4", "6"],
        correctAnswer: 2,
      },
      {
        question: "If a shirt costs $40 and is on sale for 25% off, what is the sale price?",
        answers: ["$30", "$32", "$25", "$35"],
        correctAnswer: 4,
      },
      {
        question: "What is the value of (3^2 + 4^2)?",
        answers: ["25", "29", "16", "19"],
        correctAnswer: 1,
      },
      {
        question: "How many minutes are there in 3 hours and 45 minutes?",
        answers: ["225", "180", "240", "200"],
        correctAnswer: 1,
      },
      {
        question: "A shopkeeper buys a watch for $50 and sells it for $65. What is the profit percentage?",
        answers: ["25%", "30%", "20%", "15%"],
        correctAnswer: 1,
      },
      {
        question: "If the ratio of cats to dogs is 2:3 and there are 10 cats, how many dogs are there?",
        answers: ["15", "20", "25", "12"],
        correctAnswer: 1,
      },
      {
        question: "Solve for y: 3y + 4 = 19",
        answers: ["5", "6", "7", "4"],
        correctAnswer: 1,
      },
      // Abstract Reasoning
      {
        question: "What is the next number in the sequence: 1, 4, 9, 16, 25, ?",
        answers: ["30", "36", "42", "49"],
        correctAnswer: 2,
      },
      {
        question: "What is the missing term in the series: 2, 5, 10, 17, ?",
        answers: ["26", "24", "28", "30"],
        correctAnswer: 1,
      },
      {
        question: "Which shape completes the pattern: Circle, Triangle, Circle, Square, Circle, ?",
        answers: ["Triangle", "Circle", "Square", "Rectangle"],
        correctAnswer: 1,
      },
      {
        question: "What is the next term in the sequence: 2, 6, 12, 20, 30, ?",
        answers: ["40", "42", "44", "46"],
        correctAnswer: 2,
      },
      {
        question: "If 'ABCD' is coded as 'BCDE', what is 'EFGH' coded as?",
        answers: ["FGHI", "DEFG", "EGHI", "FGHJ"],
        correctAnswer: 1,
      },
      {
        question: "Which number does not fit in the series: 3, 9, 18, 27, 36, 45, 54",
        answers: ["18", "27", "36", "45"],
        correctAnswer: 1,
      },
      {
        question: "If two pencils cost $1.50, how much will 8 pencils cost?",
        answers: ["$6.00", "$7.50", "$8.00", "$9.00"],
        correctAnswer: 1,
      },
      {
        question: "A bus travels 60 miles in 1 hour. How far will it travel in 5 hours at the same speed?",
        answers: ["300 miles", "240 miles", "360 miles", "400 miles"],
        correctAnswer: 3,
      },
      {
        question: "Which number should replace the question mark? 7, 14, 28, 56, ?",
        answers: ["70", "84", "112", "128"],
        correctAnswer: 2,
      },
      {
        question: "In a certain code, 'BEAT' is written as 'CFBU'. How is 'FIRE' written in that code?",
        answers: ["GJTF", "GJUF", "HJSF", "HJTF"],
        correctAnswer: 1,
      },
      {
        question: "Which of the following is the odd one out?",
        answers: ["Plane", "Boat", "Train", "Car"],
        correctAnswer: 1,
      },
      {
        question: "If 'PAPER' is coded as 'QBPFS', what is the code for 'PENCIL'?",
        answers: ["QFDMJ", "QFDMJ", "QFELJ", "QGDNJ"],
        correctAnswer: 2,
      },
      {
        question: "What is the next number in the series: 5, 11, 17, 23, ?",
        answers: ["29", "31", "35", "37"],
        correctAnswer: 2,
      },
      {
        question: "If today is Monday, what day will it be 40 days from now?",
        answers: ["Wednesday", "Thursday", "Tuesday", "Monday"],
        correctAnswer: 4,
      },
      {
        question: "Find the missing term in the series: 5, 10, 20, 40, ?",
        answers: ["60", "80", "90", "100"],
        correctAnswer: 2,
      },
      {
        question: "What is the odd one out in the following list?",
        answers: ["Egg", "Milk", "Cheese", "Butter"],
        correctAnswer: 1,
      },
      {
        question: "Which number logically replaces the question mark? 2, 5, 10, 17, ?",
        answers: ["26", "30", "32", "35"],
        correctAnswer: 1,
      },
      {
        question: "If 'JUMP' is coded as 'KVPQ', what is the code for 'FALL'?",
        answers: ["GBMM", "GBMK", "GCNN", "FBMM"],
        correctAnswer: 1,
      },
      {
        question: "Which of the following words is not related to the others?",
        answers: ["Book", "Magazine", "Library", "Novel"],
        correctAnswer: 3,
      },
      {
        question: "What comes next in the sequence: 3, 6, 12, 24, ?",
        answers: ["36", "48", "60", "72"],
        correctAnswer: 2,
      },
      {
        question: "If 'KITE' is coded as 'LJUF', what is 'FLY' coded as?",
        answers: ["GMZ", "GMY", "GNY", "GNZ"],
        correctAnswer: 1,
      },
      {
        question: "Which letter comes next in the series: X, V, T, R, ?",
        answers: ["P", "Q", "S", "U"],
        correctAnswer: 1,
      },
      {
        question: "Find the missing term: 3, 9, 27, ?, 243",
        answers: ["81", "72", "90", "96"],
        correctAnswer: 1,
      },
      {
        question: "What number should replace the question mark? 5, 10, 15, 20, ?",
        answers: ["22", "25", "30", "35"],
        correctAnswer: 2,
      },
      {
        question: "In a certain code, 'BEAR' is coded as 'CFBS'. What is the code for 'MOUSE'?",
        answers: ["NPVTF", "NPTUF", "NPUVF", "OQVTG"],
        correctAnswer: 1,
      },
      {
        question: "Which one of the following is the odd one out?",
        answers: ["Pencil", "Eraser", "Ruler", "Notebook", "Calculator"],
        correctAnswer: 5,
      },
      {
        question: "What is the next term in the sequence: 1, 4, 9, 16, 25, ?",
        answers: ["30", "36", "42", "49"],
        correctAnswer: 2,
      },
    ],
  },
  // Add more subjects as needed
};

let currentSubject = null;
let currentQuestion = 0;
let score = 0;
let timeLimit = 30 * 60; // 30 minutes in seconds
let timerInterval = null;

const questionContainer = document.getElementById("question-container");
const feedbackContainer = document.getElementById("feedback-container");
const scoreDisplay = document.getElementById("score");
const percentageDisplay = document.getElementById("percentage");
const resultContainer = document.getElementById("result-container");
const nextButton = document.getElementById("next-btn");
const previousButton = document.getElementById("pre-btn");
const homeButton = document.getElementById("home-btn"); // New: Grab the home button element
const timerDisplay = document.getElementById("timer");

function startQuiz(subject) {
  currentSubject = subjects[subject];
  currentQuestion = 0;
  score = 0;
  timeLimit = 30 * 60; // Reset time limit to 30 minutes
  startTimer(); // Start the timer when quiz starts
  showQuiz();

  // Update the URL with the subject
  const url = new URL(window.location);
  url.searchParams.set("subject", subject);
  window.history.pushState({}, "", url);
}
document.addEventListener("DOMContentLoaded", function () {
  const startButtons = document.querySelectorAll(".btn-start"); // Select by ID
  startButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      // Get the subject key from the data-subject attribute
      const subject = button.getAttribute("data-subject");
      startQuiz(subject);
    });
  });
}); // Replace "htmlcssjs" with the actual subject key

// Read the subject from the URL
const urlParams = new URLSearchParams(window.location.search);
const subject = urlParams.get("subject");
if (subject) {
  startQuiz(subject);
}

//Function to show the quiz when startQuiz is called
function showQuiz() {
  document.getElementById("quiz-container").style.display = "block";
  document.querySelector(".assessment-grid").style.display = "none";
  nextButton.style.display = "block";
  resultContainer.style.display = "none";
  homeButton.style.display = "none";
  // homeButton.style.display = "block"; // Display the home button

  loadQuestion();
}

//Function for uploading questions on showQuiz page
function loadQuestion() {
  const question = currentSubject.questions[currentQuestion];
  questionContainer.innerHTML = `
      <h2>${currentSubject.title} - Question ${currentQuestion + 1}</h2>
      <p>${question.question}</p>
      <ul>
          ${question.answers
            .map(
              (answer, index) => `
              <li>
                  <label>
                      <input type="radio" name="answer" value="${index}">
                      ${answer}
                  </label>
              </li>
          `
            )
            .join("")}
      </ul>
  `;
}

document.addEventListener("DOMContentLoaded", function () {
  if (previousButton) {
    previousButton.addEventListener("click", function () {
      previousQuestion();
    });
  } else {
    console.error("Element with ID 'pre-btn' not found.");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const nextButton = document.getElementById("next-btn");
  if (nextButton) {
    nextButton.addEventListener("click", nextQuestion);
  }
});

//Function to get in the new questions page
function nextQuestion() {
  // Check if a radio button is selected
  const selectedAnswer = document.querySelector('input[name="answer"]:checked');
  if (!selectedAnswer) {
    alert("Please select an answer.");
    return;
  }

  // Get the index of the selected answer
  const answerIndex = parseInt(selectedAnswer.value, 10);

  // Check if the answer is correct and update score
  if (answerIndex === currentSubject.questions[currentQuestion].correctAnswer) {
    score++;
  }

  // Move to the next question
  currentQuestion++;

  // Check if there are more questions to load
  if (currentQuestion < currentSubject.questions.length) {
    loadQuestion(); // Load the next question
  } else {
    showResult(); // Show the quiz result if no more questions
  }
}

//Function for going to the previous question page
function previousQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    loadQuestion();
  } else {
    alert("You are at the first question.");
  }
}

//Function for Showing the result
function showResult() {
  questionContainer.style.display = "none";
 
  nextButton.style.display = "none";
  resultContainer.style.display = "block";
  homeButton.style.display = "none"; // Hide the home button on the result screen

  stopTimer(); // Stop the timer when quiz ends

  const percentage = Math.round(
    (score / currentSubject.questions.length) * 100
  );
  scoreDisplay.textContent = score;
  percentageDisplay.textContent = percentage;
  previousButton.style.display = "none";
  // Creating a link for going into home page
  homeButton.style.display = "block";
}

// Function to start the timer
function startTimer() {
  timerInterval = setInterval(() => {
    timeLimit--;
    updateTimerDisplay();
    if (timeLimit <= 0) {
      stopTimer();
      alert("Time's up! Quiz session ended.");
      showResult();
    }
  }, 1000); // Update timer every second
}

// Function to stop the timer
function stopTimer() {
  clearInterval(timerInterval);
}

// Function to update the timer display
function updateTimerDisplay() {
  const minutes = Math.floor(timeLimit / 60);
  const seconds = timeLimit % 60;
  timerDisplay.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

// Home
document.addEventListener("DOMContentLoaded", function () {
  const nextButton = document.getElementById("home-btn");
  if (nextButton) {
    nextButton.addEventListener("click", goHome);
  }
});

// Function to go back to the home page
function goHome() {
  document.getElementById("quiz-container").style.display = "none";
  document.querySelector(".assessment-grid").style.display = "grid";
  resultContainer.style.display = "none";
  stopTimer(); // Stop the timer when going back to the home page
}

//Function for adding assessment data to the firebase
async function addQuizzesToFirestore() {
  try {
    // Iterate over the quizzes (values) in the subjects object
    for (let quiz of Object.values(subjects)) {
      // Check if the quiz is defined and has necessary properties
      if (quiz && quiz.id) {
        // Construct the document reference with quiz.html.id
        const docRef = doc(db, "assessment", quiz.id);

        // Set the document with title and questions from the quiz
        await setDoc(docRef, {
          title: quiz.title,
          questions: quiz.questions,
        });

        // Log success message
        console.log(
          `Quiz with ID ${quiz.id} added to 'assessment' collection in Firestore.`
        );
      } else {
        // Throw an error if html.id is not defined for the quiz
        throw new Error(`HTML quiz ID is undefined for ${quiz}`);
      }
    }

    // Log success message after all documents are added
    console.log(
      "All quizzes added to 'assessment' collection in Firestore successfully!"
    );
  } catch (error) {
    // Log any errors that occur during the process
    console.error("Error adding quizzes to Firestore: ", error);
  }
}

// Call the function to add quizzes to Firestore
addQuizzesToFirestore();
