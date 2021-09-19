/*
	WEB 303
	Starting file for Assignment 1 
	{Yashvi Brijmohan Raja}
*/
'use strict';

$(document).ready(function() {

	let input = document.querySelector('fieldset');
	input.addEventListener('keyup',calculateSalary);

	function calculateSalary(event) {
		let salary = document.querySelector("#salary").value;

		let percent = document.querySelector("#percent").value;

		let spend = salary * percent / 100 ;

		document.querySelector('#spend').textContent = "$" + spend.toFixed(2);
	}
});
