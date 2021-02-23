const input = document.getElementById('input');

const checkIsNumReal = () => {
    input.addEventListener('focusout', () => {
        //todo переделать
        if (Number(input.value) !== parseInt(input.value)) {
            input.value = '';
        }
    });
};

document.addEventListener('DOMContentLoaded', () => {
    checkIsNumReal();
});
