const input = require("fs").readFileSync(0).toString().split(" ").map(Number);
const [a, b, c] = input;

console.log(a + b + c);
console.log(parseInt((a + b + c)/3));