const clock = document.getElementById('clock');
const stopBtn = document.getElementById('stop');
const startBtn = document.getElementById('start');

const showCurrentTime = () => {
    const date = new Date();

    clock.innerHTML =
        `<span class="red">${date.getHours()}</span>` + ' : ' +
        `<span class="green">${date.getMinutes()}</span>` + ' : ' +
        `<span class="blue">${date.getSeconds()}</span>`;
}

const events = () => {
    let interval = setInterval(showCurrentTime, 1000);

    startBtn.addEventListener('click', () => interval = setInterval(showCurrentTime, 1000));
    stopBtn.addEventListener('click', () => clearInterval(interval));
}

document.addEventListener('DOMContentLoaded', () => {
    events();
});
