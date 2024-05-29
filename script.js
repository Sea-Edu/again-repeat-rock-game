const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");
let result_message = document.getElementById("result-message");
let score_user = document.getElementById("score");
let choices_group = document.getElementById("choices");
let result = document.getElementById("result");
let play_again = document.getElementById("play-again");

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}

// Game code start
let score = 0;
let gameInProgress = false; // Add a flag to track if the game is in progress
const choices = ["rock", "paper", "scissors"];

document
  .getElementById("rock")
  .addEventListener("click", () => playGame("rock"));
document
  .getElementById("paper")
  .addEventListener("click", () => playGame("paper"));
document
  .getElementById("scissors")
  .addEventListener("click", () => playGame("scissors"));

function playGame(userChoice) {
  if (gameInProgress) return; // If the game is already in progress, do nothing
  gameInProgress = true; // Set game in progress

  const houseChoice = choices[Math.floor(Math.random() * choices.length)];
  document.getElementById("user-choice").textContent = userChoice;
  document.getElementById(
    "user-choice-image"
  ).src = `/public/images/${userChoice}.svg`;
  document.getElementById("house-choice").textContent = houseChoice;
  document.getElementById(
    "comp-choice-image"
  ).src = `/public/images/${houseChoice}.svg`;

  let resultMessage;
  if (
    (userChoice === "rock" && houseChoice === "scissors") ||
    (userChoice === "paper" && houseChoice === "rock") ||
    (userChoice === "scissors" && houseChoice === "paper")
  ) {
    resultMessage = "You win!";
    score++;
  } else if (userChoice === houseChoice) {
    resultMessage = "It's a draw!";
  } else {
    resultMessage = "You lose!";
  }

  result_message.textContent = resultMessage;
  score_user.textContent = score;
  choices_group.classList.add("hidden");
  result.classList.remove("hidden");
  play_again.classList.remove("hidden");
}

function resetGame() {
  gameInProgress = false; // Reset game flag
  document.getElementById("user-choice").textContent = "";
  document.getElementById("house-choice").textContent = "";
  document.getElementById("result-message").textContent = "";

  document.getElementById("choices").classList.remove("hidden");
  document.getElementById("result").classList.add("hidden");
  document.getElementById("play-again").classList.add("hidden");
}
