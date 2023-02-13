//computer's random choice
const choices = ['squirtle', 'charmander', 'bulbasaur'];
const randChoice = () => Math.floor(Math.random() * choices.length);
let getComputerChoice = () => choices[(randChoice())];

//5 round game that keeps score and reports a winner or loser at the end

let computerScore = 0
let playerScore = 0

let choice = document.getElementById('choices');
let result = document.getElementById('result');
let displayWin = document.getElementById('displayWinner');
let squirtle = document.getElementById('squirtle');
let bulb = document.getElementById('bulbasaur');
let char = document.getElementById('charmander');
let rem1 = document.getElementById('remove1');
let rem2 = document.getElementById('remove2');
let rem3 = document.getElementById('remove3');
let btns = document.getElementById('btns');
let diag = document.getElementById('dialogueBox')

function disable(){
  //  squirtle.style.visibility='hidden';
  //  bulb.style.visibility='hidden';
  //  char.style.visibility='hidden';
  result.textContent ='';
  choice.textContent = '';
  bulb.remove();
  squirtle.remove();
  char.remove();
  let snor = document.createElement('p');
  snor.setAttribute('id', 'snorlax');
  snor.innerHTML = ('<img src= "images/snorlax.gif" id = "snorlaxPic"/>');
  rem2.appendChild(snor);
   
}

function enable(){
  //  squirtle.style.visibility = 'visible';
  //  bulb.style.visibility = 'visible';
  //  char.style.visibility = 'visible';
  rem1.appendChild(squirtle);
  rem2.appendChild(bulb);
  rem3.appendChild(char);
  let snorToRemove = document.getElementById('snorlax');
  snorToRemove.remove();
}

window.onload = function hide(){
  diag.style.display='none';
};


function playRound(e){
  

  let playerSelection =  event.target.id;
  let computerSelection = getComputerChoice();
  
  if (diag.style.display === 'none'){
    diag.style.display = 'flex';
  }
  choice.textContent = 'Computer\'s choice is ' + computerSelection + ' .';
  
  let currPokemon = document.getElementById(playerSelection);
  currPokemon.style.filter = 'grayscale(85%)';

  if (char === currPokemon){
    bulb.style.filter = 'grayscale(0%)';
    squirtle.style.filter = 'grayscale(0%)';
  } else if (bulb === currPokemon){
    char.style.filter = 'grayscale(0%)';
    squirtle.style.filter = 'grayscale(0%)';
  } else {
    char.style.filter = 'grayscale(0%)';
    bulb.style.filter = 'grayscale(0%)';
  }

  if (computerSelection === playerSelection) {
     result.textContent = ('It\'s a tie!');
     
  } else if (playerSelection === 'squirtle' && computerSelection === 'bulbasaur'){
      result.textContent = ('You lose! Grass beats Water!!');
      computerScore++;
     
  } else if (playerSelection === 'squirtle' && computerSelection === 'charmander'){
      result.textContent = ('You win! Water beats Fire!');
      playerScore++;
   
  } else if (playerSelection === 'bulbasaur' && computerSelection === 'squirtle'){
      result.textContent = ('You win! Grass beats Water!!');
      playerScore++;
   
  } else if (playerSelection === 'bulbasaur' && computerSelection === 'charmander'){
      result.textContent = ('You lose! Fire beats Grass');
      computerScore++;
     
  } else if (playerSelection === 'charmander' && computerSelection === 'bulbasaur'){
      result.textContent = ('You win! Fire beats Grass!');
      playerScore++;
   
  } else if (playerSelection === 'charmander' && computerSelection === 'squirtle'){
      result.textContent = ('You lose! Water beats Fire!')
      computerScore++;
   
  } else {
      result.textContent = ('Invalid choice! Please choose again.');
  }
  
  document.getElementById('yourScore').textContent = playerScore;
  document.getElementById('compScore').textContent = computerScore;
  
  let determineWinner = () => {
     if (playerScore > computerScore && playerScore >= 5) {
        displayWin.textContent = ('Game over. You win!! Congrats!')
       	disable();
        let di = document.createElement('p');
        di.innerHTML = ('Try again?');
        displayWin.appendChild(di);
        let butt = document.createElement('button');
        let done = document.createElement('p');
        done.appendChild(butt)
        done.setAttribute('id', 'hate');
        butt.innerHTML = ('New Game');
        butt.setAttribute('id', 'tryAg');
        displayWin.appendChild(done);
        let but2 = document.getElementById('tryAg')
        but2.addEventListener('click', function(){
          enable();
          computerScore = 0;
          playerScore = 0;
          playRound(e);
          displayWin.removeChild(di);
          displayWin.textContent = '';
          result.textContent ='Choose a Pokémon!';
          choice.textContent = '';
     		})
     } else if (playerScore < computerScore && computerScore >= 5) {
        displayWin.textContent = ('Game over. You lose!!! Sucks!!')
        disable();
        let d = document.createElement('p');
        d.innerHTML = ('Try again?');
        displayWin.appendChild(d);
        let butt = document.createElement('button');
        let done = document.createElement('p');
        done.appendChild(butt)
        done.setAttribute('id', 'hate');
        butt.innerHTML = ('New Game');
        butt.setAttribute('id', 'tryAg');
        displayWin.appendChild(done);
        let but2 = document.getElementById('tryAg')
        but2.addEventListener('click', function(){
          enable();
          computerScore = 0;
          playerScore = 0;
          playRound(e);
          displayWin.removeChild(d);
          displayWin.textContent = '';
					result.textContent ='Choose a Pokémon!';
          choice.textContent = '';
     		})
     	}
	}
  
  determineWinner();
}
 
document.getElementById('squirtle').addEventListener('click', playRound);
document.getElementById('bulbasaur').addEventListener('click', playRound);
document.getElementById('charmander').addEventListener('click', playRound);




//5 rounds
/* function game(){
  for (let i = 1; i < 5; i++) {
   let round = result.document.createTextNode('Round '+ i);
   result.appendChild(round);
   playRound(getPlayerChoice(), getComputerChoice());
     }
  determineWinner();
  }
} */

/* function endGame(){
  if 
} */