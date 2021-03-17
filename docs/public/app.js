"use strict";
// Get Form
var form = document.querySelector('.form');
// Get Inputs
var type = document.querySelector('#type');
var toOrFrom = document.querySelector('#toOrFrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
// Add Listener To Form
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, toOrFrom.value, details.value, amount.valueAsNumber);
});
// Create the Invoice class
var Invoice = /** @class */ (function () {
    // Map properties to inputs
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes \u20A6" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var invOne = new Invoice("Zubair", "Website money", 2500);
// An array of only invoices
var invoices = [];
