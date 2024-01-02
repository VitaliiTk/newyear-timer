const timerItems = document.querySelectorAll('.timer-item');
const timerBox = document.querySelector('.timer-box');
let dateFinish = new Date('Jan 01 2025 00:00:00');


function counts() {
    let nowDate = new Date();
    let gap = dateFinish - nowDate;

    let days = Math.floor(gap / 1000 / 60 / 60 / 24);
    let hours = Math.floor(gap / 1000 / 60 / 60) % 24;
    let minutes = Math.floor(gap / 1000 / 60) % 60;
    let seconds = Math.floor(gap / 1000) % 60;

    let timerValue = [days, hours, minutes, seconds];

    timerItems.forEach((item, index) => {
        item.innerHTML = timerValue[index]
    })

    if (gap < 0) {
        clearInterval(interval);
        timerBox.innerHTML = 'Happy New Year!'
    }
}

const interval = setInterval(counts, 1000);
counts()