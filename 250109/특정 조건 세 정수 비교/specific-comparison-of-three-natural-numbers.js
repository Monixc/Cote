const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);
let [a, b, c] = input;

console.log(a <= b && a <= c ? 1 : 0, a === b && a === c ? 1 : 0);
