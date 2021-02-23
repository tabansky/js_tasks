const sumInputNumbers = (arr = [], data = +prompt('введите значение')) => {
    if (data) {
        arr.push(data);
        sumInputNumbers(arr);
    }

    if (!arr.length) {
        throw new Error('Пустой массив')
    }

    return arr.reduce((accumulator, value) => accumulator + value)
}

console.log(sumInputNumbers());
