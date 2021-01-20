function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
const n = getRandom(0, 9);

switch (n) {
    case 0:
        console.log('нуль');
        break;
    case 1:
        console.log('один');
        break;
    case 2:
        console.log('два');
        break;
    case 3:
        console.log('три');
        break;
    case 4:
        console.log('четыре');
        break;
    case 5:
        console.log('пять');
        break;
    case 6:
        console.log('шесть');
        break;
    case 7:
        console.log('семь');
        break;
    case 8:
        console.log('восемь');
        break;
    case 9:
        console.log('девять');
        break;
}