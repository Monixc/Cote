const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().trim();

let str = input.toString();
result = str.charCodeAt(0);
console.log(result);
