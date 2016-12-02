
$(document).ready(function(){  
          
            $('#ever').click(function(){  
                $.ajax({  
                    url: "everything.html",  
                    cache: false,  
                    success: function(html){  
                        $("#everything").html(html);
                    }  
                });  
            }); 
            }) 

var ajaxLoad = function() {
    $.ajax({
        url: "everything.html",
        cache: false,
        success: function(html) {
            $("#everything").html(html);
        }
    });
};

$(document).ready(function() {
    $('#ever').click(ajaxLoad);
    ajaxLoad();
});


//drop menu

$(document).ready(function() {
    $(function() {
      $(".open_menu").click(function() {
        $(".header_menu").toggle();
      });
    });
    }); 


