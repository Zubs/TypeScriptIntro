// Import Interface
import { HasFormatter } from "../interfaces/hasFormatter.js"

//Import Constants
import { FinanceType } from "../store.js"

export class ListTemplates {
	
	constructor(private container: HTMLUListElement) {};

	render (item: HasFormatter, heading: string, pos: 'start' | 'end') {

		// Create List item
		const li = document.createElement('li');

		// Create heading
		const h4 = document.createElement('h4');

		// Put User Entered Text In h4
		h4.innerText = parseInt(heading) === FinanceType.Invoice ? "Invoice" : "Payment";

		// Put h4 In List
		li.append(h4);

		// Create Paragraph
		const p = document.createElement('p');

		// Set p
		p.innerHTML = item.format();

		// Add Paragrapth To List Too
		li.append(p);

		// Add The li To The User's Chosen Position
		if (pos === 'start') {
			this.container.prepend(li);
		} else if (pos === 'end') {
			this.container.append(li);
		}; 
	};
};