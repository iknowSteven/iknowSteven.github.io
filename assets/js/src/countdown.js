var countDownSince = document.getElementsByClassName("countdown_since")[0];

var countDownDate = new Date(countDownSince).getTime();
var now = new Date().getTime();
var distance = countDownDate - now;
var days = Math.floor(distance / (1000 * 60 * 60 * 24));

document.getElementsByClassName("countdown_remain")[0].innerHTML = days + "일 ";
