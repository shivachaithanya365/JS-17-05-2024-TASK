//easy level

// 1. Create a function that takes two numbers as arguments and returns their sum.

let num1 = 1;                   //Normal
let num2 = 2;
console.log("sum" + "=" + (num1 + num2))  //output ---> sum=3

function sum(a, b) {           //named function
    return a + b;
}
console.log(sum(1, 2));                  //output ---> 3

var sum = function (a, b) {    //Anonymous function
    return a + b;
}
console.log(sum(1, 3));                 //output ---> 4

var sum = (a, b) => {          //arrow function
    return a + b;
}
console.log(sum(1, 4));                 //output ---> 5

(function (a, b) {             // Immediately Invoked Function Expression (IIFE)
    console.log(a + b);
})(1, 5);                               //output ---> 6

// 2. Write a function that takes an integer minutes and converts it to seconds.

var minutes = 20;                       //Normal
var seconds = minutes * 60;
console.log("seconds = " + seconds);    //output---> seconds = 1200

function sec(minutes) {                 //named function
    return minutes * 60;
}
console.log(sec(20));                  //output---> 1200

let mintosec = function (minutes) {     //Anonymous function
    return minutes * 60;
}
console.log(mintosec(20));              //output---> 1200

let mintosec1 = (minutes) => {           //Arrow function
    return minutes * 60;
}
console.log(mintosec(20));               //output---> 1200

(function sec(minutes) {                 // Immediately Invoked Function Expression (IIFE)
    console.log(minutes * 60);
})
    (20)                                 //output---> 1200

// 3. Create a function that takes a number as an argument, increments the number by +1 
//  and returns the result.

var num = 5;                  //normal
console.log(++num)                     //output---> 6

function numb(a) {             //named function
    return a + 1;
}
console.log(numb(5));                  //output---> 6

var num = function (a) {      //Anonymous function
    return a + 1;
}
console.log(numb(5));                  //output---> 6

var num = (a) => {            //Arrow function
    return a + 1;
}
console.log(numb(5));                  //output---> 6

(function numb(a) {            // Immediately Invoked Function Expression (IIFE)
    console.log(a + 1);
})
    (5)                                //output---> 6

// 4.Create a function that takes the age in years and returns the age in days.

let ageinyears = 20;                    //normal
let ageindays = ageinyears * 365;
console.log(ageindays);                     //output---> 7300

let age = 20;
console.log("age" + "=" + age * 365);        //output---> age = 7300

function agetodays(age) {               //named function
    return age * 365;
}
console.log(agetodays(20));                     //output---> 7300

var conversion = function (age) {       //Anonymous function
    return age * 365;
}
console.log(conversion(20));                     //output---> 7300

var conversion = (age) => {             //Arrow function
    return age * 365;
}
console.log(conversion(20));                     //output---> 7300

(function agetodays(age) {              // Immediately Invoked Function Expression (IIFE)
    console.log(age * 365);
})
    (20);                     //output---> 6

// 5. Create a function that takes voltage and current and returns the calculated power.

let volt = 20;                                     //Normal
let current = 5;
let power = volt * current;
console.log(power + " " + "watts");                    //output---> 100 watts

function powerconvert(volt, current) {              //named function
    let power = volt * current;
    return power + " " + "watts";
}
console.log(powerconvert(20, 5));                 //output---> 100 watts

function powerconvert(volt, current) {              //named function
    return volt * current + " " + "watts";
}
console.log(powerconvert(20, 5));                 //output---> 100 watts

var powerconvert = function (volt, current) {       //Anonymous function
    return volt * current + " " + "watts";
}
console.log(powerconvert(20, 5));                  //output---> 100 watts

var powerconvert = (volt, current) => {             //Arrow function
    return volt * current + " " + "watts";
}
console.log(powerconvert(20, 5));                  //output---> 100 watts

(function powerconvert(volt, current) {             // Immediately Invoked Function Expression (IIFE)
    console.log(volt * current + " " + "watts");
})
    (20, 5)                                         //output---> 100 watts

// 6.Write a function that returns the string "something" joined with a space " " and the given argument a.

let string = "something"                          //Normal
let arg = "argument"
console.log(string + " " + arg)                   // output--->something argument

function stringjoined(arg) {                      //named function
    return "something" + "  " + arg;
}
console.log(stringjoined("argument"));            // output--->something  argument

var stringjoined = function (arg) {               //Anonymous function
    return "something" + "  " + arg;
}
console.log(stringjoined("argument"));            // output--->something  argument

var stringjoined = (arg) => {                     //Arrow function
    return "something" + "  " + arg;
}
console.log(stringjoined("argument"));            // output--->something  argument

(function (arg) {                                 //Immediately Invoked Function Expression (IIFE)
    console.log("something" + "  " + arg);
})
    ("argument")                                 // output--->something  argument

// 7.Create a function that takes two arguments. Both arguments are integers, a and b. 
// Return true if one of them is 10 or if their sum is 10.

function truecheck(a, b) {
    if (a == 10 || b == 10 || (a + b) == 10) {      //named function
        return true;
    }
    else {
        return false;
    }
}
console.log(truecheck(10, 5));                // output--->true

