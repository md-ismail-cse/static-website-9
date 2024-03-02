/*======================================
                Preloader
========================================*/
$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut();
});

/*======================================
                Navigation 
========================================*/
$(function () {
    window.onscroll = function () {
        myFunction()
    };

    var header = document.getElementById("site-main-nav");
    var sticky = header.offsetTop;

    function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }
});

// Smooth scrolling
$(function () {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();
        var section = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(section).offset().top - 65
        }, 1250);
    });
});
// Close mobile menu on click
$(function () {
    $(".navbar-collapse ul li a").on("click touch", function () {
        $(".navbar-toggle").click();
    });
});

/*======================================
        Back To Top Button
========================================*/
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() < 80) {
            $("#back-to-top").fadeOut().delay(10);
        } else {
            $("#back-to-top").fadeIn().delay(10);
        }
    });
});


/*======================================
        Portfolio
========================================*/
$(function () {
    $('.portfolio-view').magnificPopup({
        type: 'image'
    });
});


/*======================================
        Numbwe Counter
========================================*/
$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});



//slider Script


var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 3000); // Change image every 2 seconds
}
			
			
(function($) {
    "use strict";
	
    $(window).on( 'load', function() {

        $('#loader').fadeOut();
            
       // Isotope portfolio
        var $container = $('.portfolio-container');
        
        $container.isotope({
            filter: '*',
            masonry: {
                horizontalOrder: true
            },
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });

        $('.portfolio-filter a').on('click', function() {
            $('.portfolio-filter .current').removeClass('current');
            $(this).addClass('current');

            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                percentPosition: true,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });
    }); //Window Load End

})(jQuery);


