const handlingError = (x, y) => {
    try {
        const n = x / y;

        if (n === Infinity || null) {
            throw new Error('Делить на нуль нельзя!');
        }
    } catch (e) {
        console.log(e.message);
    } finally {
        console.log(x);
    }
}

handlingError(10, 0);
