// ++++ Array ++++

let strinArr = ["one", "two", "three"];
let guitars = ["strat", "les paul", 5150]; //union type it has
let mixedData = ["EVH", 1984, true]; // union type it has

strinArr[0] = 21; //can be string only
strinArr.push("bhatt"); //can be string only

guitars[0] = true; //can be string and number only
guitars.unshift("jim"); //can be string and number only

mixedData[0] = false; //can be string , number , boolean only

guitars = strinArr; // this will not throw any compile error as guitars is of union type so can be string and number both
strinArr = guitars; // this will throw compile error as strinArr is of string type only

let test = [];
let testTwo: string[] = [];
testTwo.push("correct");
testTwo.push(12); // this will throw compile error as testTwo is of string type only

let testThree: (string | number)[] = [];
testThree.push("correct"); // this will not throw any compile error as testThree is of union type so can be string and number both
testThree.push(true); // this will throw compile error as testThree is of union type so can be string and number only

// ++++ Tuple +++
// Tuple is a more strict version of array as  it has a fixed length and each element has a specific type

let MyTuple: [string, boolean, number] = ["hello", true, 12];

let mixed = ["john", false, 22];

mixed = MyTuple;
MyTuple = mixed;
MyTuple[3] = 12;

// ++++ Object ++++

let myObj: object;
myObj = []; // Array is an obj in js do its valid
myObj = {}; // Object is an obj in js do its valid
myObj = mixed;

const userInfo = {
  name: "Neeraj",
  age: 22,
  isWorking: true,
};

userInfo.name = 21; // this will throw compile error as name is of type string

// how to define type for obj in typescript

// type info = {
//     name : string,
//     age : number,
//     isWorking : boolean,
//     isMarried? : boolean,
// }

// we can also use  interface to define type and everthing will be the same
interface info {
  name?: string;
  age: number;
  isWorking: boolean;
  isMarried?: boolean;
}

let userInfo2: info = {
  name: "Sumit",
  age: 22,
  isWorking: false,
};

let userInfo3: info = {
  name: "Surya",
  age: 22,
  isWorking: true,
  isMarried: false,
};

let userInfo4: info = {
  name: "Raghav", // error saying age is missing
  isWorking: true,
};

let userInfo5 = {
  name: "Raghav",
  isWorking: true,
};

let userInfo6: info = {
  name: "Raghav",
  isWorking: true,
  age: 22,
};

userInfo2 = userInfo3;

userInfo2 = userInfo5;

userInfo3 = userInfo6;

// can also declare object type like this
let book: { name: string; price: number; isAvailable: boolean } = {
  name: "The Alchemist",
  price: 200,
  isAvailable: true,
};

function printName(userInfo: info) {
  return userInfo.name.toUpperCase();
}

console.log(printName(userInfo6));

// ++++ Enums ++++
// Unlike most typescript features, Enums are not a type-level addition to javascript but something added to the language and runtime

enum positiningOfUser {
  First,
  second,
  third,
  fourth,
  Fifth,
}

console.log(positiningOfUser.First); // =  0
console.log(positiningOfUser.second); // = 1

// Question 1
// what is the purpose of enum in typescript , and use case of enum in typescript??

// Question 2
// Write a TypeScript array that can contain strings and numbers, and add two strings and two numbers to it.

let queTwoArray: (string | number)[] = [];
queTwoArray.push("oneString");
queTwoArray.push("twoString");
queTwoArray.push(1);
queTwoArray.push(2);
queTwoArray.push(true); // this will throw compile error as queTwoArray is of union type so can be string and number both

//  Question 3
// Define a tuple named person that contains a string, a number, and a boolean, in that order. Assign appropriate values to it.

let person: [string, number, boolean] = ["GT", 650, true];

// How can you access the number value and assign it to a variable?

const cc = person[1];

//  Question 4
// Given the Info interface, how can you create a new interface Employee that includes all properties of Info and adds a new property employeeId of type number?

interface employeeInfo extends info {
  employeeId: number;
}

let employeData: employeeInfo = {
  name: "Neeraj",
  age: 22,
  isWorking: true,
  employeeId: 123,
};

// Question 5 --- again
// Write a function move that accepts a parameter of type Direction and logs a message indicating the movement direction.
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

let move = (directions: Direction) => {
  switch (directions) {
    case Direction.Up:
      console.log("Upward");
      break;

    case Direction.Down:
      console.log("downwards");
      break;

    case Direction.Left:
      console.log("left");
      break;

    case Direction.Right:
      console.log("right");
      break;
  }
};

move(Direction.Up);

// Qestion 6
// How can you print the string value of Status.Pending?

enum Status {
  Active = "Active",  
  Pending = "Pending",
  Inactive = "Inactive",
}

console.log(Status.Pending);
