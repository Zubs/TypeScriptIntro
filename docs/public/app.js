// Import Classes
import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/payment.js";
import { ListTemplates } from "./classes/listTemplates.js";
// Import Constants
import { FinanceType } from "./store.js";
// Get Form
const form = document.querySelector('.form');
// Get Inputs
const type = document.querySelector('#type');
const toOrFrom = document.querySelector('#toOrFrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// Get Output List
const ul = document.querySelector('ul');
// Init ListTemplates
const list = new ListTemplates(ul);
// Add Listener To Form
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Just some security check
    let doc;
    // Store Inputs
    const values = [toOrFrom.value, details.value, amount.valueAsNumber];
    // Check type
    if (parseInt(type.value) === FinanceType.Invoice) {
        // Instantiate Invoice
        doc = new Invoice(...values);
        // Render list
        list.render(doc, type.value, 'end');
    }
    else if (parseInt(type.value) === FinanceType.Payment) {
        // Instantiate Payment
        doc = new Payment(...values);
        // Render list
        list.render(doc, type.value, 'end');
    }
    ;
});
