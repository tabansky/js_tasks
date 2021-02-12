const sumInputNumbers = (arr = [], data = +prompt('введите значение')) => {
    if (!isNaN(data) && data) {
        arr.push(data);
        sumInputNumbers(arr);
    }

    return arr.length ? arr.reduce((accumulator, value) => accumulator + value) : new Error('Пустой массив');
}

console.log(sumInputNumbers());
