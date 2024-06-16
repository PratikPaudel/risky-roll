'script'
const btnHold = document.querySelector('.hold'); 
const newGame = document.querySelector('.reset-game'); 
const rollDiceEl = document.querySelector(".roll-dice");
let diceImage = document.querySelector('.diceImage');
const slider = document.getElementById("scoreSlider");
const scoreValue = document.getElementById("scoreValue");
let diceValue;
let currentScore;
const playerScoreArray = [];
let activePlayer;
let targetValue;

slider.oninput = function() {
  scoreValue.textContent = this.value;
  targetValue = this.value;
  localStorage.setItem("savedValue", targetValue);
//   console.log("hi there i am fine");
//   console.log(localStorage.getItem("savedValue"));
};

const updateScores = function () {
    document.getElementById(`score--${activePlayer}`).textContent= playerScoreArray[activePlayer];
    const totalScore = document.getElementById(`score--${activePlayer}`);
    // console.log(totalScore);
    // const ratingContent = totalScore.innerHTML;
    // const ratingScore = parseInt(ratingContent);
    // Define if the score is good, meh or bad according to its value
    // console.log(playerScoreArray[activePlayer]/targetValue);
    const scoreClass = (playerScoreArray[activePlayer]/targetValue) < 0.4 ? "bad" : (playerScoreArray[activePlayer]/targetValue) < 0.6 ? "meh" : "good";
    // Add score class to the rating
    totalScore.classList.remove("bad", "meh", "good");
    totalScore.classList.add(scoreClass);
    // After adding the class, get its color
    const ratingColor = window.getComputedStyle(totalScore).backgroundColor;
    console.log(ratingColor);
    // Define the background gradient according to the score and color
    const gradient = `background: conic-gradient(green ${((playerScoreArray[activePlayer] / targetValue) * 100).toFixed(2)}%, transparent 0 100%)`;
    // Set the gradient as the rating background
    totalScore.setAttribute("style", gradient);

    // Wrap the content in a tag to show it above the pseudo element that masks the bar
    totalScore.innerHTML = `<span>${playerScoreArray[activePlayer]}</span>`; 
}

const resetGame = function () {
    currentScore = 0;
    activePlayer = 0;
    playerScoreArray[0] = 0;
    playerScoreArray[1] = 0;
    diceImage.classList.add('hidden');
    // document.getElementById('score--0').textContent= 0;
    // document.getElementById('score--1').textContent= 0;
    document.getElementById('current--0').textContent = 0; 
    document.getElementById('current--1').textContent = 0; 
    document.querySelector(`.player--0--winner`).textContent = "";
    document.querySelector(`.player--1--winner`).textContent = "";
}

resetGame();
if (localStorage.getItem("savedValue") == null || localStorage.getItem("savedValue") === 0) {
    targetValue = 50;
    // console.log(targetValue);
    slider.value = targetValue;
    scoreValue.textContent = targetValue;
}
else {
    targetValue = localStorage.getItem("savedValue");
    // console.log(targetValue);
    slider.value = targetValue;
    // console.log("how are you");
    // console.log(targetValue);
    scoreValue.textContent = targetValue;
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
    updateScores(activePlayer);
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0; 
    activePlayer = 1 - activePlayer;
}

const handleHoldButton = function () {
    playerScoreArray[activePlayer] += currentScore;
    updateScores(activePlayer);
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
    document.querySelector(`.player--${activePlayer}--winner`).textContent = "Winner!!";
}


btnHold.addEventListener('click', handleHoldButton);
newGame.addEventListener('click', resetGame);




    
