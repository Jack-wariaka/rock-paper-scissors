let humanScore = 0;
let computerScore = 0;
function getHumanChoice(){
    let choice;
    choice = prompt('rock paper or scissors?');
    choice = choice.toLowerCase();
    if (choice && (choice === "rock" || choice === "paper" || choice === "scissors")) {
        return choice;
    } else {
        alert('invalid choice');
    }
}

function getComputerChoice() {
    const min = 1;
    const max = 3;
    const num  = Math.floor(Math.random() * (max - min + 1)) + min;
    switch (num) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

function playRound(){
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();
    const humanWin = (humanChoice === "paper" && computerChoice === "rock" ||
                     humanChoice === "rock" && computerChoice === "scissors" ||
                     humanChoice === "scissors" && computerChoice === "paper");
    const computerWins = (humanChoice === "paper" && computerChoice === "scissors" ||
                     humanChoice === "rock" && computerChoice === "paper" ||
                     humanChoice === "scissors" && computerChoice === "rock");
    if (humanChoice === computerChoice) {
        alert(`its a tie you both chose ${humanChoice}`);
    }else if (humanWin){
        alert(`you win ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }else if (computerWins) {
        alert(`computer wins ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
}
function playGame(times){
    alert(`this is a rock, paper, scissors game make your choice first one to reach ${times} points win`);
    while (humanScore < times && computerScore < times){
        playRound();
    }
    alert(`your score is ${humanScore} \n
        computer score is ${computerScore}`);
}
playGame(3);