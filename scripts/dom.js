document.querySelector('.start-btn').onclick = function () {
  gameStartDOM();
};

function gameStartDOM() {
  document.querySelector('.logo').classList.add('inactive');
  document.querySelector('.background').classList.add('background-2');
  document.querySelector('.background').classList.remove('background');
  document.querySelector('.start-btn').classList.add('inactive');
  let timerText = document.createElement('p');
  timerText.setAttribute('class', 'countdown');
  document.querySelector('.game').appendChild(timerText);
  let countdownTimer = 3;
  let startCountdown = setInterval(function() {
    document.querySelector('.countdown').innerHTML = `Game will start in ${countdownTimer}`;
    countdownTimer -= 1;
    if (countdownTimer < 0) {
      clearInterval(startCountdown);
      document.querySelector('.countdown').classList.add('inactive');
      const currentGame = new OnePieceBlitz();
      displayCombo(currentGame.createCombo());
      displayAnswerOptions(currentGame.answerOptions, currentGame.answerKeys);
      attachEventListeners();
      startTimer();
    }
  }, 1000);
}

function displayCombo(comboArray) {
  for (let i = 0; i < comboArray.length; i++) {
    let elem = document.createElement('img');
    elem.setAttribute('src', `./images/characters/${comboArray[i]}.png`);
    elem.setAttribute('height', '250');
    elem.setAttribute('width', '250');
    elem.setAttribute('class', 'cards');
    document.querySelector('.game').appendChild(elem);
  }
}

function gameEnd() {
  let images = document.getElementsByClassName('cards');
  for (let i = images.length; i-->0;) {
    document.images[i].parentNode.removeChild(document.images[i]);
  }
  for (let j = 0; j < wantedName.length; j++) {
    document.querySelector(`.${wantedName[j]}`).textContent = '';
  }
  document.querySelector('.gameTime').innerHTML = '';
  document.querySelector('.game').innerHTML = `You got ${correctAnswers} correct answers!!`;
}

function displayAnswerOptions(answerOptionsArray, answerKeysArray) {
  for (let i = 0; i < answerOptionsArray.length; i++) {
    let elem = document.createElement('img');
    elem.setAttribute('src', `./images/characters/${answerOptionsArray[i].wantedName}-wanted.png`);
    elem.setAttribute('height', '300');
    elem.setAttribute('width', '200');
    elem.setAttribute('class', 'rounded mx-auto d-block wanted');
    document.querySelector(`.${answerOptionsArray[i].wantedName}`).appendChild(elem);
    let text = document.createElement('p');
    text.textContent = `Press ${answerKeysArray[i]} for ${answerOptionsArray[i].wantedName}!`;
    document.querySelector(`.${answerOptionsArray[i].wantedName}`).appendChild(text);
  }
}


function startTimer() {
  let gameTimeLeft = 30;
  let downloadTimer = setInterval(function () {
    document.querySelector('.gameTime').innerHTML = gameTimeLeft + ' seconds remaining';
    gameTimeLeft -= 1;
    if (gameTimeLeft < 10) {
      document.querySelector('.gameTime').classList.add('finalSeconds');
    }
    if (gameTimeLeft < 0) {
      clearInterval(downloadTimer);
      gameEnd();
    }
  }, 1000);
}

function eraseComboDOM() {
  const removeCards = document.getElementsByClassName('cards');
  while (removeCards[0]) {
    removeCards[0].parentNode.removeChild(removeCards[0]);
  }
}


document.addEventListener('keydown', function (event) {
  switch (event.keyCode) {
    case 81:
      if (currentGame.isCorrect(currentGame.answerOptions[0])) {
        currentGame.totalCorrectAnswers += 1;
        eraseComboDOM();
        displayCombo(currentGame.createCombo());
      } else { alert('errou!!!'); }
      break;
    case 87:
      if (currentGame.isCorrect(currentGame.answerOptions[1])) {
        currentGame.totalCorrectAnswers += 1;
        eraseComboDOM();
        displayCombo(currentGame.createCombo());
      } else { alert('errou!!!'); }
      break;
    case 69:
      if (currentGame.isCorrect(currentGame.answerOptions[2])) {
        currentGame.totalCorrectAnswers += 1;
        eraseComboDOM();
        displayCombo(currentGame.createCombo());
      } else { alert('errou!!!'); }
      break;
    case 65:
      if (currentGame.isCorrect(currentGame.answerOptions[3])) {
        currentGame.totalCorrectAnswers += 1;
        eraseComboDOM();
        displayCombo(currentGame.createCombo());
      } else { alert('errou!!!'); }
      break;
    case 83:
      if (currentGame.isCorrect(currentGame.answerOptions[4])) {
        currentGame.totalCorrectAnswers += 1;
        eraseComboDOM();
        displayCombo(currentGame.createCombo());
      } else { alert('errou!!!'); }
      break;
  }
});
