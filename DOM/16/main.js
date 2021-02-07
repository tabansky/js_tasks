const input = document.getElementById('input');

const checkIsNumReal = () => {
    input.addEventListener('keyup', () => {
            input.value = input.value.replace(/[^0-9\.]/g,'');
    });
};

document.addEventListener('DOMContentLoaded', () => {
    checkIsNumReal();
});
