/*
    Assignment 4
    {Yashvi Brijmohan Raja}
*/

$(document).ready(function(){
    // your code here

    navigator.geolocation.getCurrentPosition(
        function success(position) 
        {
            var let1 = position.coords.latitude;
            var lon1 = position.coords.longitude;
            $('#youarehere').append(`Current Location is : ${let1}, ${lon1} </br>`);
               
               
            if (localStorage.getItem("letitude1") !== null && localStorage.getItem("longitude1") !== null) 
            {
                var let2 = localStorage.getItem("letitude1");
                var lon2 = localStorage.getItem("longitude1");
                var distance = calcDistance(let1,lon1,let2,lon2);
                $('#youarehere').append(`How far you have moved :  ${distance} </br>`);
                
            } else {
                 //local storage is not available;
                $('#youarehere').append("Welcome you are visiting for first time, local storage is not available </br>");
            }  
            localStorage.setItem("letitude1",let1);
            localStorage.setItem("longitude1",lon1);
        },
        function failed() {
            $('#youarehere').append("Can not use geolocation, permission denied..! </br>");
        }
    );
        
    // function to calculate the distance in metres between two lat/long pairs on Earth
    // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
    // Aren't those cool variable names? Yah gotta love JavaScript
    function calcDistance(lat1, lon1, lat2, lon2){
        var toRadians = function(num) {
            return num * Math.PI / 180;
        }
        var R = 6371000; // radius of Earth in metres
        var φ1 = toRadians(lat1);
        var φ2 = toRadians(lat2);
        var Δφ = toRadians(lat2-lat1);
        var Δλ = toRadians(lon2-lon1);

        var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ/2) * Math.sin(Δλ/2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

        return ( R * c );
    }
});


