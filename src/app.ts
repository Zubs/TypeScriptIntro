// Variables
const age = 21;

console.log(age);

// Types
const getCircumference = (diameter: number) => {
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
let students: number;
let loggedIn: boolean;
let testCharacter: string;

let uuid: string | number; // No parentheses if it's not in front of an array.

let people: string [] = [];
let mixedArray: (string | number | boolean) [] = [];

let person: object; // This allows for person to be an array.

let secondPerson: {
	name: string,
	age: number,
	language: string
};

// Any as a type
let secondAge: number = 25;
let secondMixedArray: any [] = [];

// Functions
let sayHello: Function;

const addNumbers = (a: number, b: number) => {
	console.log(a + b);
};

addNumbers(2, 8);

// Optional parameters
// Without default
const getProduct = (a: number, b: number, c?: number) => {
	if (c) {
		console.log(a * b * c);
	} else {
		console.log(a * b);
	};
};

// With default
const getSum = (a: number, b: number, c: number = 18) => {
	console.log(a + b + c);
};

// Set function return type
const getDiff = (a: number, b: number): number => {
	return a - b;
}

// Type Aliases
type StrOrNum = string | number;

const thirdAge: StrOrNum = 12;