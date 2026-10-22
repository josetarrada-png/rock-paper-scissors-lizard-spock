const beats = {
	rock: ["scissors", "lizard"],
	paper: ["rock", "spock"],
	scissors: ["paper", "lizard"],
	lizard: ["paper", "spock"],
	spock: ["scissors", "rock"],
};

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors", "lizard", "spock"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

let humanScore = 0
let computerScore = 0
let roundsPlayed = 0
const totalRounds = 5

const choiceButtons = document.querySelectorAll(".buttons-container button");
const roundNumber = document.querySelector(".round-number");
const botonReiniciar = document.querySelector(".restart-button");
const scorePlayerElement = document.querySelector(".score-player");
const scoreComputerElement= document.querySelector(".score-computer");
const roundMessageElement= document.querySelector(".round-message");


// al pulsar un botón: se marca como elegido, se lee su elección, el ordenador elige al azar y se juega una ronda
choiceButtons.forEach((button) => {
  	button.addEventListener("click", () => {
	button.classList.add("selected");
	choiceButtons.forEach((element) => {
    element.disabled = true;
  });
    console.log(button.dataset.choice);
	let humanChoice = button.dataset.choice;
	let computerChoice = getComputerChoice();
	playRound(humanChoice, computerChoice);
	setTimeout(() => {
		choiceButtons.forEach((element) => {
      	element.disabled = false;
		element.classList.remove("selected")
    });

	}, 1100);
  });
});


function playRound(humanChoice, computerChoice) {	

 	if (humanChoice === computerChoice) {
 		console.log("It's a tie");
		roundMessageElement.textContent = "Empate";			

 	}else if (beats[humanChoice].includes(computerChoice)) {
 		humanScore = humanScore + 1
 		console.log("You win");
		roundsPlayed = roundsPlayed + 1;
		roundNumber.textContent = roundsPlayed;	
		scorePlayerElement.textContent = humanScore
		roundMessageElement.textContent = "Ganaste"
 	}else {
		computerScore = computerScore + 1
		console.log("You lose");
		roundsPlayed = roundsPlayed + 1;
		roundNumber.textContent = roundsPlayed;	
		scoreComputerElement.textContent = computerScore; 
		roundMessageElement.textContent = "Perdiste";	
	}
	if (roundsPlayed >= totalRounds) {
		choiceButtons.forEach((element) => {
			element.disabled = true
		});

		console.log("Game over");	
		if (humanScore > computerScore) {
			console.log("You win the game");					
		}else if (humanScore < computerScore) {
			console.log("Computer wins");			
    	} else {
			console.log("tie");			
		} 
	}
};

botonReiniciar.addEventListener("click", function () {

	humanScore = 0;
	computerScore = 0;
	roundsPlayed = 0;
	scoreComputerElement.textContent = 0;
	scorePlayerElement.textContent = 0;
	roundNumber.textContent = 0;

	choiceButtons.forEach((element) => {
	element.disabled = false;
	element.classList.remove("selected");
	roundMessageElement.textContent = ""

});	 
});




