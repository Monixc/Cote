const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [m1, d1, m2, d2] = input[0].split(' ').map(Number);

//요일
const A = input[1];

//요일 배열
const day = ["Mon", "Tue", "Web", "Thu", "Fri", "Sat", "Sun"];

//월별 날짜수 
const days = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

//A에 입력된 날짜의 day 인덱스 
let indexOfDay = 0;

//입력된 날(월, 일)을 일수로 변환
function numOfDays(m, d){
    totalDays = 0;
    
    for(let i = 0; i < m; i++){
        totalDays += days[i];
    }

    return totalDays + d;
}


//A와 일치하는 배열 요소를 찾아서, indexOfDay 변수에 저장
for(let i = 0; i < day.length; i++){
    if(A === day[i]){
        indexOfDay = i;
    }
}

//시작일과 종료일 간 차이를 계산
const diff = numOfDays(m2, d2) - numOfDays(m1, d1);
let cnt = Math.floor(diff / 7);
const remainder = diff % 7;

if(remainder >= indexOfDay){
    cnt++;
}

console.log(cnt);