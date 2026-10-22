
const choiceButtons = document.querySelectorAll(".buttons-container");

choiceButtons.forEach((button) => {
	button.addEventListener("click", () => {
		let humanChoice = button.dateset.choice;
		let computerChoice = getComputerChoice();
		playRound(humanChoice, computerChoice)
	});
});

