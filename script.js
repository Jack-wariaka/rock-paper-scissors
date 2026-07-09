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

function getComputerChoice() {
    const min = 1;
    const max = 4;
    const num  = Math.floor(Math.random() * (max - min)) + min;
    return(num);
}

function test(num){
    let count = 0;
    let randomNum;
    while (randomNum != num){
        randomNum = getComputerChoice();
        count++;
        if (count ===  10000000){
            console.log("impossible");
            break;
        }
    }
    return count;
}
console.log(test(4));
