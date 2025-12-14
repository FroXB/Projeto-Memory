let flippedCards = [];
let matchedPairs = 0;
let attempts = 0;
let isCheckingPair = false;
let gameOver = false;

const deck = document.getElementById("deck");
const statsEl = document.getElementById("stats");
const restartBtn = document.getElementById("restart");
const endScreen = document.getElementById("endScreen");
const endMessage = document.getElementById("endMessage")
const gameContainer = document.querySelector(".game-container")

const emojis = ["🏂🏻", "🏃🏻‍♂️", "🏌🏻‍♀️", "🚣🏻‍♀️", "🧗🏻‍♀️", "🏇🏻", "🏋🏻‍♀️", "🚵🏻‍♀️"];

const cardItems = emojis.flatMap((content, index) => [
    { pairId: String(index + 1), content },
    { pairId: String(index + 1), content },
]);

function shuffleCards(array) {
    const shuffled = array.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function showEndScreen() {
    gameOver = true
    gameContainer.classList.add("is-finished")
    endScreen.classList.add("show")
    endScreen.setAttribute("aria-hidden", "false")
    restartBtn.textContent = "Jogar de novo"
    endMessage.textContent = `Você completou o jogo em ${attempts} tentativas.`

}

function hideEndScreen() {
    gameOver = false
    gameContainer.classList.remove("is-finished")
    endScreen.classList.remove("show")
    endScreen.setAttribute("aria-hidden", "true")
    restartBtn.textContent = "Reiniciar"
}

function createCard(card) {
    const cardElement = document.createElement("div");
    cardElement.className = "card";
    cardElement.dataset.pairId = card.pairId;

    const emoji = document.createElement("span");
    emoji.className = "card-emoji";
    emoji.textContent = card.content;

    cardElement.appendChild(emoji);
    cardElement.addEventListener("click", () => handleCardClick(cardElement));

    return cardElement;
}

function renderCards() {
    deck.innerHTML = "";

    const cards = shuffleCards(cardItems);
    cards.forEach((item) => {
        deck.appendChild(createCard(item));
    });
}

function handleCardClick(cardElement) {
    if (gameOver) return;
    if (isCheckingPair) return;
    if (cardElement.classList.contains("revealed")) return;
    if (cardElement.classList.contains("matched")) return;

    cardElement.classList.add("revealed");
    flippedCards.push(cardElement);

    if (flippedCards.length !== 2) return;

    isCheckingPair = true;
    attempts++;

    const [firstEl, secondEl] = flippedCards;
    const isMatch = firstEl.dataset.pairId === secondEl.dataset.pairId;

    if (isMatch) {
        matchedPairs++;

        firstEl.classList.remove("revealed");
        secondEl.classList.remove("revealed");
        firstEl.classList.add("matched");
        secondEl.classList.add("matched");

        flippedCards = [];
        isCheckingPair = false;
        updateStats();

        if (matchedPairs === cardItems.length / 2) {
            requestAnimationFrame(() => requestAnimationFrame(showEndScreen));
        }

        return;
    }

    setTimeout(() => {
        firstEl.classList.remove("revealed");
        secondEl.classList.remove("revealed");

        flippedCards = [];
        isCheckingPair = false;
        updateStats();
    }, 700);
}

function updateStats() {
    statsEl.textContent = `${matchedPairs} acertos de ${attempts} tentativas`;
}

function resetGame() {
    hideEndScreen();

    flippedCards = [];
    matchedPairs = 0;
    attempts = 0;
    isCheckingPair = false;

    renderCards();
    updateStats();
}

function initGame() {
    hideEndScreen();
    renderCards();
    updateStats();
    restartBtn.addEventListener("click", resetGame);
}

initGame();
