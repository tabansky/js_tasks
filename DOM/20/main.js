const users = document.getElementById('users');
const input = document.getElementById('input');
const sendBtn = document.getElementById('btn');

let deleteButtons;

const addToList = () => {
    sendBtn.addEventListener('click', () => {
        if (input.value) {
            users.innerHTML +=
                `<tr>
                <td>${input.value}</td><td id="${input.value}" class="close">&#10006;</td>
             </tr>`;
            input.value = '';
        }

        listenToDel();
    });
};

const listenToDel = () => {
    deleteButtons = document.querySelectorAll('.close');

    deleteButtons.forEach((btn, index) => {
        deleteButtons[index].addEventListener('click', (e) => {
            btn.parentElement.remove();
        })
    });
};

document.addEventListener('DOMContentLoaded', () => {
    addToList();
});
