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
                    var json = jQuery.parseJSON(data);
                    
                    if (json.success == "Logged In")
                    {
                         if (json.access == "student")
                         {
                              window.location = "screener.html";
                         }
                         else if (json.access == "teacher")
                         {
                              window.location = "reportPage.html";
                         }
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
