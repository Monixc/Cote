const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

for (let i = 0; i < input.length; i++) {
  //배열의 각 요소를 숫자로 변환한 새 배열을 반환합니다
  let [A, B] = input[i].split(" ").map((item) => +item);

  if (A + B === 0) {
    break;
  } else console.log(A + B);
}
