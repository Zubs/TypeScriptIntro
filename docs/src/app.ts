// Get Form
const form = document.querySelector('.form') as HTMLFormElement;

// Get Inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toOrFrom = document.querySelector('#toOrFrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLTextAreaElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// Add Listener To Form
form.addEventListener('submit', (e: Event) => {
	e.preventDefault();

	console.log(type.value, toOrFrom.value, details.value, amount.valueAsNumber);
});

// Create the Invoice class
class Invoice {
	
	// Map properties to inputs
	constructor(private client: string, private details: string, private amount: number) {}

	format () {
		return `${ this.client } owes ₦${ this.amount } for ${ this.details }`;
	}
}

const invOne = new Invoice("Zubair", "Website money", 2500);

// An array of only invoices
let invoices: Invoice [] = [];