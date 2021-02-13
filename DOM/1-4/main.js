const changeBackGround = () => {
    document.body.style.backgroundColor = 'red';
    setTimeout(() => document.body.style.backgroundColor = 'green', 3000);
};

const addButton = () => {
    const btn = document.createElement('button');

    btn.setAttribute('id', 'orange');
    btn.style.width = 'auto';
    btn.style.height = '20px';
    btn.style.color = 'orange';
    btn.innerText = 'Orange';
    document.body.appendChild(btn);
}

const addList = () => {
    const list = document.createElement('ol');

    for (let i = 1; i <= 20; i++) {
        if (i % 2) {
            const li = document.createElement('li');
            li.style.backgroundColor = 'purple';
            list.append(li);
        } else {
            const li = document.createElement('li');
            li.style.backgroundColor = 'green';
            list.append(li);
        }
    }

    document.body.appendChild(list);
}

document.addEventListener('DOMContentLoaded', () => {
    changeBackGround();
    addList();
    addButton();
    document.getElementById('orange').addEventListener('click', () => {
        document.body.style.backgroundColor = 'orange';
    });
});
