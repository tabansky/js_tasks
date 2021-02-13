const startBtn = document.getElementById('button-start');

class Timer {
    timer = document.getElementById('timer');

    init() {
        this.days = +document.getElementById('days').value;
        this.minutes = +document.getElementById('minutes').value;
        this.hours = +document.getElementById('hours').value;
    }

    start() {
        this.init();
        this.showTimer();

        this.interval = setInterval(() => {
            this.showTimer();
            this.decreaseMinutes();
        }, 1000);
    }

    // если минуты больше 0 - отнимается минута, иначе от часов отнимается одна единица и добавляется 59 минут
    decreaseMinutes() {
        if (this.minutes > 0) {
            return this.minutes--;
        }

        this.minutes = this.decreaseHours();
    }

    // если часы больше 0 - отнимаются часы, иначе от дней отнимается одна единица и добавляется 23 часа
    decreaseHours() {
        if (this.hours > 0) {
            this.hours--;
        } else {
            this.hours = this.decreaseDays();
        }

        return 59;
    }

    // если дни больше 0 - отнимаются дни, иначе останавливается таймер и выводится уведомление
    decreaseDays() {
        if (this.days > 0) {
            this.days--;

            return 23;
        }

        clearInterval(this.interval);
        alert('Время пришло');
    }

    showTimer() {
        this.timer.innerHTML = `${this.days} : ${this.hours} : ${this.minutes}`;
    }

}

document.addEventListener('DOMContentLoaded', () => {
    const timer = new Timer();
    startBtn.addEventListener('click', () => {
        timer.start();
    });
});
