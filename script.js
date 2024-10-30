var tl = gsap.timeline();

tl.from(".line h1", {
    y: 150,
    onStart: function () {
        var h5timer = document.querySelector("#line1-countdown");
        var grow = 0;
        var interval = setInterval(function () {
            if (grow < 100) {
                h5timer.innerHTML = grow++ + "%";
            } else {
                h5timer.innerHTML = grow + "%";
                gsap.to(".line h1,#loader-line3-now, #line1-countdown", {
                    delay: 0.3,
                    y: -150,
                    opacity: 0,
                    duration: 0.6,
                })
                clearInterval(interval);  // Stop the interval when it reaches 100
                gsap.to("#loader", {
                    opacity: 0,
                    delay: 0.7,
                })
            }
        }, 0);
    },
    stagger: 0.1,
    duration: 0.4,
    delay: 0.1,
})

tl.from("#loader-line3-now", {
    opacity: 0,
})
