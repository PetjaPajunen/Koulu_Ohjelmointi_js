
const integers = [];

while(integers.length < 3){
    let number = parseInt(prompt("Give me 3 numbers"));
    integers.push(number);
}

function summary(integers){
    let sum = 0;
    for(let i = 0; i < integers.length; i++){
        sum = sum + integers[i];
    }

    return sum;
}

function product(integers){
    let pro = 1;
    for(let i = 0; i < integers.length; i++){
        pro = pro * integers[i];
    }

    return pro;
}

function Average(integers){
    let ave = 0;
    for(let i = 0; i < integers.length; i++){
        ave = ave + integers[i];
    }
    ave = ave / integers.length;

    return parseInt(ave);
}

document.querySelector("#result").innerHTML = `Sum = ${summary(integers)}, Product = ${product(integers)}, Average = ${Average(integers)}`;