function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
const a = getRandom(0, 100);
const b = getRandom(0, 100);
const c = getRandom(0, 100);

console.log("Max: " + Math.max(a, b, c));
console.log("Max: " + Math.min(a, b, c));