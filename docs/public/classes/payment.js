// Create the Payment class
export class Payment {
    // Map properties to inputs
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} is owed ₦${this.amount} for ${this.details}`;
    }
}
