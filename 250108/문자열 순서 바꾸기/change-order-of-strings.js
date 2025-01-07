let arr = require("fs").readFileSync(0).toString().trim().split("\n");

const s = arr[0];
const t = arr[1];


console.log(t + "\n"+ s);