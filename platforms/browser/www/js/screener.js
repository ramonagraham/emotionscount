$(document).ready(function()
{ 
    $("#screener").on("submit", function(e)
    {
        e.preventDefault();
        var answers = "submit=submit&answers=";
        var valid = true;
    
        for (var i = 1; i < 6; i++)
        {
            if( $('input[name=Q' + i + ']:checked', '#screener').val() == null)
            {
                $('#error' + i).removeClass("hidden");
                valid = false;
            }
            else
            {
                var answer = $('input[name=Q' + i + ']:checked', '#screener').val();
                answers += answer + " ";
            }
        }
    
        if( $('input[name=Q6]:checked', '#screener').val() === "undefined")
        {
            $('#error6').removeClass("hidden");
        }
        var answer = $('input[name=Q6]:checked', '#screener').val();
        answers += answer;
    
        $.ajax(
        {
            type: "POST",
            url: "http://sigmagammazeta.greenrivertech.net/php/screener.php",
            data: answers,
            crossDomain: true,
            cache: false,
            success: function(data)
            {
                alert(data);
            }
        });
        return null;
    });
  
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
