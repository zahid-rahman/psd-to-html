$(document).ready(function($){
    $('.search-button').click(function(){

        $(this).attr( function () { 
             display:'none';
        });

        $('.search-field').attr( function () { 
            display:'block';
       });
       
    });



    $('.slider').slick({
        'autoplay':true,
        'dots': true,
        'infinite': true,
        'speed': 500,
        'autoplay': true,
        'slidesToShow': 1,
        'slidesToScroll': 1,
        'arrows':true
        
    });




});

