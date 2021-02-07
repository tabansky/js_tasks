const parent = document.querySelector('#parent');
const child = document.querySelector('#child');
const btn = document.querySelector('button');

const btnRemove = () => {
    btn.addEventListener('click', () => {
        parent.removeChild(child);
    });
};

document.addEventListener('DOMContentLoaded', () => {
    btnRemove();
});
