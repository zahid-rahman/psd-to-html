$(document).ready(function($){
    $('.search-button').click(function(){

        $(this).attr( function () { 
             display:'none';
        });

        $('.search-field').attr( function () { 
            display:'block';
       });
       
    });


});

