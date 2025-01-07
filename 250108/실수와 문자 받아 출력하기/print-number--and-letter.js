let arr = require("fs").readFileSync(0).toString().trim();

arr = arr.split("\n");

const c = arr[0];
const a = Number(arr[1]);
const b = Number(arr[2]);

console.log(c + "\n" + a.toFixed(2) + "\n" + b.toFixed(2));
