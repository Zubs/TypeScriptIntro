// Import Invoice
import { Invoice } from "./classes/invoice.js";
// Get Form
const form = document.querySelector('.form');
// Get Inputs
const type = document.querySelector('#type');
const toOrFrom = document.querySelector('#toOrFrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// Add Listener To Form
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toOrFrom.value, details.value, amount.valueAsNumber);
});
const invOne = new Invoice("Zubair", "Website money", 2500);
console.log(invOne.format());
// An array of only invoices
let invoices = [];
