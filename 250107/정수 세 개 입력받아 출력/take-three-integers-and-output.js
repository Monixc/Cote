let arr = require("fs").readFileSync(0).toString();

arr = arr.split("\n");

const c = arr[1];

arr = arr[0].split(" ");

const a = arr[0];
const b = arr[1];

console.log(a, b, c);