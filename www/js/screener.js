/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
$(document).ready(function()
{
  /*$.getJSON(url, function(result)
  {
      $.each(result, function(i, field)
      {
        var values = field.value;
        var print = "<p>" + values + "</p>";
        $("#results").append(print);
      });
  });*/

  $("#screener").on("submit", function(e)
  {
    e.preventDefault();
    var answers = "submit=submit&id=" + $_GET("session") + "&answers=";
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
      $('#error3').removeClass("hidden");
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
