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
