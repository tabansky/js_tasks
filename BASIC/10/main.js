const dividers = (number) => {
    const div = [];

    Math.floor(number / 2)
    for (let i = 1; i <= Math.floor(number / 2); i++) {
        if (!(number % i)) {
            div.push(i);
        }
    }
    div.push(number);

    return div;
/*
    return Array.from({length: number / 2},(_, i) => i + 1).filter(div => !(number % div)).concat(number);
    return [...Array(Math.floor(number / 2)).keys()].map( i => ++i).filter(div => !(number % div)).concat(number);
    return [...Array(Math.floor(number / 2 + 1)).keys()].slice(1).filter(div => !(number % div)).concat(number);
*/
}

console.log(dividers(10));
