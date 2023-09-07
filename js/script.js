$(document).ready(function() {

    /* Slider library */
    $('#autoWidth, #autoWidth2').lightSlider({
        autoWidth:true,
        loop:true,
        pager: false,
        onSliderLoad: function() {
            $('#autoWidth, #autoWidth2').removeClass('cS-hidden');
        } 
    });

    /* input focus & blur */
    var input = $('nav .search input');
    var placeholderValue = input.attr('placeholder');
    input.focus(function(){
        input.attr('placeholder', '');
    });
    input.blur(function(){
        input.attr('placeholder', placeholderValue);
    });


    /* call the mode function */
    $('nav #btn').click(function(){
        $('body').toggleClass('body-mode');

        mode();
    });


    /* Start mode(); function */
    var mode = function(){
        if($('body').hasClass('body-mode')){

            $('nav').css('backgroundColor', '#272727');

            $('.movies-heading h2').css({
                'color': '#fff'
            });

            $('nav .menu a').css('color', '#cacaca');

            $('.section').css('backgroundColor', '#333');
            $('.section h2').css('color', '#fff');

            $('section .movies-box').hover(function(){
                $('.movies-box:hover a').css('color', '#cacaca');
            }, function(){
                $('.movies-box a').css('color', '#7e7d7d');
            });

        } else {

            $('nav').css('backgroundColor', '#fff');
            $('nav ul a').css('color', '#585858');

            $('.movies-heading h2').css({
                'color': '#5d5d5d'
            });

            $('.section').css('backgroundColor', '#ffffff');
            $('.section h2').css('color', '#313131');

            $('section .movies-box').hover(function(){
                $('.movies-box:hover a').css('color', '#333');
            }, function(){
                $('.movies-box a').css('color', '#7e7d7d');
            });
        }
    }
    /* End mode(); function */

});