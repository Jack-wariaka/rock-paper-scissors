function getHumanChoice(){
    let choice;
    alert('this is a rock paper, scissors game make your choice');
    choice = prompt('rock paper or scissors?');
    if (choice) {
        choice = choice.toLowerCase();
    } else {
        console.log('please enter a valid choice')
    }
    let isValid;
    isValid = choice === "rock" || choice === "paper" || choice === "scissors";
    if (isValid) {
        return choice;
    } else{
        return("please enter a valid choice");
    }
}

let choice = getHumanChoice();
alert(choice);