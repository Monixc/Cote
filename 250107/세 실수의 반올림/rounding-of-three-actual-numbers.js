let arr = require("fs").readFileSync(0).toString().split("\n");

const a = Number(arr[0]);
const b = Number(arr[1]);
const c = Number(arr[2]);

console.log(a.toFixed(3) + "\n" + b.toFixed(3) + "\n" + c.toFixed(3));