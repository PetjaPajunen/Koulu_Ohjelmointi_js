
let nickname = prompt("What is your name?");

let houses = [
    'Gryffindor',
    'Slytherin',
    'Hufflepuff',
    'Ravenclaw'];


function house(houses){
    let randInt = Math.floor(Math.random() * 4);
    let house = houses[randInt];
    return house;
}



document.querySelector("#result").innerHTML = `${nickname}, you are ${house(houses)} `;