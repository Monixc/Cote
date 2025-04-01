const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [m1, d1, m2, d2] = input[0].split(' ').map(Number);
// Please Write your code here.
const day = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri' , 'Sat', 'Sun'];
const days_of_month = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function numOfDays(m, d) {
    let total_days = 0;
    
    for(let i = 1; i < m; i++){
        total_days += days_of_month[i];
    }

    return total_days + d;
}

function getElementByIndex(arr, index){
    if(index >= 0){
        return arr[index];
    }

    else{
        const reverseIndex = arr.length + index;
        return arr[reverseIndex];
    }
}

const numOfStart = numOfDays(m1, d1);
const numOfEnd = numOfDays(m2, d2);

console.log(getElementByIndex(day, (numOfEnd-numOfStart) % 7));