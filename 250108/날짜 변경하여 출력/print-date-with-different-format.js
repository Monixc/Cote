let date = require("fs").readFileSync(0).toString().trim().split(".");

const y = date[0];
const d = date[1];
const m = date[2];

console.log(d + "-" + m + "-" + y);