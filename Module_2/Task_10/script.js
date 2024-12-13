
const numberOfCandidates = parseInt(prompt("Number of candidates"));
let candidates = [];
let results = []

for(let i = 0; i < numberOfCandidates; i++){
    let candidate = prompt("Name of particimant " + (i+1));
    candidates.push({name: candidate, votes: 0});
}

function countTheVotes(){
    const numberOfVotes = parseInt(prompt("Number of voters"));

    for(let i = 0; i < numberOfVotes; i++){
        let vote = prompt(`Who does voter- ${i+1} vote for`);
        
        if(vote == ""){
            //pass
        }
        else{
            for(let i = 0; i < numberOfCandidates; i++){
                if (candidates[i]["name"] == vote){
                   candidates[i]["votes"] += 1;
                }
           }
        }
    }
}

function winner(){
    candidates.sort((a, b) => b.votes - a.votes);
}

function printer(){
    console.log(`The winner is ${candidates[0]["name"]} with ${candidates[0]["votes"]} votes.`);
    console.log("Results:");
    for(let i = 1; i < numberOfCandidates; i++){
        console.log(`${candidates[i]["name"]}: ${candidates[0]["votes"]}`);
    }
}


countTheVotes();
winner();
printer();
