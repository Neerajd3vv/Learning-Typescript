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
logMessage(sumFull( undefined , 4));

//  +++ rest parameter +++ 

function total  ( a: number, ...numbers: number[] ): number {
 return a +  numbers.reduce((prev, curr ) => prev + curr, 0)
}

logMessage(total(10, 2, 3, 4));

// Never return type of a function

const createErrorMsg = (errorMsg:string): never => {
    throw new Error(errorMsg);
} 

let infinite = () => { // so whenever we see an never return type we might need to make sure our function throws error or correct it
    let i : number = 1;
    while (true) {
        i++;
        if ( i > 50) break;
    }

}

const isString = (value : any): boolean => {
  return typeof value === "string" ? true : false;
}

const numberOrString = (value : string | number):string  => {
    if (isString(value)) return "string";
    if (typeof value === "number") return "number";
    return createErrorMsg("This should never happen !");
}