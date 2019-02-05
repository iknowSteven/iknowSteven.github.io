var didScroll;
var lastScrollTop = 0;
var delta = 1; // 동작의 구현이 시작되는 위치
var windowSize = window.innerHeight;

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
    var st = $(this).scrollTop();

    if (Math.abs((lastScrollTop - st) <= delta))
        return;

    if (st > lastScrollTop && st <= windowSize){ // Scroll is in the first section and Down
        document.getElementById('all_countdown_container').scrollIntoView();
    } else if (st > lastScrollTop && st > windowSize){ // Scroll is out from the first section and Down
        return;
    } else if (st < lastScrollTop && st <= windowSize){ // Scroll is in the first section and Up
        document.getElementById('home_main_container').scrollIntoView();
    } else if (st < lastScrollTop && st > windowSize){ // Scroll is out from the first section and Up
        document.getElementById('home_main_container').scrollIntoView();
    }

    lastScrollTop = st;
}


