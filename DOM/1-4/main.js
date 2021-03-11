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


const createList = () => {
    let i = 0;
    const list = document.createElement('ol');

    const interval = setInterval(() => {
        if (i > 20) clearInterval(interval);

        const li = document.createElement('li');
        li.style.backgroundColor = i++ % 2 ? 'purple' : 'green';
        list.append(li);
    }, 2000);

    document.body.appendChild(list);
}

document.addEventListener('DOMContentLoaded', () => {
    changeBackGround();
    createList();
    addStylizedButton();
    document.getElementById('orange').addEventListener('click', () => {
        document.body.style.backgroundColor = 'orange';
    });
});
