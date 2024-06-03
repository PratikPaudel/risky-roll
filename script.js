'script'
const totalScoreEl = document.querySelector('.total-score').textContent = "hi";
const currentScoreEl = document.querySelector('.current-score').textContent = "hello";
const btnHold = document.querySelector('.hold'); 
let diceValue;
let totalScore;
let currentScore = 0;
const rollDiceEl = document.querySelector(".roll-dice");
rollDiceEl.addEventListener('click', function () {
    let diceValue= Math.floor(Math.random()*6)+1;
    let diceImage = document.querySelector('.diceImage');
    diceImage.src = `dice-${diceValue}.png`;
    currentScore = currentScore + diceValue;
    console.log(currentScore);
    if (btnHold.addEventListener('click', () => {
        totalScore += currentScore;
    }));
}); 