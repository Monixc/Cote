const input = require("fs").readFileSync(0).toString().split("\n").map(Number);

let [a, b] = input;

console.log(`${a + 87}\n${b%10}`);