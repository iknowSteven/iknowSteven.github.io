var countDownSince = document.getElementsByClassName("countdown_since")[0].innerHTML;
var countDownDate = new Date(countDownSince+" 09:00:00").getTime();
var now = new Date().getTime();
var distance = now - countDownDate;
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
if(distance<0)
    document.getElementsByClassName("countdown_remain")[0].innerHTML = "Ready";
document.getElementsByClassName("countdown_remain")[0].innerHTML = "Since "+days+" days ";

