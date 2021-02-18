const changeBackGround = () => {
    document.body.style.backgroundColor = 'red';
    setTimeout(() => document.body.style.backgroundColor = 'green', 3000);
};

const addStylizedButton = () => {
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
        const li = document.createElement('li');

        li.style.backgroundColor = i % 2 ? 'purple' : 'green';
        list.append(li);
    }

    document.body.appendChild(list);
}

document.addEventListener('DOMContentLoaded', () => {
    changeBackGround();
    addList();
    addStylizedButton();
    document.getElementById('orange').addEventListener('click', () => {
        document.body.style.backgroundColor = 'orange';
    });
});
