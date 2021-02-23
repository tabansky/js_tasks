const extractCurrencyValue = (str) => {
    return [...str].filter(c => !isNaN(c)).join('').trim();
}

console.log(extractCurrencyValue('$  120  '));
