$(document).ready(function()
{
	 $("#login").on("submit", function(e)
	{
		e.preventDefault();
          
          $("#login").validate();
          
		username = $("#username", "#login").val();
		password = $("#password", "#login").val();
		
          var credentials = "submit=submit&username=" + username + "&password=" + password;
     
          $.ajax(
          {
            type: "POST",
            url: "http://sigmagammazeta.greenrivertech.net/php/login.php",
            data: credentials,
            crossDomain: true,
            cache: false,
            success: function(data)
            {
               json = jQuery.parseJSON(data);
               
               if (json.success == "Logged In")
               {
                 window.location = "screener.html?session=" + json.id;
               }
               else
               {
                 alert("You have entered incorrect login information. Please try again");
               }
            }
          });	
		return null;
	});
});
