const sendBtn = document.getElementById('send');
const output = document.getElementById('calc');

// вычисляет разницу между сеогоднящней датой и введенной датой в миллисекундах
const getDateDifference = () => {
    const date = document.getElementById('dateInput').value;
    // если была введена дата
    if (date) {
        return new Date() - new Date(date);
    }
}

const calculateAge = () => {
    sendBtn.addEventListener('click', () => {
        if (!!document.getElementById('dateInput').value) {
            const dateDifference = getDateDifference();
            // преобразовывает миллисекунды в дни
            const days = Math.round(dateDifference / 8.64e+7);

            // если введена дата больше текущей -  выводит возраст в годахб месяцах и днях, иначе - сообщение
            if (dateDifference > 0) {
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
