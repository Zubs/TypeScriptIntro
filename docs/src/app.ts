// Import Classes
import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/payment.js";
import { ListTemplates } from "./classes/listTemplates.js";

// Import Interface
import { HasFormatter } from "./interfaces/hasFormatter.js"

// Get Form
const form = document.querySelector('.form') as HTMLFormElement;

// Get Inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toOrFrom = document.querySelector('#toOrFrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLTextAreaElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// Get Output List
const ul = document.querySelector('ul')!;

// Init ListTemplates
const list = new ListTemplates(ul);

// Add Listener To Form
form.addEventListener('submit', (e: Event) => {
	e.preventDefault();

	// Just some security check
	let doc: HasFormatter;

	// Check type
	if (type.value === 'Invoice') {

		// Instantiate Invoice
		doc = new Invoice(toOrFrom.value, details.value, amount.valueAsNumber);

		// Render list
		list.render(doc, type.value, 'end');
	} else if (type.value === 'Payment') {

		// Instantiate Payment
		doc = new Payment(toOrFrom.value, details.value, amount.valueAsNumber);

		// Render list
		list.render(doc, type.value, 'end');
	};
});