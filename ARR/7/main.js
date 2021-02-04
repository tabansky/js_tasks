const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const extract = (start, end) => {
    return arr.slice(start, end + 1);
}
console.log(extract(2, 4));
