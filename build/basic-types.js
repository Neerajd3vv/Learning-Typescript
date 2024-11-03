"use strict";
let num1 = "22";
let num2 = 10;
console.log(num1 / num2);
// ++++ some data types ++++
// cannot assign number to string
let userName = "neeraj";
userName = "Sumit"; // 22
console.log(userName);
let age;
let isLoggedIn;
let album;
let album2;
age = 21; // can be any number not any any other data type
isLoggedIn = true; // can be true or false not any other data type
album = "hello"; // can be any type
album2 = "Raghav"; // can be number and string as it has a union type
function addition(a, b) {
    return a + b;
}
// union type is not limited to two data types
let isActive;
let reg = /\w+/g;
