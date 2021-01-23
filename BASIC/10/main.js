const dividers = (number) => {
    let div = [];

    for (let i = 1; i <= Math.floor(number / 2); i++) {
        if (!(number % i)) {
            div.push(i);
        }
    }
    div.push(number);

    return div;
}

console.log(dividers(10));