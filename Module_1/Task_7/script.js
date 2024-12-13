
amount = prompt("How many dice?");


function rolls(amount){
    dicearr = [];
    for(let i = 0; i < amount; i++){
        num = dice(6);
        dicearr.push(num);
    }
    sum = 0
    dicearr.forEach(x => {
        sum += x;
    });

    return sum
}

function dice(max){
    return Math.floor(Math.random()*max);
}

document.querySelector("#result").innerHTML = "Sum of the dice: " + rolls(amount)