"use strict";
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
let testTwo = [];
testTwo.push("correct");
testTwo.push(12); // this will throw compile error as testTwo is of string type only
let testThree = [];
testThree.push("correct"); // this will not throw any compile error as testThree is of union type so can be string and number both
testThree.push(true); // this will throw compile error as testThree is of union type so can be string and number only
// ++++ Tuple +++
// Tuple is a more strict version of array as  it has a fixed length and each element has a specific type
let MyTuple = ["hello", true, 12];
let mixed = ["john", false, 22];
mixed = MyTuple;
MyTuple = mixed;
MyTuple[3] = 12;
// ++++ Object ++++
let myObj;
myObj = []; // Array is an obj in js do its valid
myObj = {}; // Object is an obj in js do its valid
myObj = mixed;
const userInfo = {
    name: "Neeraj",
    age: 22,
    isWorking: true,
};
userInfo.name = 21; // this will throw compile error as name is of type string
let userInfo2 = {
    name: "Sumit",
    age: 22,
    isWorking: false,
};
let userInfo3 = {
    name: "Surya",
    age: 22,
    isWorking: true,
    isMarried: false,
};
let userInfo4 = {
    name: "Raghav", // error saying age is missing
    isWorking: true,
};
let userInfo5 = {
    name: "Raghav",
    isWorking: true,
};
let userInfo6 = {
    name: "Raghav",
    isWorking: true,
    age: 22,
};
userInfo2 = userInfo3;
userInfo2 = userInfo5;
userInfo3 = userInfo6;
// can also declare object type like this
let book = {
    name: "The Alchemist",
    price: 200,
    isAvailable: true,
};
function printName(userInfo) {
    return userInfo.name.toUpperCase();
}
console.log(printName(userInfo6));
// ++++ Enums ++++
// Unlike most typescript features, Enums are not a type-level addition to javascript but something added to the language and runtime
var positiningOfUser;
(function (positiningOfUser) {
    positiningOfUser[positiningOfUser["First"] = 0] = "First";
    positiningOfUser[positiningOfUser["second"] = 1] = "second";
    positiningOfUser[positiningOfUser["third"] = 2] = "third";
    positiningOfUser[positiningOfUser["fourth"] = 3] = "fourth";
    positiningOfUser[positiningOfUser["Fifth"] = 4] = "Fifth";
})(positiningOfUser || (positiningOfUser = {}));
console.log(positiningOfUser.First); // =  0
console.log(positiningOfUser.second); // = 1
// Question 1
// what is the purpose of enum in typescript , and use case of enum in typescript??
// Question 2
// Write a TypeScript array that can contain strings and numbers, and add two strings and two numbers to it.
let queTwoArray = [];
queTwoArray.push("oneString");
queTwoArray.push("twoString");
queTwoArray.push(1);
queTwoArray.push(2);
queTwoArray.push(true); // this will throw compile error as queTwoArray is of union type so can be string and number both
//  Question 3
// Define a tuple named person that contains a string, a number, and a boolean, in that order. Assign appropriate values to it.
let person = ["GT", 650, true];
// How can you access the number value and assign it to a variable?
const cc = person[1];
let employeData = {
    name: "Neeraj",
    age: 22,
    isWorking: true,
    employeeId: 123,
};
// Question 5 --- again
// Write a function move that accepts a parameter of type Direction and logs a message indicating the movement direction.
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
let move = (directions) => {
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
// Question 6
// How can you print the string value of Status.Pending?
var Status;
(function (Status) {
    Status["Active"] = "Active";
    Status["Pending"] = "Pending";
    Status["Inactive"] = "Inactive";
})(Status || (Status = {}));
console.log(Status.Pending);
const myBike = {
    make: "Royal Enfield",
    model: "GT 350",
};
// Question 8
// Given an array let data: any[] = ["hello", 42, true];, how can you assert that the first element is a string and call a string method on it?
let data = ["hello", 42, true];
let firstEle = data[0];
console.log(firstEle.toUpperCase());
//  Question 9
// How can you define a tuple that cannot be modified after creation?
let readOnlyTuple = ["hello", 42];
readOnlyTuple[o] = "neeraj";
const randomObj = {
    name: "neeraj",
    age: "22",
    isWorking: "true",
};
