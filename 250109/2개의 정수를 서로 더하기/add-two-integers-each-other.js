const input = require("fs").readFileSync(0).toString().split(" ").map(Number);

let [a, b] = input;

a += b;
b += a;

console.log(`${a} ${b}`);