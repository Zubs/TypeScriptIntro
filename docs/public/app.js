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
