const fs = require("fs");
let input = Number(fs.readFileSync(0).toString());

console.log(input === 100 ? "pass" : "failure");
