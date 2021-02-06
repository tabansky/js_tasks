const minusBtn = document.getElementById('minus');
const plusBtn = document.getElementById('plus');
const display = document.getElementById('display');


let value;

const setStandardValue = () => {
    display.value = '0';
    value = '0';
    disableBtn();
}

const setStyles = () => {
    display.setAttribute("readonly", "readonly");
    display.style.cursor = 'default';
    display.style.width = '100px';
    display.style.height = '100px';
    display.style.textAlign = 'center';
    display.style.fontSize = '36px';
    plusBtn.style.width = '100px';
    plusBtn.style.height = '100px';
    plusBtn.style.textAlign = 'center';
    plusBtn.style.fontSize = '36px';
    minusBtn.style.width = '100px';
    minusBtn.style.height = '100px';
    minusBtn.style.textAlign = 'center';
    minusBtn.style.fontSize = '36px';
}

const disableBtn = () => {
    if (value === '0') {
        minusBtn.setAttribute("disabled", "disabled");
    } else {
        minusBtn.removeAttribute("disabled");
    }

    if (value === '9') {
        plusBtn.setAttribute("disabled", "disabled");
    } else {
        plusBtn.removeAttribute("disabled");
    }
}

const changeValue = () => {
    minusBtn.addEventListener('click', () => {
        if (Number(display.value) > 0) {
            display.value = Number(display.value) - 1;
            value = display.value;
            disableBtn();
        }
    });

    plusBtn.addEventListener('click', () => {
        if (Number(display.value) < 9) {
            display.value = Number(display.value) + 1;
            value = display.value;
            disableBtn();
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setStyles();
    setStandardValue();
    changeValue();
});
