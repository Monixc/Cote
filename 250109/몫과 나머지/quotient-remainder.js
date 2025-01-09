const input = require("fs").readFileSync(0).toString().split(" ");

const a = Number(input[0]);
const b = Number(input[1]);

console.log("%d...%d", parseInt(a / b), a % b);