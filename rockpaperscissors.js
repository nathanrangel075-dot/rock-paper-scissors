
function getComputerChoice(){

const choices = ["rock", "paper", "scissors"]; 
const randomIndex = Math.floor(Math.random() *choices.length); 

return choices[randomIndex]; 

/*return items[Math.floor(Math.random() * items.length)]*/


}

/*const compChoice = ["Rock", "Paper", "Scissors"];*/
/* const RandomChoice = getComputerChoice(computerChoice);
console.log(RandomChoice); */


function getHumanChoice(playerChoice){

return playerChoice;

/*
let humanChoice;
const validChoices = ["rock", "paper", "scissors"]; 


while(true){

    let input = prompt("Do you choose Rock, paper, or scissors?");

    if(input){

        input = input.toLowerCase();
    }

    if(validChoices.includes(input)){
        humanChoice = input;
        break;
    }
}

return humanChoice; */

}


/* const HumanChoice = getHumanChoice(); 

console.log(HumanChoice); */

 


function determineWinner(humanChoice, computerChoice){

    /* const humanChoices = getHumanChoice.toLowerCase();

    const computerChoices = getComputerChoice.toLowerCase(); */

    if(humanChoice === computerChoice){
        return "It's a tie!";

    }
    else if(
        (humanChoice === "rock" && computerChoice === "scissors")||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock"))
    {
        
        return "Human wins! " + humanChoice + " beats " + computerChoice + ".";
        
    }  

    else{
        
        return "Computer wins! " + computerChoice + " beats " + humanChoice + ".";
    }


    

}

function playRound (playerChoice) {
    const humanSelection = getHumanChoice(playerChoice);
    const computerSelection = getComputerChoice();
    const winner = determineWinner(humanSelection, computerSelection);


    if(winner.startsWith("Human wins!")){
        humanScore++;
    }else if (winner.startsWith("Computer wins!")){
        computerScore++;
    }

/*
return{
    humanChoice: humanSelection,
    computerChoice: computerSelection,
    winner: winner
};*/

updateResults(humanSelection, computerSelection, winner);

}

function updateResults(humanChoice, computerChoice, winner){

    const resultDiv = document.getElementById("result");
    const scoreDiv = document.getElementById("score");

    resultDiv.textContent = "Human chose " + humanChoice + ". Computer chose " + computerChoice + ". " + winner;

    scoreDiv.textContent = "Score - Human: " + humanScore + " |  Computer: " + computerScore;

    if(humanScore === 5){
        resultDiv.textContent = "Human wins the game!";
        resetGame();

    }else if(computerScore === 5){
        resultDiv.textContent = "Computer wins the game!";
        resetGame();
    }
}

function resetGame(){
    humanScore = 0;
    computerScore = 0;
    const scoreDiv = document.getElementById("score");
    scoreDiv.textContent = "Score - Human: 0 | Computer: 0";
}



/*playRound(humanSelection, computerSelection); */


/* function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    console.log("Game Start! Playing 5 rounds");
   

    for(i = 1; i <= 5; i++){
       
        const roundResult = playRound();
        console.log(roundResult);
        
        if(roundResult.winner.startsWith("Human wins! ")){
            humanScore++;
        }
        else if(roundResult.winner.startsWith("Computer wins! ")){
            computerScore++;
        }
        else{
            console.log("Round result: It's a tie. ");
        }

        console.log(`Current Score -> Human: ${humanScore} | Computer: ${computerScore}`);
        
    }


  console.log("\n--- Game Over! ---");
  console.log(`Final Scores: Player ${humanScore} | Computer ${computerScore}`);


  if(humanScore > computerScore){
    console.log("humans win the game!");
  }
  else if (computerScore > humanScore){
    console.log("Computer wins the game!");
  }else{
    console.log("The game is a tie!");
  }
}


playGame();

*/

let humanScore = 0;
let computerScore = 0;


const btn1 = document.createElement("button");
document.body.appendChild(btn1);
btn1.textContent = "Rock";
btn1.addEventListener("click", () => playRound("rock"));




const btn2 = document.createElement("button");
document.body.appendChild(btn2);
btn2.textContent = "Paper";
btn2.addEventListener("click", () => playRound("paper"));




const btn3 = document.createElement("button");
document.body.appendChild(btn3);
btn3.textContent = "Scissors";
btn3.addEventListener("click", () => playRound("scissors"));


const resultDiv = document.createElement("div");
resultDiv.id = "result";
document.body.appendChild(resultDiv);

const scoreDiv = document.createElement("div");
scoreDiv.id ="score";
scoreDiv.textContent = "Score - Human: 0 | Computer: 0";
document.body.appendChild(scoreDiv);