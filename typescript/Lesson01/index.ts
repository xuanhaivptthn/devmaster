let myName: string = "me";
console.log("hello world: " + myName)

let age: number = 29;
let pi: number = 3.14;

let myName1: string = "Name";
let message: string = 'Hello, ${myName1}';

let isStudent: boolean = true;
let hasGraduated: boolean = false;

let u: undefined = undefined;
let n: null = null;

let randomVal: any = 5; // avoid using
randomVal = "text";
randomVal = false;

let unknownVal: unknown = 10;
unknownVal = "hellp";
if (typeof unknownVal === "string") {
    console.log(unknownVal.toUpperCase());
}

let scores: number[] = [90, 99, 81];
let names: string[] = ["A", "B", "C"];
let flags: Array<boolean> = [true, false, false, false, true]
let student: [string, number] = ["D", 20];

enum color {
    Red,
    Green,
    Blue
}
// console.log(color);
let c: color = color.Blue;
// console.log(c);

let person: { name: string, age: number } = {
    name: "Eg",
    age: 29
};
// console.log(person);

function greet(name: string): string {
    return "Hello " + name;
}
// console.log(greet(myName1));

const func_greet = (name: string, age: number) => {
    return `Welcome to ${name}`
}
// console.log(func_greet("abc", 20))

//alias - bí danh
type UserID = string | number
let id1:UserID = "Hai";
let id2:UserID = 1283

// interface
interface Person {
    name: string,
    age: number,
    email?: string //optional
}

let user1:Person = {
    name: "devmatea",
    age: 20
}