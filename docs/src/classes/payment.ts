// Import Interface
import { HasFormatter } from "../interfaces/hasFormatter.js"

// Create the Payment class
export class Payment implements HasFormatter {
	
	// Map properties to inputs
	constructor(private recipient: string, private details: string, private amount: number) {}

	format (): string {
		return `${ this.recipient } is owed ₦${ this.amount } for ${ this.details }`;
	}
}