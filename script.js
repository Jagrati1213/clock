
function setTime() {
    var hours = document.querySelector(".hours");
    var min = document.querySelector(".minitue");
    var sec = document.querySelector(".seconds");

    var currentTime = new Date();

    var currentHour = currentTime.getHours();
    var currentMin = currentTime.getMinutes();
    var currentSec = currentTime.getSeconds();

    currentHour = (30 * currentHour);
    currentMin = (6 * currentMin);
    currentSec = ((currentSec / 60) * 360) + 90;

    hours.style.transform = `rotate(${currentHour}deg)`;
    min.style.transform = `rotate(${currentMin}deg)`;
    sec.style.transform = `rotate(${currentSec}deg)`;
}

setInterval(setTime, 1000);
setTime();
// 1min =60sec
// 1sec=1/60sec
//12min=360
// 
