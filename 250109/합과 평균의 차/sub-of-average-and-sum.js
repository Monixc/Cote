const input = require("fs").readFileSync(0).toString().split(" ").map(Number);

const [a, b, c] = input;

const sum = a + b + c;
const avg = (a + b + c)/3;
const sub = sum - avg;

console.log("%d\n%d\n%d", sum, avg, sub);