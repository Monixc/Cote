let time = require("fs").readFileSync(0).toString().trim().split(":");
const h = Number(time[0]);
const m = Number(time[1]);

console.log(h + 1 + ":" + m);