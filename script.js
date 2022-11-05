const choices = ['rock', 'paper', 'scissors'];

const randChoice = () => Math.floor(Math.random() * choices.length);
const getComputerChoice = () => choices[(randChoice())];

console.log(getComputerChoice());
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (computerSelection == playerSelection) {
    return 'It\'s a tie!'
  }
  else if (playerSelection == 'rock' && computerSelection == 'paper') {
    return 'You lose! Paper beats rock!!'
  }
  else if (playerSelection == 'rock' && computerSelection == 'scissors') {
    return 'You win! Rock beats scissors!'
  }
  else if (playerSelection == 'paper' && computerSelection == 'rock') {
    return 'You win! Paper beats rock!!'
  }
  else if (playerSelection == 'paper' && computerSelection == 'scissors') {
    return 'You lose! Scissors beats paper'
  }
  else if (playerSelection == 'scissors' && computerSelection == 'paper') {
    return 'You win! Scissors beats paper!'
  }
  else if (playerSelection == 'scissors' && computerSelection == 'rock')
    return 'You lose! Rock beats scissors!'
  else {
    return 'Invalid choice! Please choose again.'
  }
}
 

console.log(playRound('paper', 'scissors'));

function game() {
  playRound()
}