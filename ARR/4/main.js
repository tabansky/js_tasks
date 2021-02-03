const sumInputNumbers = (arr = [], data = prompt('введите значение')) => {
    if (data) {
        if (!isNaN(Number(data))) {
            arr.push(Number(data.replace(/\s/g, '')));
        }

        sumInputNumbers(arr);
    }

    return arr.reduce((accumulator, value) => accumulator + value);
}

console.log(sumInputNumbers());
