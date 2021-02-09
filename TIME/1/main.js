const sendBtn = document.getElementById('send');
const calc = document.getElementById('calc');

const getDateDifference = () => {
    if (document.getElementById('dateInput')) {
        const dateInput = document.getElementById('dateInput').value;
        const dateNow = new Date();
        const dateUser = new Date(dateInput);

        return dateNow - dateUser;
    }
}

const calculateAge = () => {
    sendBtn.addEventListener('click', () => {
        if (!!document.getElementById('dateInput').value) {
            const date = getDateDifference();
            const days = Math.round(date / 8.64e+7);

            if (date > 0) {
                calc.innerText = `${Math.round(days / 365)} год; ${Math.round(days / 30)} месяца; ${days} дней`;
            } else {
                calc.innerText = `Вы из будущего? O_o`;
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    calculateAge();
});
