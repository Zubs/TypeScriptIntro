"use strict";
// Variables
var age = 21;
console.log(age);
// Types
var getCircumference = function (diameter) {
    return diameter * Math.PI;
};
console.log(getCircumference(5));
// Arrays
var mixed = ["Age", 32, true];
mixed.push("Hello");
var numberOnly = [1, 2, 3, 4, 5];
numberOnly.push(11);
// Objects
var zubair = {
    name: "Zubair Idris Aweda",
    age: 19,
    male: true
};
// Types
var students;
var loggedIn;
var testCharacter;
var uuid; // No parentheses if it's not in front of an array.
var people = [];
var mixedArray = [];
var person; // This allows for person to be an array.
var secondPerson;
// Any as a type
var secondAge = 25;
var secondMixedArray = [];
// Functions
var sayHello;
var addNumbers = function (a, b) {
    console.log(a + b);
};
addNumbers(2, 8);
// Optional parameters
// Without default
var getProduct = function (a, b, c) {
    if (c) {
        console.log(a * b * c);
    }
    else {
        console.log(a * b);
    }
    ;
};
// With default
var getSum = function (a, b, c) {
    if (c === void 0) { c = 18; }
    console.log(a + b + c);
};
// Set function return type
var getDiff = function (a, b) {
    return a - b;
};
