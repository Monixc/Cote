let date = require("fs").readFileSync(0).toString().trim().split("-");

const m = date[0];
const d = date[1];
const y = date[2];

console.log(y + "." + m + "." + d);