const input = document.getElementById('input');

const checkIsNumReal = () => {
    input.addEventListener('focusout', () => {
        console.log(parseInt(input.value))
        if (Number(input.value) !== parseInt(input.value)) {
            input.value = '';
        }
    });
};

document.addEventListener('DOMContentLoaded', () => {
    checkIsNumReal();
});
