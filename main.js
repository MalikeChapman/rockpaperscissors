function letsPlay(){
    const numberOfRounds = parseInt(prompt("Hello, please enter the number of rounds of rock paper scissors you want to play"));
    let playerWinTotal = 0;
    let currentRound = 1;
    while(currentRound <= numberOfRounds)
    {
        console.log(`Round ${currentRound} begin!`)
        let computerChoice = computerSelection();
        let playerChoice = playerSelection();
        let outcome = determineWinner(computerChoice, playerChoice);
        
        if (outcome === "win"){
            playerWinTotal++;
        }
        currentRound++;
    }
    console.log(`PLayer won ${playerWinTotal} rounds which is ${playerWinTotal / numberOfRounds}%`)


}
function computerSelection(){
    const random = Math.floor(Math.random() * 3);
    let choice;
    switch (random) {
        case 1:
            {
                choice = "rock";
                break;

            }
            case 2:
                {
                    choice = "paper";
                    break;
                }
            case 3: 
            {
                choice = "scissors"
                break;
            }
        
    
        default:
            break;
    }
    return choice;

}
function playerSelection(){
    let choice = prompt("Please enter rock, paper or scissors");
    choice = choice.toLowerCase();
    console.log(choice);
    if((choice != "rock") && (choice != "paper") && (choice != "scissors"))
    {
        choice = invalidSelection(choice);
    }
    return choice;
    
}
function invalidSelection(choice){
    let invalid = true;
    while(invalid){
       choice = prompt("You have previously entered an invalid selection! Please enter rock, paper, or scissors");
       if((choice === "rock") || (choice === "paper") || (choice === "scissors")){
           invalid = false;
           break;
       } else if (choice === null || choice === ""){
           throw err;
       }
       
    }
    return choice;
}
function determineWinner(computerChoice, playerChoice){
    let outcome;
    switch (playerChoice) {
        case "rock": 
        {
            if(computerChoice === "rock"){
                console.log("its a draw!")
                outcome = "draw";
            } else if (computerChoice === "paper")
            {
                console.log("Paper covers rock! Player loses");
                outcome = "loss";
            } else {
                console.log("Rock beats scissor PLayer wins!");
                outcome = "win";
                
            }
            break;
        }
        case "paper":
            {
                if(computerChoice === "rock"){
                    console.log("Paper covers rock! Player wins");
                    outcome = "win";
                } else if (computerChoice === "paper")
                {
                    console.log("its a draw!")
                    outcome = "draw";
                } else {
                    console.log("Scissor beats paper. Player losses!");
                    outcome = "loss";
                    
                }
                break;
      
            }
        case "scissors":
                {
                    if(computerChoice === "rock"){
                        console.log("Rock beats scissor! Player losses");
                        outcome = "loss";
                    } else if (computerChoice === "paper")
                    {
                        console.log("Scissors beats paper! Player wins!")
                        outcome = "win";
                    } else {
                        console.log("it's a draw");
                        outcome = "draw";
                        
                    }
                    break;
       
                }
    }
    return outcome;

}

letsPlay();
