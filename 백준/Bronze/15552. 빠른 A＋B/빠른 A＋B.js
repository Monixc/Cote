const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const TESTCASE = input.shift();
let answer = "";

for (let i = 0; i < TESTCASE; i++) {
  let [A, B] = input[i].split(" ").map((item) => +item);
  answer += A + B + "\n";
}

console.log(answer);
