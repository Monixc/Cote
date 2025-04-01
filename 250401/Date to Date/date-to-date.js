const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [m1, d1, m2, d2] = input[0].split(' ').map(Number);

function numOfDays(m, d){
    let total_days = 0;
    const days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    for(let i = 1; i < m; i++){
        total_days += days[i];
    }

    total_days += d;

    return total_days;
}

const total_days = numOfDays(m2, d2) - numOfDays(m1, d1) + 1;
console.log(total_days);