const divideNumbers = (a, b) => {
    const n = a / b;

    if (n === Infinity || null) {
        throw new Error('Делить на нуль нельзя!');
    }
}

try {
    divideNumbers(2, 0)
} catch (e) {
    console.log(e.message);
}
