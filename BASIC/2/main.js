function calculateSum(a, b) {
    let sum = 0;
    while (a !== b + 1) {
        if (a % 2 === 0) {
            sum += a;
        }
        a++;
    }

    return sum;
}

console.log(calculateSum(2, 10));