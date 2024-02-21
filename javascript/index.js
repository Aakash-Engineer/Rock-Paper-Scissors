let playerScore = 0;
let computerScore = 0;
let draw = 0;


function updateScore(winner) {
    switch(winner){
        case 'You win: rock beats scissor':
        case 'You win: paper beats rock':
        case 'You win: scissor beats paper':
            playerScore++;
            break;
        case 'You lose: rock beats scissor':
        case 'You lose: paper beats rock':
        case 'You lose: scissor beats paper':
            computerScore++;
            break;
        case 'A tie':
            draw++;
            break;
        default:
            break;
    }   
}

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


function playGame(n){
    let userInput=n;
    let compuerInput=getComputerCoice();
    let winner=gameWinner(userInput, compuerInput)
    let winnerContainer=document.querySelector('#winner_container');
    winnerContainer.innerHTML=winner;
    updateScore(winner);
    let playerWinContainer=document.querySelector('#win');
    let playerDrawContainer=document.querySelector('#draw');
    let playerLoseContainer=document.querySelector('#lose');

    playerWinContainer.innerHTML=playerScore;
    playerDrawContainer.innerHTML=draw;
    playerLoseContainer.innerHTML=computerScore;
}

let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissor = document.querySelector('#scissor');

rock.addEventListener('click', ()=>playGame('rock'))
paper.addEventListener('click',()=> playGame('paper'))
scissor.addEventListener('click', ()=>playGame('scissor'))