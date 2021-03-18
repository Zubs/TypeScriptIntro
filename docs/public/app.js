// Import Classes
import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/payment.js";
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
    // Just some security check
    let doc;
    // Check type
    if (type.value === 'Invoice') {
        // Instantiate Invoice
        doc = new Invoice(toOrFrom.value, details.value, amount.valueAsNumber);
        console.log(doc);
    }
    else if (type.value === 'Payment') {
        // Instantiate Payment
        doc = new Payment(toOrFrom.value, details.value, amount.valueAsNumber);
        console.log(doc);
    }
    ;
});
