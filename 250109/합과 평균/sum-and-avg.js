const input = require("fs").readFileSync(0).toString().split(" ").map(Number);

const [a, b] = input;

console.log(a + b, ((a + b)/2).toFixed(1));
