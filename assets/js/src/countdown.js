var countDownSince = document.getElementsByClassName("countdown_since")[0];
var countDown = countDownSince.toString();
var countDownDate = new Date("February 1,2019 09:00:00").getTime();
var now = new Date().getTime();
var distance = now - countDownDate;
var days = Math.floor(distance / (1000 * 60 * 60 * 24));

document.getElementsByClassName("countdown_remain")[0].innerHTML = days + "days ";
