const tableBody = document.getElementById('table-body');
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8'];
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

const generateTable = () => {

    letters.forEach((letter, index) => {
        tableBody.innerHTML += `<tr id="${letter}"></tr>`;

        numbers.forEach((number, i) => {
            if ((index % 2) && !(i % 2)) {
                document.getElementById(letter).innerHTML +=
                    `<td id="${letter + number}" style="background: brown">${letter + number}</td>`;

            } else if (!(index % 2) && (i % 2)){
                document.getElementById(letter).innerHTML +=
                    `<td id="${letter + number}" style="background: brown">${letter + number}</td>`;
            } else {
                document.getElementById(letter).innerHTML +=
                    `<td id="${letter + number}">${letter + number}</td>`;
            }

        });
    });
};



document.addEventListener('DOMContentLoaded', () => {
    generateTable();
});
