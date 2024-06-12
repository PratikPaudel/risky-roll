'script'
const btnHold = document.querySelector('.hold'); 
let diceValue;
let currentScore = 0;
const playerScoreArray = [0, 0];
const rollDiceEl = document.querySelector(".roll-dice");
let diceImage = document.querySelector('.diceImage');

let activePlayer = 0;

const updateScores = function () {
    document.getElementById(`score--${activePlayer}`).textContent= playerScoreArray[activePlayer];
}

const addBackground = function (activePlayer) {
    document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
}
const removeBackground = function (activePlayer) {
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
}

const winnerWinnerChickenDinner = function () {
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
}

rollDiceEl.addEventListener('click', function () {
    diceImage.classList.remove('hidden');
    const diceValue= Math.floor(Math.random()*6)+1;
    diceImage.src = `dice-${diceValue}.png`;
    diceValue !== 1 
    ? (currentScore += diceValue, document.getElementById(`current--${activePlayer}`).textContent = currentScore)
    : switchPlayer();
    });

const switchPlayer = function() {
    console.log(activePlayer);
    updateScores(activePlayer);
    removeBackground(activePlayer);
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0; 
    activePlayer = 1 - activePlayer;
    addBackground(activePlayer);
}

const handleHoldButton = function () {
    playerScoreArray[activePlayer] += currentScore;
    updateScores(activePlayer);
    if (playerScoreArray[activePlayer] >= 30) {
        playerWon(activePlayer);
    }
    else {
    switchPlayer();
    }
}

const playerWon= function (activePlayer) {
    winnerWinnerChickenDinner(activePlayer);
    diceImage.classList.add('hidden');
    console.log("You win player:" + (activePlayer + 1));
}

btnHold.addEventListener('click', handleHoldButton);



    
