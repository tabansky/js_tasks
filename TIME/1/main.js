const sendBtn = document.getElementById('send');
const output = document.getElementById('calc');

// вычисляет разницу между сеогоднящней датой и введенной датой в миллисекундах
const getDateDifference = () => {
    // если была введена дата
    if (document.getElementById('dateInput').value) {
        const dateInput = document.getElementById('dateInput').value;

        return new Date() - new Date(dateInput);
    }
}

const calculateAge = () => {
    sendBtn.addEventListener('click', () => {
        if (!!document.getElementById('dateInput').value) {
            const date = getDateDifference();
            // преобразовывает миллисекунды в дни
            const days = Math.round(date / 8.64e+7);

            // если введена дата больше текущей -  выводит возраст в годахб месяцах и днях, иначе - сообщение
            if (date > 0) {
                output.innerText = `${Math.round(days / 365)} год; ${Math.round(days / 30)} месяца; ${days} дней`;
            } else {
                output.innerText = `Вы из будущего? O_o`;
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    calculateAge();
});
