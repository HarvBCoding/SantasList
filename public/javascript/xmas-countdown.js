const countDownDate = new Date("Dec 25, 2021 00:00:00").getTime();

const countClock = setInterval(function() {
    const now = new Date().getTime();
    const timeleft = countDownDate - now;

    // calculate days, hours, minutes and seconds left
    const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days + " days "
    document.getElementById("hours").innerHTML = hours + " hours "
    document.getElementById("mins").innerHTML = minutes + " minutes "
    document.getElementById("secs").innerHTML = seconds + " seconds "

    if (timeleft < 0) {
        clearInterval(countClock);
        document.getElementById("days").innerHTML = ""
        document.getElementById("hours").innerHTML = ""
        document.getElementById("mins").innerHTML = ""
        document.getElementById("secs").innerHTML = ""
        document.getElementById("end").innerHTML = "MERRY CHRISTMAS!"

    }
}, 1000);