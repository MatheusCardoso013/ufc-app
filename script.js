const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEL = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const newYears = "12 Jun 2023 23:00:00";

function countdown() {
    const nextEventDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (nextEventDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600 ) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEL.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);

}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

countdown();
setInterval(countdown, 1000);
