function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
let a = getRandom(0, 100);
let b = getRandom(0, 100);
let c = getRandom(0, 100);

console.log("Max: " + Math.max(a, b, c));
console.log("Max: " + Math.min(a, b, c));
