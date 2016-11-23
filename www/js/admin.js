$(document).ready(function()
{
	var qid = $_GET("qid");
	
	if(qid == null)
	{
		
	}	
	else
	{
		qid = "qid=" + qid;
		$.ajax(
        {
            type: "POST",
            url: "http://sigmagammazeta.greenrivertech.net/php/admin.php",
            data: qid,
            crossDomain: true,
            cache: false,
            success: function(data)
            {
				var results = jQuery.parseJSON(data);
				$("#reports").append("<tr><th>Student Name</th><th>Answer</th><th>Date Entered</th><tr>");
				$.each(results, function()
				{
					var style;
					
					if(this.answer <= 2)
					{
						style = "red";
						$("#reports").append("<tr><td>" +
						this.firstname + " " + this.lastname + "</td><td style='border: 2px solid " + style + ";'>" +
						this.description + "</td><td>" + this.dateEntered + "</td></tr>");
					}
					else if (this.answer == 3)
					{
						style = "yellow";
					}
					else
					{
						style = "green";
					}
				});
            }
        });
	}
	
	function $_GET(param)
    {
        var vars = {};
        window.location.href.replace( location.hash, '' ).replace(
            /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
            function( m, key, value ) { // callback
              vars[key] = value !== undefined ? value : '';
            }
        );
    
        if ( param ) {
            return vars[param] ? vars[param] : null;
        }
        return vars;
    }
});