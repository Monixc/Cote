const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().trim();

let result = " ";
if (input === "A+") result = 4.3;
else if (input === "A0") result = 4.0;
else if (input === "A-") result = 3.7;
else if (input === "B+") result = 3.3;
else if (input === "B0") result = 3.0;
else if (input === "B-") result = 2.7;
else if (input === "C+") result = 2.3;
else if (input === "C0") result = 2.0;
else if (input === "C-") result = 1.7;
else if (input === "D+") result = 1.3;
else if (input === "D0") result = 1.0;
else if (input === "D-") result = 0.7;
else if (input === "F") result = 0.0;

console.log(result.toFixed(1));
