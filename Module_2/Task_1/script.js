
let input = prompt("Give me 5 numbers");
let numbers = input.split("").map(Number);

function reverse(){
    numbersReverse = []
    for(let i = numbers.length-1; i > -1; i--){
        numbersReverse.push(numbers[i]);
    }
    return numbersReverse
}

console.log(reverse())