var countDownSince = $( ".countdown_since" ).val()
var countDownDate = new Date(countDownSince+" 00:00:00").getTime();
var now = new Date().getTime();
var distance = now - countDownDate;
var days = Math.floor(distance / (1000 * 60 * 60 * 24));

document.getElementsByClassName("countdown_remain")[0].innerHTML = days + "days ";
