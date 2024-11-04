// type aliases means we can create our own types , basically we can give a name to existing type

type stringOrNumber = string | number;
type stringOrNumberArray = (string | number)[];
type information = {
  name?: string;
  age: number;
  isWorking: boolean;
  albums: stringOrNumberArray;
};

type userId = stringOrNumber; // look we used type alias here , basically our own type

// interface userIdTwo = stringOrNumber;  // its the diff between type and interface , cant used type alias here for interface

// Literal types is let you to specify the exact value a variable can have
let myName: "Neeraj" | "Neeraj bhatt" | "Neeraj pahadi raja";
let myAge: 23 | 24 | 25;
myName = "Sumit";
myAge = 21;

// ++++ function ++++
function sum(a: number, b: number): number {
  return a + b;
}

function logMessage(message: any): void {
  // so void is a return type of function which means it return nothing
  console.log(message);
}
logMessage("Hello World !");
logMessage(sum(2, 2));
logMessage(sum(2, "2"));

// type mathfunction = (a:number , b:number) => void;
// ++++++++++++++++++ or ++++++++++++++++++++++
interface mathfunction {
  (a: number, b: number): void;
}

let multiply: mathfunction = function (a, b) {
  console.log(a * b);
};

multiply(2, 2);

//  +++ optional parameter +++

const addFull = (a: number, b: number, c?: number): number => {
  // we need to add type guard , It know what kind of value is assigned to a variable
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};

// default parameter
const sumFull = (a: number = 10, b: number, c: number = 2): number => {
  return a + b + c;
};

logMessage(addFull(2, 2, 2));
logMessage(addFull(2, 2));
logMessage(sumFull(2, 2, 4));
logMessage(sumFull(undefined, 4));

//  +++ rest parameter +++

function total(a: number, ...numbers: number[]): number {
  return a + numbers.reduce((prev, curr) => prev + curr, 0);
}

logMessage(total(10, 2, 3, 4));

// Never return type of a function

const createErrorMsg = (errorMsg: string): never => {
  throw new Error(errorMsg);
};

let infinite = () => {
  // so whenever we see an never return type we might need to make sure our function throws error or correct it
  let i: number = 1;
  while (true) {
    i++;
    if (i > 50) break;
  }
};

// custom type guard
const isString = (value: any): boolean => {
  return typeof value === "string" ? true : false;
};

const numberOrString = (value: string | number): string => {
  if (isString(value)) return "string";
  if (typeof value === "number") return "number";
  return createErrorMsg("This should never happen !");
};

//  Question 1
// Define a type alias UserID that can be either a string or a number, and declare a variable userId of type UserID.

type UserId = string | number;

let userId: UserId = 123;
let userIdTwo: UserId = "neeraj";
let userIdThree: UserId = true;

// Question 2
let statusTwo: "success" | "error" | "pending";
statusTwo = "success";
statusTwo = "failure";

// Question 3
// Write a function greet that accepts a name (string) and an optional message (string). If message is provided, it should return "message, name!", otherwise "Hello, name!".
const greet = (name: string, message?: string): string => {
  if (message) {
    return message + "," + name;
  } else {
    return "Hello," + name;
  }
};

console.log(greet("Neeraj"));
console.log(greet("Neeraj", "You can do this!"));

//  Question 4
// Create a function calculateTotal that accepts price (number), tax (number with default value 0.1), and discount (number with default value 0). The function should return the final price after applying tax and subtracting discount.

function calculateTotal(
  price: number,
  tax: number = 0.1,
  discount: number = 0
): number {
  return price + price * tax - discount;
}

console.log(calculateTotal(100, 0.4, 10)); // 130
console.log(calculateTotal(100, undefined, 10)); // 100

// Question 5
// Write a function joinStrings that accepts a separator (string) and any number of strings, and returns them joined using the separator.

function joinString(separator: string, ...strings: string[]) {
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
const logValue = (value: string | number) => {
  if (isNumber(value)) {
    console.log("value was a no = " + value);
  } else {
    console.log("value was a string = " + value);
  }
};

const isNumber = (value: any) => {
  if (typeof value === "number") {
    return true;
  }
};

logValue(12);
logValue("Neeraj");

// Question 8
// Create a type alias MathFunction for a function that accepts two numbers and returns a number. Then, write a function divide that matches this type. /// again
type mathfunctions = (a: number, b: number) => number;
let divide: mathfunction = (a, b) => {
  return a / b;
};

console.log(divide(10, 2));

function combine(a: string, b: string): string;
function combine(a: number, b: number): number;
function combine(a: any, b: any) {
  return a + b;
}

console.log(combine(2, 2));

function combineTwo(a: string | number, b: string | number): string | number {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  return `${a} ${b}`;
}

console.log(combineTwo(2, 8));
console.log(combineTwo("neeraj", "kumar"));

// Question 9
// How can you assert that someValue is a string and get its length?

let someValue: any = "this is a string";
let someLength: number = (someValue as string).length;
logMessage(someLength);

// Question 10
function processValue(value: unknown) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (typeof value === "number") {
    console.log(value);
  } else {
    console.log("value is not a string or number");
  }
}

processValue("hello");
processValue(true);
processValue(21);

// Question 11

function throwNewError(msg: string): never {
  throw new Error(msg);
}

function safeParseInt(value: stringOrNumber): number {
  if (typeof value === "number") {
    return Math.floor(value);
  } else if (typeof value === "string") {
    const parsed = parseInt(value, 10);
    if (!isNaN(parsed)) {
      return parsed;
    } else {
      return throwNewError("Cannot parse string to number");
    }
  } else {
    return throwNewError("Invalid type");
  }
}
console.log(safeParseInt("42")); // Output: 42
console.log(safeParseInt(42.7)); // Output: 42
console.log(safeParseInt("abc")); // Throws Error: "Cannot parse string to number"