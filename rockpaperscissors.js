
function getComputerChoice(computerChoice){

const choices = ["rock", "paper", "scissors"]; 
const randomIndex = Math.floor(Math.random() *choices.length); 

return choices[randomIndex]; 

/*return items[Math.floor(Math.random() * items.length)]*/


}

/*const compChoice = ["Rock", "Paper", "Scissors"];*/
/* const RandomChoice = getComputerChoice(computerChoice);
console.log(RandomChoice); */


function getHumanChoice(){

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

return humanChoice;

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

function playRound () {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    const winner = determineWinner(humanSelection, computerSelection);


return{
    humanChoice: humanSelection,
    computerChoice: computerSelection,
    winner: winner
};

}


/*playRound(humanSelection, computerSelection); */


function playGame(){
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


