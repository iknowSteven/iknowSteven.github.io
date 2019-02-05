var didScroll;
var lastScrollTop = 0;
var windowSize = window.innerHeight;
var st;

$(window).resize(function() {
    windowSize = window.innerHeight;
});

$(window).scroll(function(event) {
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    st = $(this).scrollTop(); //get current

    if (st > lastScrollTop && st <= windowSize) {
        $('html, body').animate({
            scrollTop: $('#all_countdown_container').offset().top
        }, 1000);

    } else if (st > lastScrollTop && st > windowSize){ // Scroll is out from the first section and Down
        return;
    } else if (st < lastScrollTop && st == windowSize){ // Scroll is in the first section and Up
        $('html, body').animate({
            scrollTop: $('#home_main_container').offset().top
        }, 1000);
    } else if (st < lastScrollTop && st > windowSize){ // Scroll is out from the first section and Up
        document.getElementById('home_main_container').scrollIntoView({behavior: 'smooth'});
    }

    lastScrollTop = st;
}


