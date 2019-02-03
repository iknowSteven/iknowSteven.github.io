<script>
var countDownSince = document.getElementsByClassName("countdown_since");
var countDownDate = new Date(countDownSince).getTime();

var x = setInterval(function() {

    var now = new Date();

    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));

    document.getElementsByClassName("countdown_remain").innerHTML = days + "일 ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);
</script>