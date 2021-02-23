const tableBody = document.querySelector('#table-body');
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8'];
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

const generateTable = () => {
    letters.forEach((letter, index) => {
        const tr = document.createElement('tr');

        numbers.forEach((number, i) => {
            const td = document.createElement('td');

            if ((index + i) % 2) {
                console.log(index + i);
                td.style.backgroundColor = 'brown';
            }

            td.innerHTML = letter + number;
            tr.append(td);
        });

        tableBody.append(tr);
    });
};

document.addEventListener('DOMContentLoaded', () => {
    generateTable();
});
