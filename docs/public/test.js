"use strict";
// Variables
const age = 21;
console.log(age);
// Types
const getCircumference = (diameter) => {
    return diameter * Math.PI;
};
console.log(getCircumference(5));
// Arrays
let mixed = ["Age", 32, true];
mixed.push("Hello");
let numberOnly = [1, 2, 3, 4, 5];
numberOnly.push(11);
// Objects
var zubair = {
    name: "Zubair Idris Aweda",
    age: 19,
    male: true
};
// Types
let students;
let loggedIn;
let testCharacter;
let uuid; // No parentheses if it's not in front of an array.
let people = [];
let mixedArray = [];
let person; // This allows for person to be an array.
let secondPerson;
// Any as a type
let secondAge = 25;
let secondMixedArray = [];
// Functions
let sayHello;
const addNumbers = (a, b) => {
    console.log(a + b);
};
addNumbers(2, 8);
// Optional parameters
// Without default
const getProduct = (a, b, c) => {
    if (c) {
        console.log(a * b * c);
    }
    else {
        console.log(a * b);
    }
    ;
};
// With default
const getSum = (a, b, c = 18) => {
    console.log(a + b + c);
};
// Set function return type
const getDiff = (a, b) => {
    return a - b;
};
const thirdAge = 12;
