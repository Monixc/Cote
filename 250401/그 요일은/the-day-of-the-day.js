const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [m1, d1, m2, d2] = input[0].split(' ').map(Number);
const A = input[1];

const day = ["Mon", "Tue", "Web", "Thu", "Fri", "Sat", "Sun"];
const days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let indexOfDay = 0;

// Please Write your code here.
function numOfDays(m, d){
    totalDays = 0;
    
    for(let i = 0; i < m; i++){
        totalDays += days[i];
    }

    return totalDays + d;
}



for(let i = 0; i <= day.length; i++){
    if(A === day[i]){
        indexOfDay = i + 1;
    }
}

const diff = numOfDays(m2, d2) - numOfDays(m1, d1);
console.log(parseInt((diff + indexOfDay) / 7));