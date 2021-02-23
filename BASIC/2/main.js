const calculateSum = (a, b) => {
    let sum = 0;

    do {
        if (!(a % 2)) {
            sum += a;
        }

        a++;
    } while (!(a > b));

    return sum;

/*
    return Array.from({length: b},(_, i) => i + 1).slice(a - 1).filter(n => !(n % 2)).reduce((acc, val) => acc + val);
*/
}

console.log(calculateSum(2, 10));
