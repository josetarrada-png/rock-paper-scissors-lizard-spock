const beats = {
	rock: ["scissors", "lizard"],
	paper: ["rock", "spock"],
	scissors: ["paper", "lizard"],
	lizard: ["paper", "spock"],
	spock: ["scissors", "rock"],
};

const wins = {
  "scissors-paper": "Tijeras cortan papel",
  "paper-rock": "Papel envuelve piedra",
  "rock-lizard": "Piedra aplasta lagarto",
  "lizard-spock": "Lagarto envenena a Spock",
  "spock-scissors": "Spock rompe tijeras",
  "scissors-lizard": "Tijeras decapitan lagarto",
  "lizard-paper": "Lagarto devora papel",
  "paper-spock": "Papel desautoriza a Spock",
  "spock-rock": "Spock vaporiza piedra",
  "rock-scissors": "Piedra aplasta tijeras",
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
    let humanChoice = button.dataset.choice;
	let computerChoice = getComputerChoice();
	showComputerChoice(computerChoice);
	playRound(humanChoice, computerChoice);

	if (roundsPlayed < totalRounds) {
		setTimeout(() => {
		choiceButtons.forEach((element) => {
      	element.disabled = false;
		element.classList.remove("selected")		
    });
	document.querySelector(".computer-choice").textContent = "";
	}, 1100);
  }
  });	
});

function playRound(humanChoice, computerChoice) {		

 	if (humanChoice === computerChoice) {
		roundMessageElement.textContent = "Empate";			

 	}else if (beats[humanChoice].includes(computerChoice)) {
 		humanScore = humanScore + 1
		roundsPlayed = roundsPlayed + 1;
		roundNumber.textContent = roundsPlayed;	
		scorePlayerElement.textContent = humanScore
		let key = humanChoice + "-" + computerChoice;
		roundMessageElement.textContent = "Ganaste: " + wins[key];
		
 	}else {
		computerScore = computerScore + 1
		roundsPlayed = roundsPlayed + 1;
		roundNumber.textContent = roundsPlayed;	
		scoreComputerElement.textContent = computerScore; 
		let key = computerChoice + "-" + humanChoice;
    	roundMessageElement.textContent = "Perdiste: " + wins[key];	
	}
	if (roundsPlayed >= totalRounds) {
		choiceButtons.forEach((element) => {
			element.disabled = true
		});
		
	if (humanScore > computerScore) {
      	roundMessageElement.textContent =
        roundMessageElement.textContent + ". ¡Ganas la partida!";
    } else {
      roundMessageElement.textContent =
	roundMessageElement.textContent + ". Gana el ordenador la partida.";
    }
	}
	
};

function showComputerChoice(choice) {
	const slot = document.querySelector(".computer-choice");
	slot.textContent = "";
	const img = document.createElement("img");
	img.src = `images/${choice}.png`;
	img.alt = "";
	slot.appendChild(img);
}

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
});	 

roundMessageElement.textContent = "";
document.querySelector(".computer-choice").textContent = "";

});




