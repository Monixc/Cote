const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));
//map을 사용해 각 원소들을 공백으로 나눈 후 숫자로 변환한다.

//행렬의 크기 N*M을 input에서 미리 꺼내둠
const [N, M] = input.shift();

//2차원 배열 선언
let arr = new Array(N).fill().map(() => new Array(M).fill(0));

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    arr[i][j] = input[i][j] + input[i + N][j];
  }
}

let answer = "";
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[0].length; j++) {
    answer += arr[i][j] + " ";
  }
  answer += "\n";
}

console.log(answer.trim());
