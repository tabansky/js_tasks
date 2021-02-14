let json = {};

const extractCurrencyValue = (str) => {
    let result = '';

    [...str].forEach(c => {
        if (!isNaN(c)) {
            result += c;
        }
    });

    return +result.trim();
}



const calculateSalary = (json) => {
    const salaries = [];

    for (const key of Object.keys(json)) {
        salaries.push(extractCurrencyValue(json[key].salary));
    }

    const sum = salaries.reduce((accumulator, value) => accumulator + value);
    const max = Math.max(...salaries);
    const min = Math.min(...salaries);
    const avg = sum / json.length;

    return {sum: sum, avg: avg, max: max, min: min};
}

const show = (json) => {
    const salaries = calculateSalary(json);
    const workers = document.createElement('div');
    const divSalaries = document.createElement('div');

    for (const key of Object.keys(json)) {
        const li = document.createElement('li');

        for (const key2 of Object.keys(json[key].fio)) {
            li.innerText += `${key2}: ${json[key].fio[key2]}; `;
        }

        workers.appendChild(li);
    }

    for (const key of Object.keys(salaries)) {
        const div = document.createElement('div');

        div.innerText = `${key}: ${salaries[key]};`;
        divSalaries.appendChild(div);
    }

    document.body.appendChild(workers);
    document.body.appendChild(divSalaries);

}

const fetchData = async () => {
    await fetch('data.json')
        .then(response => response.json())
        .then(data => {
            json = data;
        });
}



document.addEventListener('DOMContentLoaded', () => {
    fetchData().then(r => show(json.workers));
});
