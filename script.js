'script'
const totalScoreEl = document.querySelector('.total-score').textContent = "hi";
const currentScoreEl = document.querySelector('.current-score').textContent = "hello";
const btnHold = document.querySelector('.hold'); 
let diceValue;
let totalScore;
let currentScore = 0;
const playerScoreArray = [0, 0];
const rollDiceEl = document.querySelector(".roll-dice");
rollDiceEl.addEventListener('click', function () {
    let diceImage = document.querySelector('.diceImage');
    diceImage.classList.remove('hidden');
    let diceValue= Math.floor(Math.random()*6)+1;
    diceImage.src = `dice-${diceValue}.png`;
    currentScore = currentScore + diceValue;
    console.log(currentScore);
    if (diceValue === 1) {
        switchPlayer();
        console.log("You got 1");
    }
    if (btnHold.addEventListener('click', () => {
        totalScore += currentScore;
        playerScoreArray[0] = totalScore;
        console.log(playerScoreArray[0]);
        switchPlayer();
    }));
}); 
function switchPlayer() {

}