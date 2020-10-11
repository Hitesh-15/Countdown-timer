

var countDownDateTime = new Date("Dec 31, 2020 23:59:59").getTime();

var interval = setInterval(function() {

  var nowTime = new Date().getTime();
    
  var difference = countDownDateTime - nowTime;
    
  var days = Math.floor(difference / (1000 * 60 * 60 * 24));
  var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  if (difference < 0) {
    clearInterval(interval);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);