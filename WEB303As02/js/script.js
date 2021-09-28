// WEB303 Assignment 2
// Yashvi Brijmohan Raja

$(document).ready(function(){
    $("a#vprospect").click(function(){
        $("#solution").hide().load("prospect.html").slideDown(2000); 
        console.log("Prospect is working!");

    });
    $("a#vconvert").click(function(){
        $("#solution").hide().load("convert.html").slideDown(2000);  
        console.log("Covert is working!");

    });
    
    $("a#vretain").click(function(){
        $("#solution").hide().load("retain.html").slideDown(2000);
        console.log("Retain is working!");
    });
});