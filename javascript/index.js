function getComputerCoice(){
    let choices=['rock', 'paper', 'scissor'];
    let randomNum = getRandomInt(0, 2);
    return choices[randomNum];

}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}


function gameWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'A tie';
    }

    switch (playerSelection) {
        case 'rock':
            if (computerSelection === 'paper') {
                return 'You lose: paper beats rock';
            } else {
                return 'You win: rock beats scissor';
            }
        case 'paper':
            if (computerSelection === 'rock') {
                return 'You win: paper beats rock';
            } else {
                return 'You lose: scissor beats paper';
            }
        case 'scissor':
            if (computerSelection === 'paper') {
                return 'You win: scissor beats paper';
            } else {
                return 'You lose: rock beats scissor';
            }
        default:
            return 'Invalid choice';
    }
}


function playGame(){
    let userInput=prompt('Enter rock or paper or scissor: ').toLocaleLowerCase()
    let compuerInput=getComputerCoice();
    let winner=gameWinner(userInput, compuerInput)
    console.log('User choice     : ', userInput);
    console.log('computer choice : ', compuerInput);
    console.log(winner)

}
playGame()