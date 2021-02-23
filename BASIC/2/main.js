const calculateSum = (a, b) => {
    let sum = 0;

    while (a !== b + 1) {
        if (!(a % 2)) {
            sum += a;
        }

        //todo запрещено меня пераметры функции
        a++;
    }

    return sum;
}

console.log(calculateSum(2, 10));
