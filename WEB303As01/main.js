/*
	WEB 303
	Starting file for Assignment 1 
	{Yashvi Brijmohan Raja}
*/
'use strict';

$(document).ready(function() {

	$("input").keyup(function () {
		let $salary = parseInt($("input#salary").val());
		let $percent = parseInt($("input#percent").val());
		let $spend = ($salary*$percent/100);
		$("span#spend").text(`$${$spend.toFixed(2)}`);
		}
	);
});