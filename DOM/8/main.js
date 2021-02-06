const list = document.querySelector('ol');
const text = document.getElementById('inputText');
const submit = document.querySelector('#submit');

const reset = () => {
    submit.setAttribute("disabled", "disabled");
}

const checkInputValue = () => {
    text.addEventListener('input', () => {
        if (!text.value) {
            submit.setAttribute("disabled", "disabled");
        } else {
            submit.removeAttribute("disabled");
        }
    });

};

const addToList = () => {
    submit.addEventListener('click', () => {
        list.innerHTML += `<li>${text.value}</li>`;
        text.value = '';
        reset();
    });
};

document.addEventListener('DOMContentLoaded', () => {
    reset();
    addToList();
    checkInputValue();
});
