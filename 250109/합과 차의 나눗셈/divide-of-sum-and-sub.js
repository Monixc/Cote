const input = require("fs").readFileSync(0).toString().split(" ").map(Number);

const [a, b] = input;
const sum = a + b;
const sub = a - b;

console.log((sum / sub).toFixed(2))