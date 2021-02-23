const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

const age = getRandom(5, 100);

if (!(age >= 14 && age <= 90)) {
    console.log('не находится');
}

if (age < 14 || age > 90) {
    console.log('не находится');
}