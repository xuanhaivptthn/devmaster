"use strict";
let myName = "me";
console.log("hello world: " + myName);
let age = 29;
let pi = 3.14;
let myName1 = "Name";
let message = 'Hello, ${myName1}';
let isStudent = true;
let hasGraduated = false;
let u = undefined;
let n = null;
let randomVal = 5; // avoid using
randomVal = "text";
randomVal = false;
let unknownVal = 10;
unknownVal = "hellp";
if (typeof unknownVal === "string") {
    console.log(unknownVal.toUpperCase());
}
let scores = [90, 99, 81];
let names = ["A", "B", "C"];
let flags = [true, false, false, false, true];
let student = ["D", 20];
var color;
(function (color) {
    color[color["Red"] = 0] = "Red";
    color[color["Green"] = 1] = "Green";
    color[color["Blue"] = 2] = "Blue";
})(color || (color = {}));
// console.log(color);
let c = color.Blue;
// console.log(c);
let person = {
    name: "Eg",
    age: 29
};
// console.log(person);
function greet(name) {
    return "Hello " + name;
}
// console.log(greet(myName1));
const func_greet = (name, age) => {
    return `Welcome to ${name}`;
};
let id1 = "Hai";
let id2 = 1283;
let user1 = {
    name: "devmatea",
    age: 20
};
