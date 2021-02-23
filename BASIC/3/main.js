const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}
const a = getRandom(0, 100);
const b = getRandom(0, 100);
const c = getRandom(0, 100);

const arr = [a, b, c];
const sortedArr = arr.sort((a, b) => a - b);

const max1 = a > b ? (a > c ? a : c) : (b > c ? b : c);
const min1 = a < b ? (a < c ? a : c) : (b < c ? b : c);
const max2 = arr.reduce((a, b) => a > b ? a : b);
const min2 = arr.reduce((a, b) => a < b ? a : b);
const max3 = sortedArr.pop();
const min3 = sortedArr.shift();

/*console.log("Max: " + Math.max(a, b, c));
console.log("Min: " + Math.min(a, b, c));*/
console.log('Max: ' + max3);
console.log('Min: ' + min3);

