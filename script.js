'script'
const totalScoreEl = document.querySelector('.total-score').textContent = "hi";
const btnHold = document.querySelector('.hold'); 
const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');

let diceValue;
let currentScore = 0;

const playerScoreArray = [0, 0];
const rollDiceEl = document.querySelector(".roll-dice");
let activePlayer = 0;
rollDiceEl.addEventListener('click', function () {
    let diceImage = document.querySelector('.diceImage');
    diceImage.classList.remove('hidden');
    const diceValue= Math.floor(Math.random()*6)+1;
    diceImage.src = `dice-${diceValue}.png`;

    if (diceValue !== 1) {
        currentScore += diceValue;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;

    } else {
        switchPlayer();
    }
    if (btnHold.addEventListener('click', () => {
        score[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];
    }));
}); 
const switchPlayer = function() {
    currentScore = 0;
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        if (activePlayer === 0 ) {
            activePlayer = 1;
        } else {
            activePlayer = 0;
        }
    player0El.classList.toggle('player-active');
    player1El.classList.toggle('player-active');
    
}
