
const concatList = ["Johny", "DeeDee", "Marky"]

function concat(concatList){
    let concatWord = ""
    for (let i = 0; i < concatList.length; i++){
        concatWord += concatList[i]
    }
    return concatWord
}

document.querySelector("#target").innerHTML = concat(concatList)
