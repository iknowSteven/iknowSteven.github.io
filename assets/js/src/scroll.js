var didScroll;
var lastScrollTop = $(this).scrollTop();
var windowSize = window.innerHeight;
var st;

$(window).resize(function(){
    windowSize = window.innerHeight;
});

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    st = $(this).scrollTop();

    if (st > lastScrollTop && st <= windowSize){ // Scroll is in the first section and Down
        $('html, body').animate({
            scrollTop: $('#all_countdown_container').offset().top
        }, 1000);

    lastScrollTop = st;
}


