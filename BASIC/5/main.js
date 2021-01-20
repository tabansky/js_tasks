function extractCurrencyValue(str) {
    let result = '';

    [...str].forEach(c => {
        if (!isNaN(c)) {
            result += c;
        }
    });

    return result;
}

console.log(extractCurrencyValue('$120'))