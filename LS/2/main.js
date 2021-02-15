const todosTable = document.getElementById('todos');
const input = document.getElementById('input');
const todoList = {};

const showTodos = (id) => {
    const tr = document.createElement('tr');
    const tdValue = document.createElement('td');
    const tdClose = document.createElement('td');

    tdValue.innerText = id;
    tdClose.setAttribute('class', 'close');
    tdClose.setAttribute('id', id);
    tdClose.innerHTML = `&#10006`;
    tr.append(tdValue);
    tr.append(tdClose);

    todoList[tdValue.innerText] = tdValue.innerText;
    todosTable.appendChild(tr);
}

const loadFromLocalStorage = () => {
    for (const todo of Object.keys(localStorage)) {
        showTodos(localStorage.getItem(todo));
    }
}

const saveInLocalStorage = () => {
    localStorage.clear();

    for (const todo in todoList) {
        localStorage.setItem(todo, todo);
    }
}

const addToList = (e) => {
    if (e.key === 'Enter' && input.value) {
        showTodos(input.value);
        saveInLocalStorage();
        input.value = '';
    }

    listenToDel();
};

const listenToDel = () => {
    const deleteButtons = document.querySelectorAll('.close');

    deleteButtons.forEach((btn, index) => {
        deleteButtons[index].addEventListener('click', () => {
            btn.parentElement.remove();
            delete todoList[`${btn.id}`];
            saveInLocalStorage();
        });
    });
};

document.addEventListener('DOMContentLoaded', () => {
    loadFromLocalStorage();
    input.addEventListener('keydown', (e) => {
        addToList(e);
    });
    listenToDel();
});
