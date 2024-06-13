'script'
const btnHold = document.querySelector('.hold'); 
const newGame = document.querySelector('.reset-game'); 
let diceValue;
let currentScore = 0;
const playerScoreArray = [0, 0];
const rollDiceEl = document.querySelector(".roll-dice");
let diceImage = document.querySelector('.diceImage');
let activePlayer = 0;
const slider = document.getElementById("scoreSlider");
const scoreValue = document.getElementById("scoreValue");
let targetValue = 0;
// Display the default slider value
scoreValue.textContent = slider.value;

// Update the current slider value (each time the slider handle is dragged)
slider.oninput = function() {
  scoreValue.textContent = this.value;
  targetValue = this.value;
  console.log("target value:" + targetValue);
};
const updateScores = function () {
    document.getElementById(`score--${activePlayer}`).textContent= playerScoreArray[activePlayer];
}

const addBackground = function (activePlayer) {
    document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
}
const removeBackground = function (activePlayer) {
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
}

rollDiceEl.addEventListener('click', function () {
    diceImage.classList.remove('hidden');
    diceImage.classList.add('shaking');
    setTimeout(() => {
        document.querySelector('.shaking')?.classList.remove('shaking');
      }, 500);
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
    console.log("target value:" + targetValue);
    if (playerScoreArray[activePlayer] >= targetValue) {
        playerWon(activePlayer);
    }
    else {
    switchPlayer();
    }
}

const playerWon = function (activePlayer) {
    diceImage.classList.add('hidden');
    confetti({
        particleCount: 150,
        spread: 120
      });
    console.log("You win player:" + (activePlayer + 1));
    document.querySelector(`.player--${activePlayer}--winner`).textContent = "Winner!!";
}

const resetGame = function () {
    console.log("clicked")
    playerScoreArray[0] = 0;
    playerScoreArray[1] = 0;
    currentScore = 0;
    activePlayer = 0;
    diceImage.classList.add('hidden');
    document.getElementById('score--0').textContent= 0;
    document.getElementById('score--1').textContent= 0;
    document.getElementById('current--0').textContent = 0; 
    document.getElementById('current--1').textContent = 0; 
    document.querySelector(`.player--0--winner`).textContent = "";
    document.querySelector(`.player--1--winner`).textContent = "";


}

btnHold.addEventListener('click', handleHoldButton);
newGame.addEventListener('click', resetGame);




    
