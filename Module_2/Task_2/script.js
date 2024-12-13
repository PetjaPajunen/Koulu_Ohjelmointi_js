
let numberOfParticipants = parseInt(prompt("Number of participants?"))
let nameOfParticipants = []

for (let i = 0; i < numberOfParticipants; i++){
    let name = prompt("Name of participant " + (i + 1));
    nameOfParticipants.push(name);
}


function sortedNames(names){
    return names.sort()
}


function useList(listName, names){
    const list = document.getElementById(listName);
    
    let sortedNameList = sortedNames(nameOfParticipants);

    for(let i = 0; i < sortedNameList.length; i++){
        const newItem = document.createElement("li");
        
        newItem.textContent = sortedNameList[i]
        list.appendChild(newItem)
    }
}

useList("nameList", nameOfParticipants)