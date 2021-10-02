// WEB303 Assignment 2
// Yashvi Brijmohan Raja

function calling_json() {
	$.getJSON("team.json", function (data) {
	   console.log("The data contained", data);
	   var newData = '';
	   $.each(data.teammembers, function (index, value) {
		   console.log('is it working?');
			   newData+=`<h3>${value.name}</h3>`;
			   newData+=`<h4>${value.title}</h4>`;
			   newData+=`<p>${value.bio}</p>`;
			   $('div#team').append(newData);
			   newData = '';
	   });
   });
}

function calling_ajax() {

    $.ajax({
        url: 'team.json', type: 'GET',

        beforeSend: function(){
            $('div#team').html("<h5>Displaying ..</h5>");
        },

        eror : function() { aler("Error...!"); },

        timeout : 5000,

        success: function(data){
            var newData = '';
            $.each(data.teammembers, function (index, value) {
				console.log('is it working?');
				newData+=`<h3>${value.name}</h3>`;
				newData+='<h4>'+value.title+'</h4>';
                newData+='<p>'+value.bio+'</p>';
				$('div#team').append(newData);
				newData = '';
            });
        },

        complete: function(){
            $('h5').css('display','none');
        }
    });
};

$(function() {
	calling_ajax();
});