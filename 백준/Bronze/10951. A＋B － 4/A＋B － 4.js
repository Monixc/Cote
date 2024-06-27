const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

for (let i = 0; i < input.length; i++) {
  let [A, B] = input[i].split(" ").map((item) => +item);
  console.log(A + B);
}
