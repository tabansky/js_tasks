const arr = [2, 4, 5, 9]

const square = (x) => {
    return x * x;
}

const convert = (fn, array) => {
    return array.map(value => value * value);
}

console.log(arr);
console.log(convert(square, arr));