var truecheck = function (a, b) {                   //Anonymous function
    if (a == 10 || b == 10 || (a + b) == 10) {
        return true;
    }
    else {
        return false;
    }
}
console.log(truecheck(10, 5));                // output--->true

var truecheck = (a, b) => {                          //Arrow function
    if (a == 10 || b == 10 || (a + b) == 10) {
        return true;
    }
    else {
        return false;
    }
}
console.log(truecheck(10, 5));                // output--->true

(function (a, b) {                                    //Immediately Invoked Function Expression (IIFE)
    if (a == 10 || b == 10 || (a + b) == 10) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}
)
    (10, 5)                                        // output--->true

// 8.Create a function that takes two strings as arguments and returns either true or false
// depending on whether the total number of characters in the first string is equal 
// to the total number of characters in the second string.

function boolean(a, b) {                    //named function
    if (a.length === b.length) {
        return true;
    }
    else {
        return false;
    }
}
console.log(boolean("shiva", "hiee"));            // output--->false

var boolean = function (a, b) {            //Anonymous function
    if (a.length === b.length) {
        return true;
    }
    else {
        return false;
    }
}
console.log(boolean("shiva", "hieee"));           // output--->true

var boolean = (a, b) => {                  //Arrow function
    if (a.length === b.length) {
        return true;
    }
    else {
        return false;
    }
}
console.log(boolean("shiva", "hieee"));           // output--->true

(function (a, b) {                         // Immediately Invoked Function Expression (IIFE)
    if (a.length === b.length) {
        console.log(true);
    }
    else {
        console.log(false);
    }
})
    ("shiva", "hieee")                             // output--->true

// 9. Create a function that takes a name and returns a greeting in the form of a string.
// Don't use a normal function, use an arrow function.

var greetings = (a) => {                  //Arrow function
    return "hello" + a;
}
console.log(greetings(" " + "shiva"));         // output--->hello shiva

function greetings(a) {                   //Named function
    return "hello" + a;
}
console.log(greetings(" " + "shiva"));         // output--->hello shiva

var greetings = function (a) {            //Anonymous function
    return "hello" + a;
}
console.log(greetings(" " + "shiva"));         // output--->hello shiva

(function (a) {                           // Immediately Invoked Function Expression (IIFE)
    console.log("hello" + a);
})
    (" " + "shiva")                            // output--->hello shiva

// 10. Create a function that takes an array of 10 numbers (between 0 and 9) and returns a 
// string of those numbers formatted as a phone number (e.g. (555) 555-5555).

function number(a) {                    //Named function
    if (a.length === 10) {
        return "(" + a[0] + a[1] + a[2] + ") " + a[3] + a[4] + a[5] + "-" + a[6] + a[7] + a[8] + a[9];
    }
    else {
        return "Invalid phone number";
    }
}
console.log(number([7, 6, 8, 0, 9, 5, 2, 9, 7, 6]));  // output--->(768) 095-2976

var phonemunber = function (a) {         //Anonymous function
    if (a.length === 10) {
        return "(" + a[0] + a[1] + a[2] + ") " + a[3] + a[4] + a[5] + "-" + a[6] + a[7] + a[8] + a[9];
    }
    else {
        return "Invalid phone number";
    }
}
console.log(number([7, 6, 8, 0, 9, 5, 2, 9, 7, 6]));  // output--->(768) 095-2976

var phonemunber = (a) => {              //Arrow function
    if (a.length === 10) {
        return "(" + a[0] + a[1] + a[2] + ") " + a[3] + a[4] + a[5] + "-" + a[6] + a[7] + a[8] + a[9];
    }
    else {
        return "Invalid phone number";
    }
}
console.log(number([7, 6, 8, 0, 9, 5, 2, 9, 7, 6]));  // output--->(768) 095-2976

(function (a) {                          // Immediately Invoked Function Expression (IIFE)
    if (a.length === 10) {
        console.log("(" + a[0] + a[1] + a[2] + ") " + a[3] + a[4] + a[5] + "-" + a[6] + a[7] + a[8] + a[9]);
    }
    else {
        console.log("INVALID NUMBER");
    }
})
    ([7, 6, 8, 0, 9, 5, 2, 9, 7, 6])                       // output--->(768) 095-2976

// 11. Create Function that will take one parameter and return type of the data.
// Input: 500Output: Integer,Input: Coding,Output: String

function typeofdata(value) {
    return typeof value;
}
console.log(typeofdata(500));      // Output: number
console.log(typeofdata("coding")); // Output: string

function dataType(value) {
    if (typeof value == "number" && value % 1 == 0) {
        return "Integer";
    } else {
        return typeof value;
    }
}

console.log(dataType(500));        // Output: Integer
console.log(dataType("Coding"));   // Output: string
console.log(dataType(3.14));       // Output: number

// 12. Program to find greatest of three numbers(using ternery operator).
// Input: 4,8,2 then Output: 8 is gretest

let number1 = 4;
let number2 = 8;
let number3 = 2;

let greatest = number1 > number2 ? (number1 > number3 ? number1 : number3) : (number2 > number3 ? number2 : number3);

console.log(greatest + " is greatest");