//computer's random choice
const choices = ['rock', 'paper', 'scissors'];
const randChoice = () => Math.floor(Math.random() * choices.length);
const getComputerChoice = () => choices[(randChoice())];
const computerSelection = getComputerChoice();

//player's input/choice
const playerSelection = getPlayerChoice()
function getPlayerChoice() {
      let choice = prompt("Make your selection: Rock, Paper, Scissors")
  return choice.toLowerCase()  
}

//Goal = console.log() to display the results of each round and the winner at the end.
//5 round game that keeps score and reports a winner or loser at the end

let win;
let loss;
let tie;

 let computerScore = 0
 let playerScore = 0

function playRound(playerSelection, computerSelection) {
  console.log('Your choice is ' + playerSelection + '.' + ' Computer\'s choice is ' + computerSelection + '.');
 
  if (computerSelection === playerSelection) {
      console.log('It\'s a tie!');
     
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
      console.log('You lose! Paper beats rock!!');
      computerScore++;
     
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
     console.log ('You win! Rock beats scissors!');
     playerScore++;
   
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
     console.log ('You win! Paper beats rock!!');
     playerScore++;
   
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
     console.log ('You lose! Scissors beats paper');
     computerScore++;
     
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
     console.log ('You win! Scissors beats paper!');
     playerScore++;
   
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
     console.log ('You lose! Rock beats scissors!')
     computerScore++;
   
  } else {
   console.log ('Invalid choice! Please choose again.')
   }
   let score = console.log('Your current score is ' + playerScore + '. Computer\'s current score is ' + computerScore +   '.');
   
}
 
let determineWinner = () => {
      if (playerScore > computerScore) {
      console.log('Game over. You are the winner!! Congrats!')
  }
  else if (playerScore < computerScore) {
      console.log ('Game over. You lose!!! Sucks!!')
  }
  else if (playerScore == computerScore) {
      console.log ('Game over. It\'s a tie!! Play again?')
  }
}

//5 rounds
function game() {
  for (let i = 1; i < 6; i++) {
    console.log('Round '+ i)
    playRound(getPlayerChoice(), getComputerChoice());
  }
  determineWinner();
}

game();