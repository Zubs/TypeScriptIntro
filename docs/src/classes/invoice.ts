// Create the Invoice class
export class Invoice {
	
	// Map properties to inputs
	constructor(private client: string, private details: string, private amount: number) {}

	format () {
		return `${ this.client } owes ₦${ this.amount } for ${ this.details }`;
	}
}