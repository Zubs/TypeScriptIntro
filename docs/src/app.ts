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