let humanScore = 0;
let computerScore = 0;
function getHumanChoice(){
    let choice;
    alert('this is a rock paper, scissors game make your choice');
    choice = prompt('rock paper or scissors?');
    if (choice) {
        choice = choice.toLowerCase();
    } else {
        alert('please enter a valid choice')
    }
    let isValid;
    isValid = choice === "rock" || choice === "paper" || choice === "scissors";
    if (isValid) {
        return choice;
    } else{
        alert("please enter a valid choice");
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
    if (humanChoice === computerChoice) {
        alert(`its a tie you both chose ${humanChoice}`);
    } else if (humanChoice === "rock" && computerChoice === "scissors" |
               humanChoice === "paper" && computerChoice === "rock" |
               humanChoice === "scissors" && computerChoice === "paper"){
                alert(`you win! ${humanChoice} beats ${computerChoice}`);
                humanScore++;
               }else {
                alert(`computer wins ${computerChoice} beats ${humanChoice}`);
                computerScore++;
               }
}
function playGame(times){
    while (times > 0){
        playRound();
        times--;
    }
    alert(`your score is ${humanScore} \n
        computer score is ${computerScore}`);
}
playGame(3);