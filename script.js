gsap.from(".line h1",{
    y:150,
    stagger: 0.1,
    duration: 0.4,
    delay: 0.1,
})

var h5timer = document.querySelector("#line1-countdown");
var grow = 0;
var interval = setInterval(function() {
    if (grow < 100) {
        h5timer.innerHTML = grow++ + "%";
    } else {
        h5timer.innerHTML = grow + "%";
        clearInterval(interval);  // Stop the interval when it reaches 100
    }
}, 35);
