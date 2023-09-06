const choices = ["rock", "paper", "scissors"];

function computerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function play(userChoice) {
    const computer = computerChoice();
    const message = document.getElementById("message");
    const computerChoiceText = document.getElementById("computer-choice");

    computerChoiceText.textContent = `Computer chose: ${computer}`;

    if (userChoice === computer) {
        message.textContent = "It's a tie!";
    } else if (
        (userChoice === "rock" && computer === "scissors") ||
        (userChoice === "paper" && computer === "rock") ||
        (userChoice === "scissors" && computer === "paper")
    ) {
        message.textContent = "You win!";
    } else {
        message.textContent = "Computer wins!";
    }
}

const buttons = document.querySelectorAll(".choice");

buttons.forEach((button) => {
    button.addEventListener("click", function () {
        const userChoice = button.id;
        play(userChoice);
    });
});
