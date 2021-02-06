const changeBackGround = () => {
    document.body.style.backgroundColor = 'red';
    setTimeout(() => document.body.style.backgroundColor = 'green', 3000);
};

const addButton = () => {
    document.body.innerHTML += `<button id="orange">Change to Orange</button>`;

    const orangeBtn = document.querySelector('#orange');

    orangeBtn.style.width = 'auto';
    orangeBtn.style.height = '20px';
    orangeBtn.style.color = 'orange';

    orangeBtn.addEventListener('click', () => {document.body.style.backgroundColor = 'orange'});
}

const addList = () => {
    document.body.innerHTML += `<ol></ol>`;

    const list = document.querySelector('ol');

    for (let i = 1; i <= 20; i++) {
        if (i % 2) {
            list.innerHTML += `<li style="background-color: purple;">${i}</li>`;
        } else {
            list.innerHTML += `<li style="background-color: green;">${i}</li>`;
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    changeBackGround();
    addList();
    addButton();
});
