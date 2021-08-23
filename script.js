const body = document.querySelector('body');
const btnCheck = document.querySelector('.check');
const btnAgain = document.querySelector('.again');
const number = document.querySelector('.number');
const score = document.querySelector('.score');
const guessField = document.querySelector('.guess');

let randomNumber = Math.round(Math.random() * 20);
let scorePoints = 20;
let highScore = 0;

const displayMessage = function (msg) {
  document.querySelector('.message').textContent = msg;
};

btnCheck.addEventListener('click', () => {
  //when there's no number
  const guessFieldValue = Number(guessField.value);
  if (!guessFieldValue) {
    displayMessage('No number!');
  }
  //when player wins
  else if (guessFieldValue === randomNumber) {
    number.textContent = randomNumber;
    displayMessage("You're right!");
    body.style.backgroundColor = '#60b347';
    if (scorePoints > highScore) {
      highScore = scorePoints;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  //when guess is wrong
  else if (guessFieldValue !== randomNumber) {
    if (scorePoints > 1) {
      displayMessage(guessFieldValue > randomNumber ? 'Too high!' : 'Too Low!');
      scorePoints--;
    } else {
      displayMessage('You lost the game!');
      scorePoints = 0;
    }
  }
  score.textContent = scorePoints;

  // //when guess is too high
  // else if (guessFieldValue > randomNumber) {
  //   scorePoints -= 1;
  //   if (scorePoints > 0) {
  //     message.textContent = 'Too high!';
  //   } else {
  //     message.textContent = 'You lost the game!';
  //     scorePoints = 0;
  //   }
  // }
  // //when guess is too low
  // else if (guessFieldValue < randomNumber) {
  //   scorePoints -= 1;
  //   if (scorePoints > 0) {
  //     message.textContent = 'Too Low!';
  //   } else {
  //     message.textContent = 'You lost the game!';
  //     scorePoints = 0;
  //   }
  // }
  //
});

btnAgain.addEventListener('click', e => {
  randomNumber = Math.round(Math.random() * 20);
  guessField.value = '';
  scorePoints = 20;
  score.textContent = scorePoints;
  number.textContent = '?';
  displayMessage('Start guessing...');
  body.style.backgroundColor = '#222';

  // window.location.reload();
});
