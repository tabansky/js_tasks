let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

const getSum = (salaries) => {
    let sum = 0;

    for (const key in salaries) {
        sum += salaries[key];
    }

    return sum;
}

console.log(getSum(salaries));
