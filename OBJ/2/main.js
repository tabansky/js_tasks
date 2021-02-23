const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

const getSum = (salaries) => {
    return Object.values(salaries).reduce((accumulator, value) => accumulator + value);
}

console.log(getSum(salaries));
