$(function() {
    var form = $("#form"); 
    var username = $("#username");
    var password = $("#pwd");
    var cpassword = $("#cpwd");
    var checkbox = $('#checkbox');
    var country = $('#country');
    var submit = $("#submit");
    var message = $("#message");                           
    submit.attr('disabled',true);
    submit.addClass('disabled');                    

    $.each(countries,function(key,value){
      country.append(`<option value="${value.code}"> ${value.name} </option>`);
     });

      form.change(function(){
          message.hide();                                    
          
          if( username.val().length > 0 && password.val().length > 9 && password.val() === password.val() && checkbox.is(":checked") && country.val() != "choose")
          {
              submit.removeAttr('disabled');
              submit.attr('disabled',false);
          }
          else{
              submit.attr('disabled',true);
              submit.addClass('disabled');   
          }
      });

      form.submit(function(e){
        e.preventDefault(); 
        message.show();         
        message.text(`Welcome ${username.val()} ! The country code you selected is ${country.val()}`);
        submit.attr('disabled',true);
        submit.addClass('disabled'); 
      });
  });