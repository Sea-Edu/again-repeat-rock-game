const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}


// Game code start
let score = 0;
const choices = ['rock', 'paper', 'scissors'];

function playGame(userChoice) {
    const houseChoice = choices[Math.floor(Math.random() * choices.length)];
    document.getElementById('user-choice').textContent = userChoice;
    document.getElementById('house-choice').textContent = houseChoice;

    if (userChoice === houseChoice) {
        document.getElementById('result-message').textContent = 'It\'s a draw!';
    } else if (
        (userChoice === 'rock' && houseChoice === 'scissors') ||
        (userChoice === 'paper' && houseChoice === 'rock') ||
        (userChoice === 'scissors' && houseChoice === 'paper')
    ) {
        document.getElementById('result-message').textContent = 'You win!';
        score++;
        document.getElementById('score').textContent = score;
    } else {
        document.getElementById('result-message').textContent = 'You lose!';
        score = score > 0 ? score - 1 : 0;
        document.getElementById('score').textContent = score;
    }

    // Hide choices and show result
    document.getElementById('choices').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
    document.getElementById('play-again').classList.remove('hidden');
}

function resetGame() {
    document.getElementById('user-choice').textContent = '';
    document.getElementById('house-choice').textContent = '';
    document.getElementById('result-message').textContent = '';

    // Show choices and hide result
    document.getElementById('choices').classList.remove('hidden');
    document.getElementById('result').classList.add('hidden');
    document.getElementById('play-again').classList.add('hidden');
}