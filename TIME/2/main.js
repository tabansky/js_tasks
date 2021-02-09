const clock = document.getElementById('clock');
const stopBtn = document.getElementById('stop');
const startBtn = document.getElementById('start');

const getCurrentTime = () => {
    const date = new Date();

    clock.innerHTML =
        `<span class="red">${date.getHours()}</span>` + ' : ' +
        `<span class="green">${date.getMinutes()}</span>` + ' : ' +
        `<span class="blue">${date.getSeconds()}</span>`;

    startBtn.addEventListener('click', getCurrentTime);
    stopBtn.addEventListener('click', () => clearTimeout(rec));

    const rec = setTimeout(getCurrentTime, 1000);
}

document.addEventListener('DOMContentLoaded', () => {
    getCurrentTime();
});
