var currentScroll;
var lastScroll = 0;
var windowSize = window.innerHeight;

$(window).resize(function() {
    windowSize = window.innerHeight;
});

window.addEventListener('scroll', function() {
    currentScroll = $(this).scrollTop(); //get current
    if (currentScroll > lastScroll && lastScroll < windowSize) { // Down Scroll and in the first section
        $('html, body').animate({
            scrollTop: $('#all_countdown_container').offset().top
        }, 1000);
        lastScroll = currentScroll;
        return;
    } else
    // } else if (currentScroll < lastScroll && currentScroll < 2 * windowSize && currentScroll >= windowSize) {
    //     $('html, body').animate({
    //         scrollTop: $('#home_main_container').offset().top
    //     }, 1000);
    // }
    lastScroll = currentScroll;
});

// var didScroll;
// var currentScroll;
// var lastScroll = 0;
// var windowSize = window.innerHeight;
//
// $(window).resize(function() {
//     windowSize = window.innerHeight;
// });

// $(window).scroll(function(event) {
//     didScroll = true;
// });

// setInterval(function() {
//     if (didScroll) {
//         hasScrolled();
//         didScroll = false;
//     }
// }, 1);

// $(window).scroll(function() {
//     currentScroll = $(this).scrollTop(); //get current
//
//     if (currentScroll > lastScroll && st <= windowSize) {
//         $('html, body').animate({
//             scrollTop: $('#all_countdown_container').offset().top
//         }, 1000);
//
//     } else if (currentScroll > lastScroll && st > windowSize){ // Scroll is out from the first section and Down
//         return;
//     } else if (currentScroll < lastScroll && st == windowSize){ // Scroll is in the first section and Up
//         $('html, body').animate({
//             scrollTop: $('#home_main_container').offset().top
//         }, 1000);
//     } else if (currentScroll < lastScroll && st > windowSize){ // Scroll is out from the first section and Up
//         document.getElementById('home_main_container').scrollIntoView({behavior: 'smooth'});
//     }
//
//     lastScrollTop = st;
// })

//
// function hasScrolled() {
//     currentScroll = $(this).scrollTop(); //get current
//
//     if (currentScroll > lastScroll && st <= windowSize) {
//         $('html, body').animate({
//             scrollTop: $('#all_countdown_container').offset().top
//         }, 1000);
//
//     } else if (currentScroll > lastScroll && st > windowSize){ // Scroll is out from the first section and Down
//         return;
//     } else if (currentScroll < lastScroll && st == windowSize){ // Scroll is in the first section and Up
//         $('html, body').animate({
//             scrollTop: $('#home_main_container').offset().top
//         }, 1000);
//     } else if (currentScroll < lastScroll && st > windowSize){ // Scroll is out from the first section and Up
//         document.getElementById('home_main_container').scrollIntoView({behavior: 'smooth'});
//     }
//
//     lastScrollTop = st;
// }


