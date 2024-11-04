"use strict";
// type aliases means we can create our own types , basically we can give a name to existing type
// interface userIdTwo = stringOrNumber;  // its the diff between type and interface , cant used type alias here for interface
// Literal types is let you to specify the exact value a variable can have
let myName;
let myAge;
myName = "Sumit";
myAge = 21;
// ++++ function ++++
function sum(a, b) {
    return a + b;
}
function logMessage(message) {
    // so void is a return type of function which means it return nothing
    console.log(message);
}
logMessage("Hello World !");
logMessage(sum(2, 2));
logMessage(sum(2, "2"));
let multiply = function (a, b) {
    console.log(a * b);
};
multiply(2, 2);
//  +++ optional parameter +++
const addFull = (a, b, c) => {
    // we need to add type guard , It know what kind of value is assigned to a variable
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
// default parameter
const sumFull = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMessage(addFull(2, 2, 2));
logMessage(addFull(2, 2));
logMessage(sumFull(2, 2, 4));
logMessage(sumFull(undefined, 4));
//  +++ rest parameter +++
function total(a, ...numbers) {
    return a + numbers.reduce((prev, curr) => prev + curr, 0);
}
logMessage(total(10, 2, 3, 4));
// Never return type of a function
const createErrorMsg = (errorMsg) => {
    throw new Error(errorMsg);
};
let infinite = () => {
    // so whenever we see an never return type we might need to make sure our function throws error or correct it
    let i = 1;
    while (true) {
        i++;
        if (i > 50)
            break;
    }
};
// custom type guard
const isString = (value) => {
    return typeof value === "string" ? true : false;
};
const numberOrString = (value) => {
    if (isString(value))
        return "string";
    if (typeof value === "number")
        return "number";
    return createErrorMsg("This should never happen !");
};
let userId = 123;
let userIdTwo = "neeraj";
let userIdThree = true;
// Question 2
let statusTwo;
statusTwo = "success";
statusTwo = "failure";
// Question 3
// Write a function greet that accepts a name (string) and an optional message (string). If message is provided, it should return "message, name!", otherwise "Hello, name!".
const greet = (name, message) => {
    if (message) {
        return message + "," + name;
    }
    else {
        return "Hello," + name;
    }
};
console.log(greet("Neeraj"));
console.log(greet("Neeraj", "You can do this!"));
//  Question 4
// Create a function calculateTotal that accepts price (number), tax (number with default value 0.1), and discount (number with default value 0). The function should return the final price after applying tax and subtracting discount.
function calculateTotal(price, tax = 0.1, discount = 0) {
    return price + price * tax - discount;
}
console.log(calculateTotal(100, 0.4, 10)); // 130
console.log(calculateTotal(100, undefined, 10)); // 100
// Question 5
// Write a function joinStrings that accepts a separator (string) and any number of strings, and returns them joined using the separator.
function joinString(separator, ...strings) {
    return strings.join(separator);
}
console.log(joinString(",", "urahara", "mayuri", "kisuke", "ichigo"));
// Question 6
// Create a function fail that accepts a message (string) and throws an error with that message. Specify the correct return type.
// const fail = (msg:string):never => {
//  throw new Error(msg);
// }
// fail("Something went wrong");
// Question 7
// Write a custom type guard function isNumber that checks if a value is a number, and use it in another function logValue that accepts a parameter of type string | number.
const logValue = (value) => {
    if (isNumber(value)) {
        console.log("value was a no = " + value);
    }
    else {
        console.log("value was a string = " + value);
    }
};
const isNumber = (value) => {
    if (typeof value === "number") {
        return true;
    }
};
logValue(12);
logValue("Neeraj");
let divide = (a, b) => {
    return a / b;
};
console.log(divide(10, 2));
function combine(a, b) {
    return a + b;
}
console.log(combine(2, 2));
function combineTwo(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    return `${a} ${b}`;
}
console.log(combineTwo(2, 8));
console.log(combineTwo("neeraj", "kumar"));
// Question 9
// How can you assert that someValue is a string and get its length?
let someValue = "this is a string";
let someLength = someValue.length;
logMessage(someLength);
// Question 10
function processValue(value) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    else if (typeof value === "number") {
        console.log(value);
    }
    else {
        console.log("value is not a string or number");
    }
}
processValue("hello");
processValue(true);
processValue(21);
// Question 11
function throwNewError(msg) {
    throw new Error(msg);
}
function safeParseInt(value) {
    if (typeof value === "number") {
        return Math.floor(value);
    }
    else if (typeof value === "string") {
        const parsed = parseInt(value, 10);
        if (!isNaN(parsed)) {
            return parsed;
        }
        else {
            return throwNewError("Cannot parse string to number");
        }
    }
    else {
        return throwNewError("Invalid type");
    }
}
console.log(safeParseInt("42")); // Output: 42
console.log(safeParseInt(42.7)); // Output: 42
console.log(safeParseInt("abc")); // Throws Error: "Cannot parse string to number"
