const page = document.querySelector('body');

const options = {
    top: '10px',
    right: '10px',
    message: 'Hello world',
    className: 'test'
};

const setStyles = () => {
    const div = document.querySelector('.notification');

    div.style.position = 'absolute';
    div.style.display = 'block';
    div.style.backgroundColor = 'gray';
    div.style.width = '100px';
    div.style.height = 'auto';
    div.style.top = options.top;
    div.style.right = options.right;
    div.style.textAlign = 'center';
};

const showNotification = (options) => {
    page.innerHTML = `<div class="notification ${options.className}">${options.message}</div>`;
    setStyles();
    setTimeout(() => page.innerHTML = '', 1500);
};

document.addEventListener('DOMContentLoaded', () => {
    showNotification(options);
});
