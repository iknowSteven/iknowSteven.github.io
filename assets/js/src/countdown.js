var countDownSince = document.getElementsByClassName("countdown_since")[0];

var arr1 = countDownSince.split("-");
var countDownDate = new Date(arr1[0], arr1[1], arr[2]);

var now = new Date();
var distance = countDownDate - now;
var days = Math.floor(distance / (1000 * 60 * 60 * 24));

document.getElementsByClassName("countdown_remain")[0].innerHTML = days + "일 ";
