'use strict';
$(document).ready(function() {

    // enable smoothscrolling
    $('a').smoothScroll();


    /* scripts for #pay elements
        .relative = one of the 3 big elements to click */


    //ensure proper background display and no multiple active element at the same time

    $('.relative').click(function() {
        //change background color
        $(this).toggleClass('active');
        //add pointing arrow
        $('img', this).toggle();
        //if we have active class no other element must also have it
        if ($('#show').hasClass('in')) {
            $('.relative').removeClass('active');
            $('.relative img').css('display', 'none');
            $('.relative', this).addClass('active');
        }
        //change price based on option clicked
        var string = $('span', this).text();
        $('#show span').text(string);
    });


    //Scroll to element '#show' after collapse completed
    $('#pay a, #pay [data-toggle="collapse"]').click(function() {
        var scrollIt = function() {
            $.smoothScroll({
                scrollElement: $('body'),
                scrollTarget: '#show'
            });
            return false;
        };
        setTimeout(function() {
            scrollIt();
        }, 1000);
    });

    /*other scripts*/

    //hide and show bottom button which leads user to top of page
    $('.gotop').hide();
    var isview = function() {
        var $div = $('#contact');
        if ($div.is(':in-viewport')) {
            $('.gotop').fadeIn('slow');
        } else {
            $('.gotop').fadeOut('slow');
        }
    };
    $(document).scroll(isview);

});
