'script'
const btnHold = document.querySelector('.hold'); 
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
        playerScoreArray[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = playerScoreArray[activePlayer];
        switchPlayer();
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
}
const playerScoreEl0 = document.getElementById('score--0').textContent= playerScoreArray[0];
console.log(playerScoreEl0);
const playerScoreEl1 = document.getElementById('score--1').textContent= playerScoreArray[1];
console.log(playerScoreEl1);
