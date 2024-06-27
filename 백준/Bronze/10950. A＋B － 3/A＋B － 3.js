const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const TESTCASE = input.shift();

for (let i = 0; i < TESTCASE; i++) {
  //배열의 각 요소를 숫자로 변환한 새 배열을 반환합니다
  let [A, B] = input[i].split(" ").map((item) => +item);
  console.log(A + B);
}
