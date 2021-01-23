const extractCurrencyValue = (str) => {
    let result = '';

    [...str].forEach(c => {
        if (!isNaN(c)) {
            result += c;
        }
    });

    return result.trim();
}

console.log(extractCurrencyValue('$  120'));