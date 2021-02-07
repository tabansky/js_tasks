const tableBody = document.getElementById('table-body');
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8'];
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

const generateTable = () => {
    let count = false;

    letters.forEach((letter, index) => {
        tableBody.innerHTML += `<tr id="${letter}"></tr>`;
        count = !count;

        numbers.forEach((number, i) => {
            if (count) {
                document.getElementById(letter).innerHTML +=
                    `<td id="${letter + number}" style="background: brown">${letter + number}</td>`;
                count = false;
            } else {
                document.getElementById(letter).innerHTML +=
                    `<td id="${letter + number}">${letter + number}</td>`;
                count = true;
            }

        });
    });
};



document.addEventListener('DOMContentLoaded', () => {
    generateTable();
});
