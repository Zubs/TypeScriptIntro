// Import Interface
import { HasFormatter } from "../interfaces/hasFormatter.js"

// Create the Invoice class
export class Invoice implements HasFormatter {
	
	// Map properties to inputs
	constructor(private client: string, private details: string, private amount: number) {}

	format (): string {
		return `${ this.client } owes ₦${ this.amount } for ${ this.details }`;
	}
}