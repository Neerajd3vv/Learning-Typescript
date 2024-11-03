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
    let i = 1;
    while (true) {
        i++;
        if (i > 50)
            break;
    }
};
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
